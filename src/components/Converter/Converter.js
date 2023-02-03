import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Converter.scss";

//useState for map
export function Converter(props) {
  const [primary, setPrimary] = useState("");
  const [secondary, setSecondary] = useState("");
  const [menuCurr, setMenuCurr] = useState([]);

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

  return (
    <div>
      <Header viewTitle={props.viewTitle} />

      <Box className="primary-box">
        <FormControl fullWidth>
          <InputLabel id="primary-curr-label">Primary</InputLabel>
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
                  {ele.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>

      <Box className="secondary-box">
        <FormControl fullWidth>
          <InputLabel id="secondary-curr-label">Secondary</InputLabel>
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
                  {ele.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
