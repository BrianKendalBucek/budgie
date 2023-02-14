import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import ExpenseCurrencyList from "../Expenses/ExpenseCurrencyList";

export default function UserCurrency(props) {
  const auth = useAuth();
  const [currencyList, setCurrencyList] = useState([]);
  const [error, setError] = useState({ active: false, msg: "" });
  const [currency, setCurrency] = useState(null);

  // const getUserData = () => {
  //   axios.get("http://localhost:3002/api/users", {withCredentials: true}).then(());
  // };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("change currency to ", currency);
    axios
      .put(
        "http://localhost:3002/api/users",
        { currencyId: currency.id },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res, auth.user);
        auth.auth();
      })
      .catch((err) => console.log(err));
  };
  return (
    <Container
      sx={{ fontFamily: "monospace", maxHeight: "700px", overflow: "auto" }}
      component="main"
      maxWidth="xs"
    >
      <Box
        component="form"
        onSubmit={(e) => handleSubmit(e)}
        noValidate
        sx={{ mt: 1 }}
      >
        <Typography sx={{ fontFamily: "monospace", fontSize: "1rem" }}>
          Current Currency: <strong>{auth.user.currency_name}</strong>
        </Typography>
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
    </Container>
  );
}