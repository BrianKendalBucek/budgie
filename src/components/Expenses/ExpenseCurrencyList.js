import { Autocomplete, TextField } from "@mui/material";

export default function ExpenseCurrencyList({
  currList,
  currency,
  setCurrency,
}) {
  const options = [...currList]
    .sort((a, b) => {
      return a.name < b.name ? -1 : 1;
    })
    .map((x, i) => ({
      id: x.id,
      label: `${x.code.toUpperCase() || x.name} - ${x.name}`,
      code: x.code,
    }));

  return (
    <Autocomplete
      fullWidth
      sx={{ mt: 2, color: "#E5E8ED" }}
      disablePortal
      id="currency-search"
      onChange={(e, newValue) => setCurrency(newValue || null)}
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
