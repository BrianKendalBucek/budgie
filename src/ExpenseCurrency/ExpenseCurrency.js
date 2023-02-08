import { Search } from "@mui/icons-material";
import {
  Autocomplete,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  TextField,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { useState } from "react";

export default function ExpenseCurrency({ currList }) {
  const [searchText, setSearchText] = useState("");
  console.log(searchText);

  const options = currList.map((x, i) => ({
    id: x.id,
    label: x.name,
  }));

  console.log(options);
  return (
    <Autocomplete
      sx={{ mt: 2, color: "#E5E8ED" }}
      disablePortal
      value={searchText}
      id="currency-search"
      onChange={(e, newValue) => setSearchText(newValue)}
      options={options}
      renderInput={(params) => <TextField {...params} label="Currency" />}
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
