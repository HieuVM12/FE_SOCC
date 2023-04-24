import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import registerServiceWorker from './registerServiceWorker'
import {BrowserRouter, Routes, Route, } from "react-router-dom";
import Login from "./Components/Login"
import Register from "./Components/Register"
import OAuth2RedirectHandler from './OAuth2RedirectHandler';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/home/:idnhac' element={<App/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
        <Route path='/oauth2/redirect' element={<OAuth2RedirectHandler/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
registerServiceWorker();
