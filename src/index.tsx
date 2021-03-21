import React from 'react';
import ReactDOM from 'react-dom';
import { mount, route } from 'navi';
import { Router } from 'react-navi';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginPage from './Auth/LoginPage';
import RegisterPage from './Auth/RegisterPage';


const routes = mount({
  "/": route({
   title: 'Login',
   view: <LoginPage />
  }),
  "/register": route({
    title: 'Register',
    view: <RegisterPage />
  })
  
})


ReactDOM.render(

  <Router routes={routes} />,
  document.getElementById('root')
);


reportWebVitals();
