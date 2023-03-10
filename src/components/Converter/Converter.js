import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Converter.scss";
import BottomNav from "../BottomNav/BottomNav";
import ExpenseCurrencyList from "../Expenses/ExpenseCurrencyList";

export function Converter(props) {
  const [primary, setPrimary] = useState("");
  const [secondary, setSecondary] = useState("");
  const [menuCurr, setMenuCurr] = useState([]);
  const [input, setInput] = useState(0);
  const [results, setResults] = useState("");
  const [error, setError] = useState({ active: false, msg: "" });

  const reset = () => {
    setError(() => ({ active: false, msg: "" }));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3002/api/currency", { withCredentials: true })
      .then((res) => setMenuCurr(res.data))
      .catch((err) => console.log(err));
  }, []);

  const calculate = () => {
    if (primary && secondary && input) {
      const primaryRate = menuCurr.find((x) => x.id === primary.id).rate_to_usd;
      const secondaryRate = menuCurr.find(
        (x) => x.id === secondary.id
      ).rate_to_usd;
      const calcRate = secondaryRate * (1 / primaryRate);

      return setResults(
        (input * calcRate).toFixed(2) + " " + secondary.code.toUpperCase()
      );
    } else {
      setError(() => ({ active: true, msg: "Required" }));
      return;
    }
  };

  return (
    <>
      <Header viewTitle={props.viewTitle} />
      <Container
        sx={{ fontFamily: "monospace", maxHeight: "700px", overflow: "auto" }}
        component="main"
        maxWidth="xs"
      >
        <div className="results">
          <Box
            sx={{
              fontFamily: "monospace",
              fontSize: "1.25rem",
            }}
            variant="standard"
          >
            {results}
          </Box>
        </div>
        <Box
          onChange={() => reset()}
          onClick={() => reset()}
          component="form"
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 1,
          }}
        >
          <TextField
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            error={error.active}
            required
            sx={{ my: 2, maxWidth: "50%" }}
            type="number"
            label="Enter value"
            variant="standard"
            className="value"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <Typography
            sx={{ alignSelf: "flex-start", fontFamily: "monospace", pt: 1 }}
          >
            From:
          </Typography>
          <ExpenseCurrencyList
            currList={menuCurr}
            setCurrency={setPrimary}
            error={error}
          ></ExpenseCurrencyList>
          <Typography
            sx={{ alignSelf: "flex-start", fontFamily: "monospace", pt: 1 }}
          >
            To:
          </Typography>
          <ExpenseCurrencyList
            currList={menuCurr}
            setCurrency={setSecondary}
            error={error}
          ></ExpenseCurrencyList>
        </Box>

        <Button
          fullWidth
          variant="contained"
          id="calc-submit"
          sx={{
            bgcolor: "#6D89AE",
            "&:hover": { bgcolor: "#9ACCE3" },
            fontFamily: "monospace",
          }}
          onClick={() => calculate()}
        >
          Submit
        </Button>
        <Grid container>
          {error.active && (
            <Grid
              item
              sx={{
                fontFamily: "monospace",
                my: 3,
                color: "red",
                fontSize: "1rem",
              }}
            >
              {error.msg} fields are blank!
            </Grid>
          )}
        </Grid>
      </Container>
      <BottomNav />
    </>
  );
}
