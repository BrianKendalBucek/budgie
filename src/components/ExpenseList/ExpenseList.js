import React, { useState } from "react";
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";
import ExpenseModal from "./ExpenseModal";

export default function ExpenseList({ expenseList, handleDelete }) {
  const [open, setOpen] = useState(false);
  const [singleExpense, setSingleExpense] = useState(null);

  const handleOpen = (id) => {
    const singleEx = expenseList.find((x) => x.ex_id === id);
    setSingleExpense(singleEx);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const expenses = expenseList.map((e) => (
    <React.Fragment key={e.ex_id}>
      <ListItem
        sx={{ fontFamily: "monospace" }}
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => handleOpen(e.ex_id)}
          >
            <MoreHoriz sx={{ color: "#9ACCE3", fontSize: "2.5rem" }} />
          </IconButton>
        }
      >
        <ListItemText primary={e.notes}></ListItemText>
      </ListItem>
      <Divider />
    </React.Fragment>
  ));

  return (
    <List sx={{ mt: 2 }}>
      {expenses}{" "}
      {open && (
        <ExpenseModal
          open={handleOpen}
          close={handleClose}
          singleExpense={singleExpense}
          handleDelete={handleDelete}
        />
      )}
    </List>
  );
}
