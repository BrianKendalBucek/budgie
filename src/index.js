// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <div><App /></div>
//   </React.StrictMode>

// );

import { useLayoutEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CategGraph } from "./components/CategGraph/CategGraph";
import Error from "./components/Error/Error";
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
        <Route path="/stats" element={<Statistics />}></Route>
        <Route path="/category" element={<CategGraph />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);