import { List, ListItem, ListItemText } from "@mui/material";

export default function ExpenseModalList({ singleExpense }) {
  return (
    <List
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <ListItem>
        <ListItemText
          primaryTypographyProps={{ fontFamily: "monospace" }}
          // primary="Price"
          primary={`${singleExpense.cost} ${singleExpense.code.toUpperCase()}`}
        ></ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText
          primaryTypographyProps={{ fontFamily: "monospace" }}
          primary="FX Rate:"
          secondary={`${
            Math.round(+singleExpense.exchange_rate_base * 1e3) / 1e3
          } ${singleExpense.code.toUpperCase()}`}
        ></ListItemText>
      </ListItem>

      <ListItem>
        <ListItemText
          primaryTypographyProps={{ fontFamily: "monospace" }}
          primary="Date:"
          secondary={`${singleExpense.date_paid}`}
        ></ListItemText>
      </ListItem>
    </List>
  );
}
