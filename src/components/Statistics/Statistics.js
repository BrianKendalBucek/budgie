import { useEffect, useState } from "react";
// import useStyles from '../../styles';
import Header from "../Header/Header";
import "./Statistics.scss";
import { Link } from "react-router-dom";
import { DayChart } from "./Charts/DayChart/DayChart";
import { PieChart } from "./Charts/PieChart/PieChart";
import { MonthCategChart } from "./Charts/MonthCategChart/MonthCategChart";
import ProgressBar from "./Charts/ProgressBar/ProgressBar";
import { Button } from "@mui/material";
import moment from "moment";
import axios from "axios";

//figure out props.completed which would be the percent of budget used

export function Statistics(props) {
  const viewTitle = props.viewTitle;

  const testData = [{ completed: 75 }];

  // const [data, setData] = useState([{ name: "CAD", value: 43 }, { name: "USD", value: 412 }, { name: "EUR", value: 665 }, { name: "GBP", value: 123 }])
  const [data, setData] = useState({
    users: [],
    expenditures: [],
    categories: [],
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
    ]).then((all) => {
      setData((prev) => ({
        ...prev,
        users: all[0].data,
        expenditures: all[1].data,
        categories: all[2].data,
      }));
    }).then((res) => console.log(res.data))
    .catch((err) => console.log(err));
  }, []);

  // moment().format("MMM Do YY");
  const getDayChartData = () => {
    // const monthBudget = data.users.monthly_budget;
    const { expenditures } = data;
    const { categories } = data;

    const timeStamps = {};
    console.log("t", timeStamps)
    // console.log(total_per_category);
    expenditures.forEach((e) => {
      const momentTimeStamps = moment(e.date_paid).format("Do");
      if (!timeStamps[momentTimeStamps]) {
        timeStamps[momentTimeStamps] = 1;
      } else {
        timeStamps[e.category_id] += 1;
      }
    });
    return timeStamps;
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


  // user/3/monthly_budget for ticks {}

  // const getCategChartData = () => {
  //   const { expenditures } = data;
  //   // const { categories } = data;
  //   const categAmount = {};

  //   expenditures.forEach((e) => {
  //     if (!categAmount[e.category_id]) {
  //       categAmount[e.category_id] = 1;
  //     } else {
  //       categAmount[e.category_id] += 1;
  //     }
  //   });
  //   return categAmount;
  // };
  const getCategChartData = () => {
    const { categories } = data;
    const newObj = {}
    for (const c of categories) {
      newObj[c.name] = c.total;
    }
    return newObj;
  }


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
        {testData.map((item, i) => (
          <ProgressBar key={i} completed={item.completed} />
        ))}

        <div className="daychart">
          <DayChart data={getDayChartData()} />
        </div>

        <div className="piechart">
          <PieChart data={getCategChartData()} />
        </div>

        <div className="monthCategChart">
          <MonthCategChart data={getCategChartData()} />
        </div>

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
          {/* 
        Not sure that we will have these here or on their local pages
        <button>Add Expense</button>
        <button>New Category</button> */}
        </div>
      </div>
    </div>
  );
}
