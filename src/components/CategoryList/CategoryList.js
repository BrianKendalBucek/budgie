import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import axios from "axios";
import "./CategoryList.scss";
import {
  Avatar,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
  Box,
  Container,
  Divider,
  Button,
} from "@mui/material";

export function CategoryList(props) {
  const [category, setCategory] = useState([]);
  const [newCategory, setNewCategory] = useState("");

  const getCategories = () => {
    return axios
      .get("http://localhost:3002/api/categories/get_categories_by_id", {
        withCredentials: true,
      })
      .then((res) => {
        setCategory(res.data);
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

  const categories = category.map((category) => {
    return (
      <li className="category-name" key={category.id}>
        {category.name}
      </li>
    );
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    return axios
      .post(
        "http://localhost:3002/api/categories",
        {
          categoryName: newCategory,
        },
        { withCredentials: true }
      )
      .then(() => {
        getCategories();
      });
  };

  return (
    <>
      <Header viewTitle={props.viewTitle} />
      <Container
        sx={{ fontFamily: "monospace" }}
        component="main"
        maxWidth="xs"
      >
        <Grid item xs={12} md={6}>
          <Typography
            sx={{ mt: 4, mb: 2, fontFamily: "Orbitron" }}
            variant="h5"
            component="div"
          ></Typography>
          <List>
            {category.map((cat) => (
              <ListItem
                key={cat.id}
                secondaryAction={
                  <IconButton edge="end" aria-label="delete"></IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar></Avatar>
                </ListItemAvatar>
                <ListItemText primary={cat.name}></ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>

        <Typography sx={{ fontFamily: "monospace" }}>Add New</Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Category"
            name="category"
            autoFocus
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              fontFamily: "monospace",
              bgcolor: "#6D89AE",
              "&:hover": { bgcolor: "#9ACCE3" },
            }}
          >
            +
          </Button>
        </Box>
      </Container>
    </>
  );
}
