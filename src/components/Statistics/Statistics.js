import { useState } from "react";
import Header from "../Header/Header";
import { Pie } from "../PieChart/PieChart";
import './Statistics.scss';
import { Link } from "react-router-dom";



export function Statistics() {


  const [data, setData] = useState([{ name: "CAD", value: 43 }, { name: "USD", value: 412 }, { name: "EUR", value: 665 }, { name: "GBP", value: 123 }])
  return (

    <div className="stats-main">
      <Header />
      <div className="stats-btns">
        <Link to="/category">
          <h1>Category</h1>
        </Link>
      </div>

    </div>
  )

}