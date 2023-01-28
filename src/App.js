import "./App.scss";
import Welcome from "./components/Welcome/Welcome";
import Category from "./components/Category/index";
// import Form from "./components/CategoryList/Form";

import useApplicationData from "./hooks/useApplicationData.js";
import * as d3 from "d3";

import React, { useState } from "react";

export default function App() {
  const { state, CreateNewCategory } = useApplicationData();

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
    <>
      <Welcome />
      {/* <Form state={state} /> */}
      <Category
        categories={state.categories}
        CreateNewCategory={CreateNewCategory}
      />
    </>
  );
}
