import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  IconButton,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Edit, ExpandMore } from "@mui/icons-material";

export default function ExpenseList({ expenseList }) {
  return (
    <>
      {expenseList.map((e, i) => (
        <Accordion
          key={e.ex_id}
          sx={{
            fontFamily: "monospace",
            bgcolor: "#E5E8ED",
            py: 1,
            mt: 4,
            my: 2,
          }}
        >
          <AccordionSummary
            sx={{ mb: 0 }}
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            {e.notes}
          </AccordionSummary>
          <AccordionDetails sx={{ mt: 0, pt: 0 }}>
            <ListItem
              key={e.id + 0.1}
              secondaryAction={
                <IconButton edge="end" aria-label="edit">
                  <Edit sx={{ color: "#9ACCE3", fontSize: "1.75rem" }} />
                </IconButton>
              }
            >
              <ListItemText
                sx={{ fontFamily: "monospace", fontSize: "2rem" }}
                key={i}
                secondary={`${e.curr_name}`}
              >
                {e.cost} {e.code.toUpperCase()}
              </ListItemText>
            </ListItem>
            <Divider />
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
