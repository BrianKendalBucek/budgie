import { useState } from "react";
import Header from "../Header/Header";
import { PieChart } from "../Charts/PieChart/PieChart";
import { MonthCategChart } from "../Charts/MonthCategChart/MonthCategChart";
import './CategGraph.scss';


export function CategGraph(props){

  return (

    <div className="stats-main">
      <Header viewTitle={props.viewTitle}/>
      <div className="pie-chart">
        <PieChart />
      </div>
      <div>
        <MonthCategChart />
      </div>
    </div>
  )
}