import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Users from "./components/Users";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div><App /><Users /></div>
  </React.StrictMode>
);

