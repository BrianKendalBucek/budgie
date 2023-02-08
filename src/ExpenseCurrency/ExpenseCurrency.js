import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

export default function ExpenseCurrency({ currList }) {
  const [searchText, setSearchText] = useState(null);
  console.log(searchText);

  const options = [...currList]
    .sort((a, b) => {
      return a.name < b.name ? -1 : 1;
    })
    .map((x, i) => ({
      id: x.id,
      label: `${x.name || x.code} -- ${x.code}`,
      code: x.code,
    }));

  return (
    <Autocomplete
      fullWidth
      sx={{ mt: 2, color: "#E5E8ED" }}
      disablePortal
      value={searchText}
      id="currency-search"
      onChange={(e, newValue) => setSearchText(newValue)}
      options={options}
      isOptionEqualToValue={(options, value) => options.id === value.id}
      renderInput={(params) => (
        <TextField {...params} label="Currency">
          {options.code}
        </TextField>
      )}
      renderOption={(props, options) => {
        return (
          <li {...props} key={options.id}>
            {" "}
            {options.label}
          </li>
        );
      }}
    ></Autocomplete>
  );
}
