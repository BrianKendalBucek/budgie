import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { DeleteOutlineOutlined } from "@mui/icons-material";

export default function ExpenseList({ expenseList }) {
  return (
    <Grid item xs={12} md={6}>
      <Typography
        sx={{ mt: 4, mb: 2, fontFamily: "Orbitron" }}
        variant="h5"
        component="div"
      ></Typography>
      <List>
        {expenseList.map((e, i) => (
          <>
            <ListItem
              key={e.id}
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteOutlineOutlined
                    sx={{ color: "#9ACCE3", fontSize: "1.75rem" }}
                  />
                </IconButton>
              }
            >
              <ListItemText
                sx={{ fontFamily: "monospace" }}
                key={i}
                primary={e.notes}
                secondary={`${e.cost} in ${e.currency_id}`}
              ></ListItemText>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Grid>
  );
}
