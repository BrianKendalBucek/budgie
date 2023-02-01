import { useState } from "react";
import Header from "../Header/Header";
import { PieChart } from "../PieChart/PieChart";
import { MonthChart } from "../MonthChart/MonthChart";
import { DayChart } from "../DayChart/DayChart";
import './CategGraph.scss';


export function CategGraph(props){

  return (

    <div className="stats-main">
      <Header viewTitle={props.viewTitle}/>
      <div className="pie-chart">
        <PieChart />
      </div>
      <div>
        <MonthChart />
      </div>
      <div>
        <DayChart />
      </div>
    </div>
  )
}