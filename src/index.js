import { BrowserRouter, HashRouter } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/Vmovies">
      <App />
    </BrowserRouter >
  </React.StrictMode>,
  document.getElementById('root')
);

