import { useLayoutEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CategoryList } from "./components/CategoryList/CategoryList";
import { Converter } from "./components/Converter/Converter";
import Error from "./components/Error/Error";
import { Expenses } from "./components/Expenses/Expenses";
import { Statistics } from "./components/Statistics/Statistics";
import Welcome from "./components/Welcome/Welcome";



export default function App() {

  //Sets the apps' main background color
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#E5E8ED"
  });
  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Welcome />}></Route>
        <Route path="/stats" element={<Statistics viewTitle={"Statistics"}/>}></Route>
        <Route path="/category" element={<CategoryList viewTitle={"Category"}/>}></Route>
        <Route path="/expenses" element={<Expenses viewTitle={"Expenses"}/>}></Route>
        <Route path="/converter" element={<Converter viewTitle={"Currency Coverter"}/>}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);