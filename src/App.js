import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Laptop from "./components/Laptop";
import Desktop from "./components/Desktop";
import Accessories from "./components/Accessories";
import Contactus from "./components/Contactus";
import Userreg from "./components/Userreg";
import Login from "./components/Login";
import Product from "./components/Product";
import Footer from './components/Footer';



class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/Laptop" component={Laptop} />
          <Route exact path="/Desktop" component={Desktop} />
          <Route exact path="/Accessories" component={Accessories} />
          <Route exact path="/Contactus" component={Contactus} />
          <Route exact path="/Userreg" component={Userreg} />
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/user-login" component={Login} />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
