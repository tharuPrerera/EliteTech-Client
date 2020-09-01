import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';


class App extends Component {
  render(){

  return (
    <div className="App">
     
      <BrowserRouter>
        <Navbar/>
        <br/>
    
          <Route exact path="/cart" component={Cart}/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

        
        <Footer/>
      </BrowserRouter>

    
    </div>
  );
  }
}

export default App;
