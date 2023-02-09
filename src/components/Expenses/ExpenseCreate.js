import React, { useRef, useState } from "react";
import { Box, Button, MenuItem, TextField } from "@mui/material";
import ExpenseCurrencyList from "./ExpenseCurrencyList";

export default function ExpenseCreate({
  categoryList,
  currList,
  handleSubmit,
}) {
  const [currency, setCurrency] = useState(null);
  const form = useRef(null);

  const save = (e) => {
    e.preventDefault();
    const data = new FormData(form.current);
    let newExpense = {};
    for (const exp of data.entries()) {
      newExpense[exp[0]] = exp[1];
    }
    newExpense = { ...newExpense, currencyId: currency.id };
    handleSubmit(newExpense);
  };

  return (
    <Box
      component="form"
      onSubmit={save}
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
      <ExpenseCurrencyList
        currList={currList}
        setCurrency={setCurrency}
      ></ExpenseCurrencyList>
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
        name="categoryId"
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
