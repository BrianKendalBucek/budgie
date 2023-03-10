import React, { useEffect, useLayoutEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Converter } from "./components/Converter/Converter";
import Error from "./components/Error/Error";
import Expenses from "./components/Expenses/Expenses";
import { Statistics } from "./components/Statistics/Statistics";
import { Login } from "./components/Login/Login";
import Welcome from "./components/Welcome/Welcome";
import RequireAuth from "./userAuth/RequireAuth";
import { useAuth } from "./hooks/useAuth";
import CategoryList from "./components/CategoryList/CategoryList";

export default function App() {
  const auth = useAuth();
  const location = useLocation();

  //Sets the apps' main background color
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#E5E8ED";
  });

  useEffect(() => {
    // check for cookies on all page refresh and set user context to name
    auth.auth();
  }, [auth]);

  return (
    <Routes>
      <Route exact path="/" element={<Welcome />}></Route>
      <Route
        path="/login"
        element={
          auth.user ? (
            <Navigate to="/stats" state={{ from: location }} replace></Navigate>
          ) : (
            <Login viewTitle={"Login"} />
          )
        }
      ></Route>
      <Route
        path="/stats"
        element={
          <RequireAuth>
            <Statistics viewTitle={"Statistics"} />
          </RequireAuth>
        }
      ></Route>
      <Route
        path="/category"
        element={
          <RequireAuth>
            <CategoryList viewTitle={"Category"} />
          </RequireAuth>
        }
      ></Route>
      <Route
        path="/expenses"
        element={
          <RequireAuth>
            <Expenses viewTitle={"Expenses"} />
          </RequireAuth>
        }
      ></Route>
      <Route
        path="/converter"
        element={
          <RequireAuth>
            <Converter viewTitle={"Currency Converter"} />
          </RequireAuth>
        }
      ></Route>
      <Route path="*" element={<Error />}></Route>{" "}
    </Routes>
  );
}
