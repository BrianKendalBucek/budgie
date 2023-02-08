import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Edit, ExpandMore } from "@mui/icons-material";
import { Box } from "@mui/system";

export default function ExpenseList({ expenseList }) {
  const accordians = expenseList.map((e, i) => (
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
      >
        {e.notes}
      </AccordionSummary>
      <AccordionDetails sx={{ mt: 0, pt: 0 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {e.curr_name}
          {e.cost} {e.code.toUpperCase()}
          <IconButton edge="end" aria-label="edit">
            <Edit sx={{ color: "#9ACCE3", fontSize: "1.75rem" }} />
          </IconButton>
        </Box>
      </AccordionDetails>
    </Accordion>
  ));

  return <div>{accordians}</div>;
}
