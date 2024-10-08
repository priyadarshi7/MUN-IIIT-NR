import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './index.css';
import ScrollToTop from './Utilities/ScrollToTop.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ScrollToTop/>
    <App />
  </BrowserRouter>
);
