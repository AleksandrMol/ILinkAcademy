import React, {  } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './font.css'; // Я таким образом подключил шрифты, потому что я не понял, как подключить их через styled components, когда шрифт подключается файлами.
import { LoginPage } from './LoginPage';
import { LoginForm } from './LoginPage/LoginForm';
import { ChangePasswordForm } from './LoginPage/ChangePasswordForm';
import { BrowserRouter, Routes, Route, } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage/>}>
        <Route path="loginForm" element={<LoginForm/>}/>
        <Route path="changeForm" element={<ChangePasswordForm/>}/>
      </Route>
      
      <Route path="mainPage" element={<App />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

