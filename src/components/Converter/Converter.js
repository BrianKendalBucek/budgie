import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Converter.scss";
import BottomNav from "../BottomNav/BottomNav";
import ExpenseCurrencyList from "../Expenses/ExpenseCurrencyList";

//useState for map
export function Converter(props) {
  const [primary, setPrimary] = useState("");
  const [secondary, setSecondary] = useState("");
  const [menuCurr, setMenuCurr] = useState([]);
  const [input, setInput] = useState(0);
  const [results, setResults] = useState("Result");

  useEffect(() => {
    axios
      .get("http://localhost:3002/api/currency", { withCredentials: true })
      .then((res) => setMenuCurr(res.data))
      .catch((err) => console.log(err));
  }, []);

  const calculate = () => {
    const primaryRate = menuCurr.find((x) => x.id === primary.id).rate_to_usd;
    const secondaryRate = menuCurr.find(
      (x) => x.id === secondary.id
    ).rate_to_usd;
    const calcRate = secondaryRate * (1 / primaryRate);

    return setResults(
      (input * calcRate).toFixed(2) + " " + secondary.code.toUpperCase()
    );
  };

  return (
    <>
      <Header viewTitle={props.viewTitle} />
      <Container
        sx={{ fontFamily: "monospace", maxHeight: "600px", overflow: "auto" }}
        component="main"
        maxWidth="xs"
      >
        <div className="results">
          <h2>{results}</h2>
        </div>
        <Box
          component="form"
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 1,
          }}
        >
          <Typography sx={{ alignSelf: "flex-start", fontFamily: "monospace" }}>
            From:
          </Typography>
          <ExpenseCurrencyList
            currList={menuCurr}
            setCurrency={setPrimary}
          ></ExpenseCurrencyList>
          <TextField
            fullWidth
            sx={{ my: 2 }}
            id="standard-basic"
            label="Enter value"
            variant="standard"
            className="value"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <Typography sx={{ alignSelf: "flex-start", fontFamily: "monospace" }}>
            To:
          </Typography>
          <ExpenseCurrencyList
            currList={menuCurr}
            setCurrency={setSecondary}
          ></ExpenseCurrencyList>
        </Box>

        <Button
          fullWidth
          variant="contained"
          id="calc-submit"
          onClick={() => calculate()}
        >
          Submit
        </Button>
      </Container>
      <BottomNav />
    </>
  );
}

/*       <Box className="primary-box">
        <FormControl fullWidth>
          <InputLabel id="primary-curr-label">From Currency</InputLabel>
          <Select
            labelId="primary-curr-label"
            id="primary-curr"
            label="primary-curr"
            value={primary}
            onChange={handleChange}
          >
            {menuCurr.map((ele) => {
              return (
                <MenuItem key={ele.id} value={ele.code}>
                  {ele.code.toUpperCase()} - {ele.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>

      <Box className="secondary-box">
        <FormControl fullWidth>
          <InputLabel id="secondary-curr-label">To Currency</InputLabel>
          <Select
            labelId="secondary-curr-label"
            id="secondary-curr"
            label="secondary-curr"
            value={secondary}
            onChange={secondaryChange} //This needs to be changed.
          >
            {menuCurr.map((ele) => {
              return (
                <MenuItem key={ele.id} value={ele.code}>
                  {ele.code.toUpperCase()} - {ele.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>

      <TextField
        id="standard-basic"
        label="Enter value"
        variant="standard"
        className="value"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />

      <br /> */
