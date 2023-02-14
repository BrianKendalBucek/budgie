import { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Statistics.scss";
import { DayChart } from "./Charts/DayChart";
import { PieChart } from "./Charts/PieChart";
import { MonthCategChart } from "./Charts/MonthCategChart";
import { ProgressBar } from "./Charts/ProgressBar";
import moment from "moment";
import axios from "axios";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import BottomNav from "../BottomNav/BottomNav";
import UserCurrency from "./UserCurrency";

export function Statistics(props) {
  const [data, setData] = useState({
    users: [],
    expenditures: [],
    categories: [],
    dayTotal: [],
    monthSpent: [],
  });

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3002/api/users", { withCredentials: true }),
      axios.get("http://localhost:3002/api/expenditures", {
        withCredentials: true,
      }),
      axios.get("http://localhost:3002/api/categories/total_per_category", {
        withCredentials: true,
      }),
      axios.get("http://localhost:3002/api/expenditures/totals_per_day", {
        withCredentials: true,
      }),
      axios.get("http://localhost:3002/api/expenditures/budget_spent", {
        withCredentials: true,
      }),
    ]).then((all) => {
      setData((prev) => ({
        ...prev,
        users: all[0].data,
        expenditures: all[1].data,
        categories: all[2].data,
        dayTotal: all[3].data,
        monthSpent: all[4].data,
      }));
    });
  }, []);

  const getGuageData = () => {
    const percentage = +data.monthSpent.percentage_spent;
    return percentage;
  };

  const getCategChartData = () => {
    const { categories } = data;
    const newObj = {};
    for (const c of categories) {
      newObj[c.name] = c.total;
    }

    return newObj;
  };

  const getDayChartData = () => {
    const { dayTotal } = data;
    const newObj = {};
    for (const e of dayTotal) {
      const cleanDate = moment(e.date_paid).format("Do");
      newObj[cleanDate] = Number(e.total);
    }
    return newObj;
  };

  function ChartPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        // role="chartpanel"
        hidden={value !== index}
        id={`simple-chartpanel-${index}`}
        aria-labelledby={`simple-chart-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }

  ChartPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-chart-${index}`,
      "aria-controls": `simple-chartpanel-${index}`,
    };
  }

  function BasicCharts() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <Box sx={{ width: "100%" }} className="chart-swap">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic charts example"
            centered
          >
            <Tab label="Daily" {...a11yProps(0)} />
            <Tab label="Categories" {...a11yProps(1)} />
            <Tab label="Currency" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <ChartPanel
          value={value}
          index={0}
          className="day-chart"
          id="day-chart"
        >
          <DayChart data={getDayChartData()} />
        </ChartPanel>
        <ChartPanel value={value} index={1} className="pie-chart">
          <PieChart data={getCategChartData()} />
          <MonthCategChart data={getCategChartData()} />
        </ChartPanel>
        <ChartPanel>
          <UserCurrency />
        </ChartPanel>
      </Box>
    );
  }

  return (
    <div className="stats-main">
      <Header viewTitle={props.viewTitle} />

      <div className="budget-prog">
        <h4>Budget spent</h4>
        <ProgressBar data={getGuageData()} />
        <BasicCharts />
      </div>
      <BottomNav />
    </div>
  );
}
