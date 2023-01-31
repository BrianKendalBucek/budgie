import { useState } from "react";
import Header from "../Header/Header";
import { Pie, Bar } from "../PieChart/PieChart";
import './CategGraph.scss';



export function CategGraph (){


  const [donutData, setData] = useState([{name: "CAD", value: 43}, {name: "USD", value: 412}, {name: "EUR", value: 665}, {name: "GBP", value: 123}])
  // const [barData, setBarData] = useState([200, 250, 60, 150, 100, 175]);
  
  return (

    <div className="stats-main">
      <Header />
      <div className="pie-chart">
        <Pie
          data={donutData}
          width={300}
          height={300}
          innerRadius={100}
          outerRadius={140}
        />
      </div>
      <div>
        <Bar
          // data={barData}
          // width={400}
          // height={300}
        />
      </div>

    </div>
  )

}