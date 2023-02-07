import React, { useEffect, useRef, useState } from "react";
import Header from "../Header/Header";
import axios from "axios";
import "./CategoryList.scss";
import {
  Grid,
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
} from "@mui/material";
import {
  Animation,
  ArrowDropDownCircleOutlined,
  ArrowDropUpOutlined,
  DeleteOutlineOutlined,
} from "@mui/icons-material";

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
  const [error, setError] = useState(false);
  const [showNewCategory, setShowNewCategory] = useState(false);
  const handleOpen = (id) => {
    setToDelete(id);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newCategory === "") {
      setError(true);
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
        .then(() => setError(false), setNewCategory(""))
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
    setShowNewCategory((prev) => !showNewCategory);
  };

  return (
    <>
      <Header viewTitle={props.viewTitle} />
      <Container
        sx={{ fontFamily: "monospace" }}
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
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Are you sure?
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
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
                  fontFamily: "monospace",
                  bgcolor: "#9ACCE3",
                  "&:hover": { bgcolor: "red" },
                }}
              >
                Confirm
              </Button>
            </Box>
          </Modal>
        </div>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{ mt: 4, mb: 2, fontFamily: "Orbitron" }}
            variant="h5"
            component="div"
          ></Typography>
          <List>
            {category.map((cat, i) => (
              <>
                <ListItem
                  key={cat.id}
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
                  <ListItemText key={i} primary={cat.name}></ListItemText>
                </ListItem>
                <Divider />
              </>
            ))}
          </List>
        </Grid>

        {!showNewCategory ? (
          <Typography
            sx={{
              mt: 4,
              fontFamily: "monospace",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Add New{" "}
            <ArrowDropDownCircleOutlined
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
              justifyContent: "space-between",
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
        )}

        <Collapse in={showNewCategory} easing>
          <Box
            component="form"
            onSubmit={(e) => handleSubmit(e)}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              error={error}
              margin="normal"
              required
              fullWidth
              id="category"
              label="Category"
              name="category"
              autoFocus
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
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
              Add
            </Button>
          </Box>
        </Collapse>
      </Container>
    </>
  );
}
