import { useState } from "react";
// import useStyles from '../../styles';
import Header from "../Header/Header";
import './Statistics.scss';
import { Link } from "react-router-dom";
import { DayChart } from "./Charts/DayChart/DayChart";
import { PieChart } from "./Charts/PieChart/PieChart";
import { MonthCategChart } from "./Charts/MonthCategChart/MonthCategChart";
import ProgressBar from "./Charts/ProgressBar/ProgressBar";
import { Button } from '@mui/material';

//figure out props.completed which would be the percent of budget used

export function Statistics (props){
  const viewTitle = props.viewTitle;

  const testData = [
    { completed: 75 }
  ];

  const [data, setData] = useState([{ name: "CAD", value: 43 }, { name: "USD", value: 412 }, { name: "EUR", value: 665 }, { name: "GBP", value: 123 }])

  return (

    <div className="stats-main">
      <Header viewTitle={props.viewTitle}/>


      <div className="budget-prog">
        <h4>Budget spent</h4>
        {testData.map((item) => (
          <ProgressBar completed={item.completed} />
        ))}

      <div className="daychart">
        <DayChart />
      </div>

      <div className="piechart">
        <PieChart />
      </div>

      <div className="monthCategChart">
        <MonthCategChart />
      </div>

      <div className="stats-btns view-title">
        <Button variant="contained" sx={{backgroundColor: '#6D89AE', fontFamily: 'monospace'}}>
          <Link to="/category"><p>Category</p></Link></Button>
        <Button variant="contained" sx={{backgroundColor: '#6D89AE', fontFamily: 'monospace'}}>
          <Link to="/expenses"><p>Expenses</p></Link></Button>
        <Button variant="contained" sx={{backgroundColor: '#6D89AE', fontFamily: 'monospace'}}>
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