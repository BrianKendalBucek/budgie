import { DeleteOutlineOutlined } from "@mui/icons-material";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ExpenseCreate from "../ExpenseCreate/ExpenseCreate";
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

  return (
    <>
      <Header viewTitle={props.viewTitle} />
      <Container
        sx={{ fontFamily: "monospace" }}
        component="main"
        maxWidth="xs"
      >
        <ExpenseList expenseList={expenseList} />
        <ExpenseCreate />
      </Container>
    </>
  );
}
