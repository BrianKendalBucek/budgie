import { DeleteOutlineOutlined } from "@mui/icons-material";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ExpenseList from "../ExpenseList/ExpenseList";
import Header from "../Header/Header";
import "./Expenses.scss";

export default function Expenses(props) {
  const [expenseList, setExpenseList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/api/expenditures", {
        withCredentials: true,
      })
      .then((res) => {
        setExpenseList(res.data);
      });
  }, []);
  console.log(expenseList);

  const handleSubmit = () => {
    return null;
  };

  return (
    <>
      <Header viewTitle={props.viewTitle} />
      <Container
        sx={{ fontFamily: "monospace" }}
        component="main"
        maxWidth="xs"
      >
        <ExpenseList expenseList={expenseList} />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontFamily: "monospace" }}>Add New</Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              fullWidth
              id="cost"
              label="Price of item"
              name="cost"
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              id="currency"
              label="Currency of Purchase"
              name="currencyid"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="date"
              name="datePaid"
              type="date"
            />
            <TextField
              margin="normal"
              fullWidth
              id="notes"
              label="Notes"
              name="notes"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                fontFamily: "monospace",
                bgcolor: "#6D89AE",
                "&:hover": { bgcolor: "#9ACCE3" },
              }}
            >
              Submit
            </Button>
            {/*         <Grid container>
              {error.active && (
                <Grid
                  item
                  sx={{
                    fontFamily: "monospace",
                    my: 3,
                    color: "red",
                    fontSize: "1.2rem",
                  }}
                >
                  {error.msg}
                </Grid>
              )}
            </Grid> */}
          </Box>
        </Box>
      </Container>
    </>
  );
}
