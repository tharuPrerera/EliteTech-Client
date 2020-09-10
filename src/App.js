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
import Logout from "./components/Logout";
import Product from "./components/Product";
import ProductAccessories from "./components/ProductAccessories";
import ProductDesktop from "./components/ProductDesktop";
import ProductLaptop from "./components/ProductLaptop";
import Footer from './components/Footer';
import Cart from './components/Cart';
//import samplereg from "./components/samplereg";

// import userProfileUpdate from "./components/userProfileUpdate";


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
          <Route exact path="/productAccesories/:id" component={ProductAccessories} />
          <Route exact path="/productDesktop/:id" component={ProductDesktop} />
          <Route exact path="/productLaptop/:id" component={ProductLaptop} />
          <Route exact path="/user-login" component={Login} />
          <Route exact path="/user-logout" component={Logout} />
          <Route exact path="/Cart" component={Cart}/>
          <Route exact path="/Cart/:id" component={Cart}/>
          {/* <Route exact path="/samplereg" component={samplereg} /> */}
          {/* <Route exact path="/userUpdate/:id" component={userProfileUpdate}/> */}
          
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
