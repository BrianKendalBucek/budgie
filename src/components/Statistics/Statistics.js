import { useEffect, useState } from "react";
// import useStyles from '../../styles';
import Header from "../Header/Header";
import "./Statistics.scss";
import { Link } from "react-router-dom";
import { DayChart } from "./Charts/DayChart";
import { PieChart } from "./Charts/PieChart";
import { MonthCategChart } from "./Charts/MonthCategChart";
import { ProgressBar } from "./Charts/ProgressBar";
import { Button } from "@mui/material";
import moment from "moment";
import axios from "axios";
import PropTypes from "prop-types";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

//figure out props.completed which would be the percent of budget used

export function Statistics(props) {
  const viewTitle = props.viewTitle;

  const testData = [{ completed: 75 }];

  const [data, setData] = useState({
    users: [],
    expenditures: [],
    categories: [],
    dayTotal: []
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
    ]).then((all) => {
      setData((prev) => ({
        ...prev,
        users: all[0].data,
        expenditures: all[1].data,
        categories: all[2].data,
        dayTotal: all[3].data
      }));
    })
    // .then((res) => console.log(res.data))
    // .catch((err) => console.log(err));
  }, []);

  
  const getCategChartData = () => {
    const { categories } = data;
    const newObj = {}
    for (const c of categories) {
      newObj[c.name] = c.total;
    }
    // console.log("newObj", newObj);
    return newObj;
  }
  
  const getDayChartData = () => {
    const { dayTotal } = data;
    const newObj = {}
    for (const e of dayTotal) {
      const cleanDate = moment(e.date_paid).format("Do");
      newObj[cleanDate] = Number(e.total);
    }
    return newObj;
  }


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
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
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
      'aria-controls': `simple-chartpanel-${index}`,
    };
  }

  function BasicCharts() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <Box sx={{ width: '100%' }} className="chart-swap">
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic charts example" centered >
            <Tab label="Daily" {...a11yProps(0)} />
            <Tab label="Categories" {...a11yProps(1)} />
            <Tab label="Budget or die" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <ChartPanel value={value} index={0} className="day-chart" id="day-chart">
          <DayChart data={getDayChartData()} />
        </ChartPanel>
        <ChartPanel value={value} index={1} className="pie-chart">
          <PieChart data={getCategChartData()} />
          <MonthCategChart data={getCategChartData()} />
        </ChartPanel>
        <ChartPanel value={value} index={2} className="month-categ-chart">
        <img src={require('./budgies-4.jpg')} alt="budgie" />
        </ChartPanel>
      </Box>
    );
  }

  // timestamp: total(per day)
  // category: total(per category)
  // have to match all the days via timestamp, 
  // take what cost/spent on those days added together
  // we currently have total per category

  // ****to sort timestamps
  // const unordered = {
  //   'b': 'foo',
  //   'c': 'bar',
  //   'a': 'baz'
  // };

  // console.log(JSON.stringify(unordered));
  // // → '{"b":"foo","c":"bar","a":"baz"}'

  // const ordered = Object.keys(unordered).sort().reduce(
  //   (obj, key) => { 
  //     obj[key] = unordered[key]; 
  //     return obj;
  //   }, 
  //   {}
  // );

  // console.log(JSON.stringify(ordered));
  // // → '{"a":"baz","b":"foo","c":"bar"}'



  // const getProgressData = () => {
  //   const { expenditures } = data;
  //   const monthBudget = data.users.monthly_budget;
  //   const totalCost = [];

  //   expenditures.forEach((element) => {
  //     totalCost.push(element.cost);
  //   });
  //   function sumArray(array) {
  //     let sum = 0;
  //     array.forEach((item) => {
  //       const toNumber = Number(item);
  //       sum += toNumber;
  //     });
  //     return sum;
  //   }

  //   const totalSpent = sumArray(totalCost);
  //   const budgetPercent = (totalSpent / monthBudget) * 100;
  //   const twoDec = Math.round(budgetPercent * 100) / 100;

  //   return twoDec;
  // };

  return (
    <div className="stats-main">
      <Header viewTitle={props.viewTitle} />

      <div className="budget-prog">
        <h4>Budget spent</h4>
          <ProgressBar  />


        <BasicCharts />

        {/* <div className="daychart">
          <DayChart data={getDayChartData()} />
        </div>

        <div className="piechart">
          <PieChart data={getCategChartData()} />
        </div>

        <div className="monthCategChart">
          <MonthCategChart data={getCategChartData()} />
        </div> */}



        <div className="stats-btns view-title">
          <Button
            variant="contained"
            sx={{ backgroundColor: "#6D89AE", fontFamily: "monospace" }}
          >
            <Link to="/category">
              <p>Category</p>
            </Link>
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#6D89AE", fontFamily: "monospace" }}
          >
            <Link to="/expenses">
              <p>Expenses</p>
            </Link>
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#6D89AE", fontFamily: "monospace" }}
          >
            <Link to="/converter">
              <p>Converter</p>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
