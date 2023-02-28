import React from 'react';
import './index.css';
import App from './App';
// import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
// import * as ReactDOM from "react-dom";


const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



