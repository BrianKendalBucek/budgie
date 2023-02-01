import { useState } from "react";
import Header from "../Header/Header";
import './Statistics.scss';
import { Link } from "react-router-dom";
import { DayChart } from "../Charts/DayChart/DayChart";
import ProgressBar from "../Charts/ProgressBar/ProgressBar";

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

      <div className="stats-btns">
        <button><Link to="/category"><p>Category</p></Link></button>
        <button><Link to="/summary"><p>Summary</p></Link></button>
        <button><Link to="/expenses"><p>Expenses</p></Link></button>
        <button><Link to="/converter"><p>Converter</p></Link></button>
        {/* 
        Not sure that we will have these here or on their local pages
        <button>Add Expense</button>
        <button>New Category</button> */}
        </div>
      </div>
    </div>
  )

}