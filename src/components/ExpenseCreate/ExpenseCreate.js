import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  ListSubheader,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { MonetizationOn, Search } from "@mui/icons-material";
import ExpenseCurrency from "../../ExpenseCurrency/ExpenseCurrency";

export default function ExpenseCreate({ categoryList, currList }) {
  const [currency, setCurrency] = useState("");
  const [searchText, setSearchText] = useState("");
  const form = useRef(null);

  // const handleCurrencySelect = (e) => {
  //   console.log(e.target.value);
  //   setCurrency(e.target.value);
  // };

  const handleSubmit = (e) => {
    console.log(form.current);
    e.preventDefault();
    const data = new FormData(form.current);
    const newExpense = {};
    for (const exp of data.entries()) {
      newExpense[exp[0]] = exp[1];
    }
    console.log(newExpense);
    return null;
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      ref={form}
      noValidate
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 1,
      }}
    >
      Home Currency is CAD
      <TextField
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        margin="normal"
        fullWidth
        id="cost"
        label="Price of item"
        name="cost"
        type="number"
        autoFocus
        required
      />
      <ExpenseCurrency currList={currList}></ExpenseCurrency>
      <TextField
        margin="normal"
        required
        fullWidth
        id="date"
        name="datePaid"
        type="date"
      ></TextField>
      <TextField
        id="outlined-select-category"
        select
        margin="normal"
        fullWidth
        label="Category"
        name="category_id"
        defaultValue=""
        required
      >
        {categoryList.map((cat) => (
          <MenuItem key={cat.id} value={cat.id}>
            {cat.name}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        margin="normal"
        fullWidth
        id="notes"
        label="Notes"
        name="notes"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          mt: 3,
          mb: 2,
          fontFamily: "monospace",
          bgcolor: "#6D89AE",
          "&:hover": { bgcolor: "#9ACCE3" },
        }}
      >
        Submit
      </Button>
      {/*         <Grid container>
              {error.active && (
                <Grid
                item
                sx={{
                  fontFamily: "monospace",
                  my: 3,
                  color: "red",
                    fontSize: "1.2rem",
                  }}
                  >
                  {error.msg}
                  </Grid>
                  )}
            </Grid> */}
    </Box>
  );
}
/*  return (
    <div className="form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input-container">
          <label>Currency</label>
          <input
            onChange={(e) => setCurrency(e.target.value)}
            value={currency}
            autoComplete="false"
            type='currency'
            name='currency'
            required
          />
        </div>
        <div className="input-container">
          <label>Price</label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            autoComplete="false"
            type='price'
            name='price'
            required
          />
        </div>
        <div className="input-container">
          <label>Category</label>
          <input
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            autoComplete="false"
            type='category'
            name='category'
            required
          />
        </div>
        <div className="input-container">
          <label>Notes</label>
          <input
            onChange={(e) => setNotes(e.target.value)}
            value={notes}
            autoComplete="false"
            type='notes'
            name='notes'
            required
          />
        </div>
        <div className="button-container">
          <button type='submit'>Create Expense</button>
        </div>
      </form>
    </div>
  );
} 

  .filter((x) => {
                const search = currency.toLowerCase();
                const code = x.code.toLowerCase();
                if (code === search) {
                  console.log("you selected", x);
                }
                return search && code.startsWith(search) && code !== search;
              })

*/
