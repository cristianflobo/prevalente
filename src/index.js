import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import  {Navbar}  from './components/navbar/Index';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Navbar/> */}
    <BrowserRouter>
      {/* <Navbar/> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
