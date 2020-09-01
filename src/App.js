import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";


import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from "./components/Login";
import Product from "./components/Product";


class App extends Component {
  render(){

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
      
          <Route exact path="/product/:id" component={Product}/>
          <Route exact path="/user-login" component={Login}/>
        
        <Footer/>
      </BrowserRouter>
    </div>
  );
  }
}
export default App;
