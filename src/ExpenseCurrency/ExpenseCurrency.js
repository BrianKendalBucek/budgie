import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

export default function ExpenseCurrency({ currList }) {
  const [searchText, setSearchText] = useState(null);

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

/* <Container>
      <TextField
        sx={{ position: "fixed" }}
        margin="normal"
        label="Search"
        autoFocus
        onChange={(e) => setSearchText(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {" "}
              <Search />
            </InputAdornment>
          ),
        }}
      />
      {currList
        .filter((x) => {
          const search = searchText.toLowerCase();
          const code = x.name.toLowerCase();
          if (code === search) {
            console.log("you selected", x);
          }
          return search && code.startsWith(search) && code !== search;
        })
        .map((curr) => (
          <MenuItem key={curr.id} value={curr.code}>
            {curr.name}
          </MenuItem>
        ))}
      <List>
        {currList
          .filter((curr) => {
            const search = searchText.toLowerCase();
            const code = curr.name.toLowerCase();
            if (code === search) {
              console.log("you selected", curr);
            }
            return search && code.startsWith(search) && code !== search;
          })
          .map((curr) => (
            <ListItem sx={{ fontFamily: "monospace" }}>
              <ListItemText
                key={curr.id}
                secondary={`${curr.code.toUpperCase()}`}
              >
                {curr.name}
              </ListItemText>
            </ListItem>
          ))}
      </List>
    </Container> */
