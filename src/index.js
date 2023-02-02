import { useLayoutEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CategGraph } from "./components/CategGraph/CategGraph";
import { Converter } from "./components/Converter/Converter";
import Error from "./components/Error/Error";
import { Expenses } from "./components/Expenses/Expenses";
import { Statistics } from "./components/Statistics/Statistics";
import { Login } from "./components/Login/Login";
import Welcome from "./components/Welcome/Welcome";

export default function App() {
  //Sets the apps' main background color
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#E5E8ED";
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Welcome />}></Route>
        <Route
          path="/stats"
          element={<Statistics viewTitle={"Statistics"} />}
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/category"
          element={<CategGraph viewTitle={"Category"} />}
        ></Route>
        <Route
          path="/expenses"
          element={<Expenses viewTitle={"Expenses"} />}
        ></Route>
        <Route
          path="/converter"
          element={<Converter viewTitle={"Currency Converter"} />}
        ></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
