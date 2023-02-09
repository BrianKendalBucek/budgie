import { DeleteOutlineOutlined } from "@mui/icons-material";
import { Divider, IconButton, ListItem, ListItemText } from "@mui/material";
import React from "react";

export default function CatListItem({ category, handleOpen }) {
  return category.map((cat) => {
    return (
      <React.Fragment key={cat.id}>
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => handleOpen(cat.id)}
            >
              <DeleteOutlineOutlined
                sx={{ color: "#9ACCE3", fontSize: "1.75rem" }}
              />
            </IconButton>
          }
        >
          <ListItemText primary={cat.name}></ListItemText>
        </ListItem>
        <Divider />
      </React.Fragment>
    );
  });
}
