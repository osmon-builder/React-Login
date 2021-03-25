import React from 'react';
import ReactDOM from 'react-dom';
import { mount, route } from 'navi';
import { Router, View } from 'react-navi';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginPage from './Auth/LoginPage';
import RegisterPage from './Auth/RegisterPage';
import ListPage from './Auth/initPAge/page.list';
import { withAuthentication } from './Auth/authenticated.router';
import { BOUNCE_IT_TOKEN_KEY } from './Auth/auth.api';



const routes = mount({
  "/": withAuthentication(route({
   title: 'login',
   view: <ListPage/>
  })),
  "/login": route({
    title: "Login",
    view: <LoginPage />
  }),
  "/register": route({
    title: 'register',
    view: <RegisterPage />
  })
  
})


ReactDOM.render(


  <Router routes= { routes }  context = {{token: localStorage.getItem(BOUNCE_IT_TOKEN_KEY)}}/>,
  document.getElementById('root')
);


reportWebVitals();
