import React, { useRef, useState } from "react";
import { Box, Button, Grid, MenuItem, TextField } from "@mui/material";
import ExpenseCurrencyList from "./ExpenseCurrencyList";

export default function ExpenseCreate({
  categoryList,
  currList,
  handleSubmit,
}) {
  const [currency, setCurrency] = useState(null);
  const [error, setError] = useState({ active: false, msg: "" });

  const form = useRef(null);

  const reset = () => {
    setError(() => ({ active: false, msg: "" }));
  };

  const save = (e) => {
    e.preventDefault();
    const data = new FormData(form.current);
    const formItems = data.entries();
    let newExpense = {};
    for (const exp of formItems) {
      newExpense[exp[0]] = exp[1];
    }
    if (
      newExpense.cost &&
      newExpense.categoryId &&
      newExpense.notes &&
      newExpense.datePaid &&
      newExpense &&
      currency
    ) {
      newExpense = { ...newExpense, currencyId: currency.id };
      handleSubmit(newExpense);
    } else {
      setError(() => ({ active: true, msg: "Required" }));
      return;
    }
  };

  return (
    <Box
      component="form"
      onChange={() => reset()}
      onClick={() => reset()}
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
        error={error.active}
        margin="normal"
        fullWidth
        id="cost"
        label="Price of item"
        name="cost"
        type="number"
        autoFocus
        required
        helperText={error.active && error.msg}
      />
      <ExpenseCurrencyList
        currList={currList}
        setCurrency={setCurrency}
        error={error}
      ></ExpenseCurrencyList>
      <TextField
        error={error.active}
        helperText={error.active && error.msg}
        margin="normal"
        required
        fullWidth
        id="date"
        name="datePaid"
        type="date"
      ></TextField>
      <TextField
        error={error.active}
        helperText={error.active && error.msg}
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
        error={error.active}
        helperText={error.active && error.msg}
        margin="normal"
        fullWidth
        id="notes"
        label="Notes"
        name="notes"
        required
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
      <Grid container>
        {error.active && (
          <Grid
            item
            sx={{
              fontFamily: "monospace",
              my: 3,
              color: "red",
              fontSize: "1rem",
            }}
          >
            {error.msg} fields are blank!
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
