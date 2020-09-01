//import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import Navbar from './components/Navbar';
import Footer from './components/Footer';

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
//import Heroes from "./components/Heroes";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Laptop from "./components/Laptop";
import Desktop from "./components/Desktop";
import Accessories from "./components/Accessories";
import Contactus from "./components/Contactus";
import Userreg from "./components/Userreg";
//import HeroDetails from "./components/HeroDetails";

ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <Route exact path="/" component={Home} />
    <Route exact path="/Laptop" component={Laptop} />
    <Route exact path="/Desktop" component={Desktop} />
    <Route exact path="/Accessories" component={Accessories} />
    <Route exact path="/Contactus" component={Contactus} />
    <Route exact path="/Userreg" component={Userreg} />
    
    <Footer/>
    
  </BrowserRouter>,
  document.getElementById("root")
);