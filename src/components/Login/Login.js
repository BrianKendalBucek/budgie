import React, { useState } from "react";
import "./Login.scss";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";

export function Login() {
  const [error, setError] = useState({ active: false, msg: "" });
  const navigate = useNavigate();
  const auth = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const email = data.get("email");
    const password = data.get("password");
    auth.signIn(email, password, () => {
      console.log("hello from callback before navigate");
      // navigate(from, { replace: true });
    });
    /*     try {
      const isAuth = await axios.post(
        "http://localhost:3002/login",
        { email, password },
        {
          withCredentials: true,
          // headers: { "Content-Type": "multipart/form-data" },
        }
      );
      if (isAuth.data.validated) {
        navigate("/stats");
      } else {
        setError({ active: true, msg: isAuth.data.msg });
      }
    } catch (error) {
      console.log(error);
      setError({
        active: true,
        msg: error.response.data.msg,
      });
    } */
  };

  return (
    <>
      <Header viewTitle={"Login"}></Header>
      <Container
        sx={{ fontFamily: "monospace" }}
        component="main"
        maxWidth="xs"
      >
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontFamily: "monospace" }}
            component="h1"
            variant="h5"
          >
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                fontFamily: "monospace",
                bgcolor: "#6D89AE",
                "&:hover": { bgcolor: "#9ACCE3" },
              }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link sx={{ fontFamily: "monospace" }} href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
              {error.active && (
                <Grid
                  item
                  sx={{
                    fontFamily: "monospace",
                    my: 3,
                    color: "red",
                    fontSize: "1.2rem",
                  }}
                >
                  {error.msg}
                </Grid>
              )}
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}

// reference site
// https://contactmentor.com/login-form-react-js-code/
