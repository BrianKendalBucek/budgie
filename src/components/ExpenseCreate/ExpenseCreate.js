import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

export default function ExpenseCreate(props) {
  const handleSubmit = () => {
    return null;
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography sx={{ fontFamily: "monospace" }}>Add New</Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          fullWidth
          id="cost"
          label="Price of item"
          name="cost"
          autoFocus
        />
        <TextField
          margin="normal"
          fullWidth
          id="currency"
          label="Currency of Purchase"
          name="currencyid"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="date"
          name="datePaid"
          type="date"
        />
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
} */
