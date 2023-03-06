import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Router01 from './component/router';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Router01 />
  </BrowserRouter>
);

