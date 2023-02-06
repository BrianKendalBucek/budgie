import "./Welcome.scss";
import * as d3 from "d3";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import useApplicationData from "../../hooks/useApplicationData";

function Welcome() {
  const { state } = useApplicationData();

  /* generateData used to create random data for chart build testing purposes */
  const generateData = (value, length = 5) =>
    d3.range(length).map((item, index) => ({
      date: index,
      value:
        value === null || value === undefined ? Math.random() * 100 : value,
    }));

  // const [data, setData] = useState(generateData());
  const changeData = () => {
    setData(generateData());
  };

  // Hardcoded data in useState to eventually use data from API call/DB
  const [data, setData] = useState([
    { name: "CAD", value: 43 },
    { name: "USD", value: 412 },
    { name: "EUR", value: 665 },
    { name: "GBP", value: 123 },
  ]);

  return (
    <div className="Welcome">
      <header className="Welcome-header">
        <Link to="/login">
          <img
            src="https://github.com/BrianKendalBucek/budgie/blob/main/assets/budgie-icon.png?raw=true"
            className="budgie-logo"
            alt="Budgie logo"
          />
        </Link>
        <div className="welcome-title">
          <Link to="/login">
            <h1>Budgie</h1>
            <p>Let's fly!</p>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Welcome;
