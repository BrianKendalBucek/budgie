import { DeleteOutlineOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ExpenseCreate from "../ExpenseCreate/ExpenseCreate";
import ExpenseList from "../ExpenseList/ExpenseList";
import Header from "../Header/Header";
import "./Expenses.scss";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Typography>{children}</Typography>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Expenses(props) {
  const [expenseList, setExpenseList] = useState([]);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        {" "}
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="top nav bar "
            centered
          >
            <Tab
              sx={{ fontFamily: "monospace" }}
              label="Expense List"
              {...a11yProps(0)}
            />
            <Tab
              sx={{ fontFamily: "monospace" }}
              label="Add New"
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <ExpenseList expenseList={expenseList} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ExpenseCreate />
        </TabPanel>
      </Container>
    </>
  );
}
