import { CheckOutlined } from "@mui/icons-material";
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

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
        {/* <ListItemAvatar>
          <Avatar>
            <CheckOutlined />
          </Avatar>
        </ListItemAvatar> */}

        <ListItemText
          primaryTypographyProps={{ fontFamily: "monospace" }}
          // primary="Price"
          primary={`${singleExpense.cost} ${singleExpense.code.toUpperCase()}`}
        ></ListItemText>
      </ListItem>
      {/* <Divider component="li" textAlign="left">
        FX RATE
      </Divider> */}
      <ListItem>
        <ListItemText
          primaryTypographyProps={{ fontFamily: "monospace" }}
          primary="FX Rate:"
          secondary={`${
            Math.round(+singleExpense.exchange_rate_base * 1e3) / 1e3
          } ${singleExpense.code.toUpperCase()}`}
        ></ListItemText>
      </ListItem>
      {/* <Divider component="li" /> */}
      {/* <Divider component="li" textAlign="left">
        DATE OF PURCHASE
      </Divider> */}

      <ListItem>
        <ListItemText
          primaryTypographyProps={{ fontFamily: "monospace" }}
          primary="Date:"
          secondary={`${singleExpense.date_paid}`}
        ></ListItemText>
      </ListItem>

      {/* <Divider variant="inset" component="li" /> */}
    </List>
  );
}
