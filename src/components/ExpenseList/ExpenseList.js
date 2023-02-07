import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Edit, ExpandMore } from "@mui/icons-material";

export default function ExpenseList({ expenseList }) {
  return (
    <Container
      item
      xs={12}
      md={6}
      sx={{ maxHeight: "500px", overflow: "auto" }}
    >
      <Typography
        sx={{ mt: 4, mb: 2, fontFamily: "Orbitron" }}
        variant="h5"
        component="div"
      ></Typography>
      {expenseList.map((e, i) => (
        <Accordion key={e.ex_id} sx={{ bgcolor: "#E5E8ED", py: 1, my: 1 }}>
          <AccordionSummary
            sx={{ mb: 0 }}
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontFamily: "monospace", fontSize: ".8rem" }}>
              {e.notes}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ mt: 0 }}>
            <List>
              <ListItem
                key={e.id + 0.1}
                secondaryAction={
                  <IconButton edge="end" aria-label="show">
                    <Edit sx={{ color: "#9ACCE3", fontSize: "1.75rem" }} />
                  </IconButton>
                }
              >
                <ListItemText
                  sx={{ fontFamily: "monospace", fontSize: "2rem" }}
                  key={i}
                  secondary={`Paid in ${e.curr_name}--${e.code.toUpperCase()}`}
                >
                  {e.cost}
                </ListItemText>
              </ListItem>
              <Divider />
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
}
