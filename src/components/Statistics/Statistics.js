import { useEffect, useState } from "react";
// import useStyles from '../../styles';
import Header from "../Header/Header";
import './Statistics.scss';
import { Link } from "react-router-dom";
import { DayChart } from "./Charts/DayChart/DayChart";
import { PieChart } from "./Charts/PieChart/PieChart";
import { MonthCategChart } from "./Charts/MonthCategChart/MonthCategChart";
import ProgressBar from "./Charts/ProgressBar/ProgressBar";
import { Button } from '@mui/material';
import axios from 'axios';


//figure out props.completed which would be the percent of budget used

export function Statistics(props) {

  const viewTitle = props.viewTitle;

  const testData = [
    { completed: 75 }
  ];

  // const [data, setData] = useState([{ name: "CAD", value: 43 }, { name: "USD", value: 412 }, { name: "EUR", value: 665 }, { name: "GBP", value: 123 }])
  const [data, setData] = useState({
    users: [],
    expenditures: [],
    categories: []
  });

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:3002/api/users/3'),
      axios.get('http://localhost:3002/api/expenditures/3'),
      axios.get('http://localhost:3002/api/categories/get_categories_by_id/3')
    ]).then((all) => {
      setData(prev => ({ ...prev, users: all[0].data, expenditures: all[1].data, categories: all[2].data }));
    });
  }, []);


  const getProgressData = () => {
    const { expenditures } = data;
    const monthBudget = data.users.monthly_budget;
    const totalCost = [];

    expenditures.forEach((element) => {
      totalCost.push(element.cost);
    })
    function sumArray(array) {
      let sum = 0;
      array.forEach(item => {
        const toNumber = Number(item);
        sum += toNumber;
      });
      return sum;
    }

    const totalSpent = sumArray(totalCost);
    const budgetPercent = totalSpent / monthBudget * 100;
    const twoDec = Math.round(budgetPercent * 100) / 100;

    return twoDec;
  }

  // getProgressData(data);



  // const getDayChartData = (data) => {
  //   const monthBudget = data.users.monthly_budget;
  //   const expendData = data.expenditures;
  //   const timeStamps = [];

  //   expendData.forEach((element) => {
  //     timeStamps.push(element.date_paid);
  //   })
  // console.log("**timestamps**", timeStamps);
  // ?????? How to sort timestamp array

  // user/3/monthly_budget for ticks {}
  // expenditures/3/date_paid day [{}, {}, {}]
  // let count = 0;
  // figure how to isolate days from timestamp
  // count number of days per expenditure
  // bar per day 
  // }
  // getDayChartData(data);


  const getCategChartData = () => {
    const { expenditures } = data;
    const categAmount = {};

    expenditures.forEach((e) => {

      if (!categAmount[e.category_id]) {
        categAmount[e.category_id] = 1;
      } else {
        categAmount[e.category_id] += 1;
      }
    })
    return categAmount;
  }

// getPieChartData(data);

  //   console.log("**********", arrayCategId);
  // categories/get_categories_by_id/3 [{}, {}, {}]
  // how many per category
  // expenditures/3/category_id [{}, {}, {}]
  // add all for each category
  // slice per category
  // getPieChartData(data);
  // const array = [1, 1, 2, 1, 4, 4, 6, 3, 6, 6, 7, 5, 1, 1, 1, 4, 4, 3, 4, 3, 5, 5, 5, 5, 5, 4, 3, 2, 3, 2];
  // const newArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];




  // const getMonthlyCategChartData = () => {
  // expenditures/3/category_id [{}, {}, {}]
  // add all for each category
  // bar per category
  // }

  return (

    <div className="stats-main">
      <Header viewTitle={props.viewTitle} />


      <div className="budget-prog">
        <h4>Budget spent</h4>
        {testData.map((item) => (
          <ProgressBar completed={item.completed} />
        ))}

        <div className="daychart">
          <DayChart />
        </div>

        <div className="piechart">
          <PieChart data = {getCategChartData()}/>
        </div>

        <div className="monthCategChart">
          <MonthCategChart data = {getCategChartData()}/>
        </div>

        <div className="stats-btns view-title">
          <Button variant="contained" sx={{ backgroundColor: '#6D89AE', fontFamily: 'monospace' }}>
            <Link to="/category"><p>Category</p></Link></Button>
          <Button variant="contained" sx={{ backgroundColor: '#6D89AE', fontFamily: 'monospace' }}>
            <Link to="/expenses"><p>Expenses</p></Link></Button>
          <Button variant="contained" sx={{ backgroundColor: '#6D89AE', fontFamily: 'monospace' }}>
            <Link to="/converter"><p>Converter</p></Link></Button>
          {/* 
        Not sure that we will have these here or on their local pages
        <button>Add Expense</button>
        <button>New Category</button> */}
        </div>
      </div>
    </div>
  )

}