import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import axios from "axios";
import "./CategoryList.scss";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
  Box,
  Container,
  Divider,
  Button,
  Modal,
  Collapse,
  Grid,
  ToggleButton,
} from "@mui/material";
import { Close, DeleteOutlineOutlined } from "@mui/icons-material";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  bgcolor: "#E5E8ED",
  border: "1px solid #9ACCE3",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
  fontFamily: "monospace",
};

export default function CategoryList(props) {
  const [category, setCategory] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [open, setOpen] = useState(false);
  const [toDelete, setToDelete] = useState(0);
  const [error, setError] = useState({ active: false, msg: "" });
  const [showNewCategory, setShowNewCategory] = useState(false);
  const handleOpen = (id) => {
    setToDelete(id);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const getCategories = () => {
    axios
      .get("http://localhost:3002/api/categories/get_categories_by_id", {
        withCredentials: true,
      })
      .then((res) => {
        setCategory(() => res.data);
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newCategory === "") {
      setError({ active: true, msg: "Category cannot be empty" });
    } else {
      axios
        .post(
          "http://localhost:3002/api/categories",
          {
            categoryName: newCategory,
          },
          { withCredentials: true }
        )
        .then(() => {
          getCategories();
        })
        .then(() => setNewCategory(""))
        .catch((err) => console.log(err));
    }
  };

  const handleDelete = () => {
    axios({
      method: "DELETE",
      url: "http://localhost:3002/api/categories/delete",
      data: { catId: toDelete },
      withCredentials: true,
    })
      .then(() => {
        setOpen(false);
        getCategories();
      })
      .catch((err) => console.log(err));
  };

  const showNewCategoryBox = () => {
    setShowNewCategory((prev) => !prev);
  };

  return (
    <>
      <Header viewTitle={props.viewTitle} />
      <Container
        sx={{ fontFamily: "monospace", maxHeight: "600px", overflow: "auto" }}
        component="main"
        maxWidth="xs"
      >
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={modalStyle}>
              <Typography
                sx={{
                  fontFamily: "monospace",
                  display: "flex",
                  justifyContent: "space-between",
                }}
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                Are you sure?
                <IconButton
                  edge="end"
                  aria-label="close"
                  onClick={handleClose}
                  sx={{ fontSize: "1.25rem", color: "#9ACCE3" }}
                >
                  <Close />
                </IconButton>
              </Typography>
              <Typography
                id="modal-modal-description"
                sx={{ fontFamily: "monospace", mt: 2 }}
              >
                This action cannot be reversed.
              </Typography>
              <Button
                onClick={() => handleDelete()}
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 3,
                  mb: 2,
                  bgcolor: "#9ACCE3",
                  "&:hover": { bgcolor: "red" },
                }}
              >
                Confirm
              </Button>
            </Box>
          </Modal>
        </div>
        <Button
          variant="contained"
          selected={showNewCategory}
          onClick={showNewCategoryBox}
          size="small"
          sx={{
            mt: 3,
            mb: 2,
            p: 1,
            fontFamily: "monospace",
            color: "white",
            bgcolor: "#6D89AE",
            "&.MuiButton-contained:hover": { bgcolor: "#6D89AE" },
          }}
        >
          Add New
        </Button>
        {/* 
        {!showNewCategory ? (
          <Typography
            sx={{
              mt: 4,
              fontFamily: "monospace",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            Add New{" "}
            <ArrowDropDown
              fontSize="large"
              sx={{ color: "#9ACCE3", fontSize: "3rem" }}
              onClick={showNewCategoryBox}
            />
          </Typography>
        ) : (
          <Typography
            sx={{
              mt: 4,
              fontFamily: "monospace",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            Add New{" "}
            <ArrowDropUpOutlined
              fontSize="large"
              sx={{
                color: "#9ACCE3",
                fontSize: "3rem",
              }}
              onClick={showNewCategoryBox}
            />
          </Typography>
        )} */}

        <Collapse in={showNewCategory}>
          <Box
            component="form"
            onSubmit={(e) => handleSubmit(e)}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              error={error.active}
              margin="normal"
              fullWidth
              id="category"
              label="Category"
              name="category"
              autoFocus
              value={newCategory}
              onChange={(e) => {
                setNewCategory(e.target.value);
                setError(false);
              }}
            />{" "}
            {error.active && (
              <Grid
                item
                sx={{
                  fontFamily: "monospace",
                  my: 3,
                  color: "red",
                }}
              >
                {error.msg}
              </Grid>
            )}
            <Button
              type="submit"
              variant="contained"
              fullWidth
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
        </Collapse>

        <List sx={{ mt: 4 }}>
          {category.map((cat) => (
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
          ))}
        </List>
      </Container>
    </>
  );
}
