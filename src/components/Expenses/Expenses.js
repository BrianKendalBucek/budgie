import { Box, Container, Tab, Tabs } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ExpenseCreate from "./ExpenseCreate";
import ExpenseList from "./ExpenseList";
import Header from "../Header/Header";
import BottomNav from "../BottomNav/BottomNav";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Expenses(props) {
  const [expenseList, setExpenseList] = useState([]);
  const [category, setCategory] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getData = () => {
    Promise.all([
      axios.get("http://localhost:3002/api/categories/get_categories_by_id", {
        withCredentials: true,
      }),
      axios.get("http://localhost:3002/api/expenditures", {
        withCredentials: true,
      }),
      axios.get("http://localhost:3002/api/currency", {
        withCredentials: true,
      }),
    ])

      .then((all) => {
        setCategory(all[0].data);
        setExpenseList(all[1].data);
        setCurrencies(all[2].data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = (newExpense) => {
    axios
      .post(
        "http://localhost:3002/api/expenditures",
        { newExpense },
        { withCredentials: true }
      )
      .then(() => getData())
      .then(() => handleChange(null, 0))
      .catch((err) => console.log(err.message));
  };

  const handleDelete = (id) => {
    axios({
      method: "DELETE",
      url: "http://localhost:3002/api/expenditures/delete",
      data: { expenseId: id },
      withCredentials: true,
    })
      .then(() => {
        getData();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header viewTitle={props.viewTitle} />
      <Container
        sx={{ fontFamily: "monospace", maxHeight: "600px", overflow: "auto" }}
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
              label="Expenses"
              {...a11yProps(0)}
            />
            <Tab
              sx={{ fontFamily: "monospace" }}
              label="Add New"
              {...a11yProps(1)}
            />{" "}
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <ExpenseList expenseList={expenseList} handleDelete={handleDelete} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ExpenseCreate
            categoryList={category}
            currList={currencies}
            handleSubmit={handleSubmit}
          />
        </TabPanel>
      </Container>
      <BottomNav />
    </>
  );
}
