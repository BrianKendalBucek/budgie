import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Converter.scss";
import BottomNav from "../BottomNav/BottomNav"

//useState for map
export function Converter(props) {
  const [primary, setPrimary] = useState("");
  const [secondary, setSecondary] = useState("");
  const [menuCurr, setMenuCurr] = useState([]);
  const [input, setInput] = useState(0);
  const [results, setResults] = useState("Results");

  //Need to DRY this up, make it reusable somehow

  const handleChange = (event) => {
    setPrimary(event.target.value);
  };
  const secondaryChange = (event) => {
    setSecondary(event.target.value);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3002/api/currency", { withCredentials: true })
      .then((res) => {
        const currencyCodes = [];
        res.data.forEach((ele) => {
          currencyCodes.push({
            id: ele.id,
            name: ele.name,
            code: ele.code,
            rate: ele.rate_to_usd,
          });
        });
        setMenuCurr(currencyCodes);
      });
  }, []);

  const calculate = () => {
    const code = menuCurr.find((x) => x.code === primary).name;
    const primaryRate = menuCurr.find((x) => x.code === primary).rate;
    const secondaryRate = menuCurr.find((x) => x.code === secondary).rate;
    const calcRate = secondaryRate * (1 / primaryRate);

    return setResults((input * calcRate).toFixed(2) + " " + code);
  };

  return (
    <div>
      <Header viewTitle={props.viewTitle} />

      <div className="results">
        <h2>{results}</h2>
      </div>

      <Box className="primary-box">
        <FormControl fullWidth>
          <InputLabel id="primary-curr-label">Primary Currency</InputLabel>
          <Select
            labelId="primary-curr-label"
            id="primary-curr"
            label="primary-curr"
            value={primary}
            onChange={handleChange}
          >
            {menuCurr.map((ele) => {
              return (
                <MenuItem key={ele.id} value={ele.code}>
                  {ele.code.toUpperCase()} - {ele.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>

      <Box className="secondary-box">
        <FormControl fullWidth>
          <InputLabel id="secondary-curr-label">Secondary Currency</InputLabel>
          <Select
            labelId="secondary-curr-label"
            id="secondary-curr"
            label="secondary-curr"
            value={secondary}
            onChange={secondaryChange} //This needs to be changed.
          >
            {menuCurr.map((ele) => {
              return (
                <MenuItem key={ele.id} value={ele.code}>
                  {ele.code.toUpperCase()} - {ele.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>

      <TextField
        id="standard-basic"
        label="Enter value"
        variant="standard"
        className="value"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />

      <br />

      <Button
        variant="contained"
        id="calc-submit"
        onClick={() => {
          calculate();
        }}
      >
        Submit
      </Button>

      <BottomNav />
    </div>
  );
}
