import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import BottomNav from "../BottomNav/BottomNav";
import ExpenseCurrencyList from "../Expenses/ExpenseCurrencyList";
import Header from "../Header/Header";

export default function UserSettings(props) {
  const auth = useAuth();
  const [currencyList, setCurrencyList] = useState([]);
  const [error, setError] = useState({ budget: false, active: false, msg: "" });
  const [success, setSuccess] = useState({ status: false, msg: "" });
  const [currency, setCurrency] = useState(null);
  const [budget, setBudget] = useState(auth.user.monthly_budget);

  const getCurrencyData = () => {
    axios
      .get("http://localhost:3002/api/currency", {
        withCredentials: true,
      })
      .then((res) => setCurrencyList(res.data));
  };

  useEffect(() => {
    getCurrencyData();
  }, []);

  const reset = () => {
    setError(() => ({ active: false, msg: "" }));
    setSuccess(() => ({ active: false, msg: "" }));
  };

  const handleChangeCurrency = (e) => {
    e.preventDefault();
    if (!currency) {
      setError(() => ({ active: true, msg: "Required" }));
      return;
    }
    axios
      .put(
        "http://localhost:3002/api/users",
        { currencyId: currency.id },
        { withCredentials: true }
      )
      .then(async (res) => {
        await auth.update();
        setSuccess(() => ({ active: true, msg: "Update success!" }));
      })
      .catch((err) => console.log(err));
  };

  const handleBudgetChange = (e) => {
    setBudget(() => e.target.value);
  };

  const handleBudgetSubmit = (e) => {
    e.preventDefault();
    if (!budget || budget <= 0) {
      setError({ budget: true, msg: "Please Enter Valid Budget" });
      return;
    }
    axios
      .put(
        "http://localhost:3002/api/users/budget",
        { budget },
        { withCredentials: true }
      )
      .then(async (res) => {
        await auth.update();
        setSuccess(() => ({ active: true, msg: "Update success" }));
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header viewTitle={props.viewTitle} />
      <Container
        sx={{ fontFamily: "monospace", maxHeight: "700px", overflow: "auto" }}
        component="main"
        maxWidth="xs"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            mt: 2,
          }}
        >
          <Box>
            <Typography sx={{ fontFamily: "monospace" }}>Currency:</Typography>
            <Typography sx={{ fontFamily: "monospace" }}>Budget:</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontFamily: "monospace" }}>
              <strong>{auth.user.currency_name}</strong>
            </Typography>
            <Typography sx={{ fontFamily: "monospace" }}>
              <strong>{auth.user.monthly_budget}</strong>
            </Typography>
          </Box>
        </Box>
        <Box
          component="form"
          onSubmit={(e) => handleChangeCurrency(e)}
          onChange={() => reset()}
          onClick={() => reset()}
          noValidate
          sx={{ mt: 1 }}
        >
          <ExpenseCurrencyList
            currList={currencyList}
            error={error}
            setCurrency={setCurrency}
          ></ExpenseCurrencyList>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              mb: 2,
              py: 0.5,
              fontFamily: "monospace",
              bgcolor: "#6D89AE",
              "&:hover": { bgcolor: "#9ACCE3" },
            }}
          >
            <Typography sx={{ fontFamily: "monospace", fontSize: "1rem" }}>
              Change Currency
            </Typography>
          </Button>
        </Box>
        <Box
          component="form"
          onSubmit={(e) => handleBudgetSubmit(e)}
          onChange={() => reset()}
          onClick={() => reset()}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            onChange={handleBudgetChange}
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            error={error.budget}
            margin="normal"
            fullWidth
            id="budget"
            type="number"
            label="Budget"
            name="budget"
            value={budget}
          />{" "}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              mb: 4,
              py: 0.5,
              fontFamily: "monospace",
              bgcolor: "#6D89AE",
              "&:hover": { bgcolor: "#9ACCE3" },
            }}
          >
            <Typography sx={{ fontFamily: "monospace", fontSize: "1rem" }}>
              Change Budget
            </Typography>
          </Button>
          <Grid container>
            {(error.active || error.budget) && (
              <Grid
                item
                sx={{
                  fontFamily: "monospace",
                  my: 3,
                  color: "red",
                  fontSize: "1rem",
                }}
              >
                {error.msg}!
              </Grid>
            )}
          </Grid>
          <Grid container>
            {success.active && (
              <Grid
                item
                sx={{
                  fontFamily: "monospace",
                  my: 3,
                  color: "green",
                  fontSize: "1rem",
                }}
              >
                {success.msg}!
              </Grid>
            )}
          </Grid>
        </Box>
      </Container>
      <BottomNav />
    </>
  );
}
