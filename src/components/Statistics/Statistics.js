import { useState } from "react";
import Header from "../Header/Header";
import { Pie } from "../PieChart/PieChart";
import './Statistics.scss';
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";

//figure out props.completed which would be the percent of budget used

export function Statistics (props){


  const testData = [
    { completed: 75 }
  ];

export function Statistics() {


  const [data, setData] = useState([{ name: "CAD", value: 43 }, { name: "USD", value: 412 }, { name: "EUR", value: 665 }, { name: "GBP", value: 123 }])
  return (

    <div className="stats-main">
      <Header />


      <div className="budget-prog">
        <h4>Budget spent</h4>
        {testData.map((item) => (
          <ProgressBar completed={item.completed} />
        ))}

      <div className="stats-btns">
        <Link to="/category">
          <h1>Category</h1>
        </Link>

      </div>
      
      <div className="stats-btns">
        <h2>Links will be buttons in the future</h2>
        <ul>
          <Link to="/category"><li>Category</li></Link>
          <Link to="/summary"><li>Summary</li></Link>
          <Link to="/expenses"><li>Expenses</li></Link>
          <Link to="/converter"><li>Converter</li></Link>
        </ul>


      </div>
    </div>
  )

}