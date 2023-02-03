import { useState } from "react";
import Header from "../Header/Header";
import { PieChart } from "../Statistics/Charts/PieChart/PieChart";
import { MonthCategChart } from "../Statistics/Charts/MonthCategChart/MonthCategChart";
import './CategGraph.scss';
import ExpenseCreate from "../ExpenseCreate/ExpenseCreate";


export function CategGraph(props){

  return (

    <div className="stats-main">
      <Header viewTitle={props.viewTitle}/>
    </div>
  )
}