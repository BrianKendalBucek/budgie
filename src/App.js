import "./App.scss";
import React, { useLayoutEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { CategGraph } from "./components/CategGraph/CategGraph";
import { Converter } from "./components/Converter/Converter";
import Error from "./components/Error/Error";
import { Expenses } from "./components/Expenses/Expenses";
import { Statistics } from "./components/Statistics/Statistics";
import { Login } from "./components/Login/Login";
import Welcome from "./components/Welcome/Welcome";
import { AuthProvider } from "./context/AuthContext";
import RequireAuth from "./userAuth/RequireAuth";

export default function App() {
  //Sets the apps' main background color
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#E5E8ED";
  });

  return (
    <AuthProvider>
      <Routes>
        <Route exact path="/" element={<Welcome />}></Route>
        <Route path="/login" element={<Login />}></Route>
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
              <CategGraph viewTitle={"Category"} />
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

        <Route path="*" element={<Error />}></Route>
      </Routes>
    </AuthProvider>
  );
}
{
  /* // <Route
          //   path="/stats"
          //   element={<Statistics viewTitle={"Statistics"} />}
          // ></Route>
          // <Route
          //   path="/category"
          //   element={<CategGraph viewTitle={"Category"} />}
          // ></Route>
          // <Route
          //   path="/expenses"
          //   element={<Expenses viewTitle={"Expenses"} />}
          // ></Route>
          // <Route
          //   path="/converter"
          //   element={<Converter viewTitle={"Currency Converter"} />}
          // ></Route> */
}
