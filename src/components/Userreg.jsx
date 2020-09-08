import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";

import axios from "axios";

class Userreg extends Component {
  constructor(props) {
    super(props);

    this.onchangeUsername = this.onchangeUsername.bind(this);
    this.onchangePassword = this.onchangePassword.bind(this);
    this.onchangeFname = this.onchangeFname.bind(this);
    this.onchangeLname = this.onchangeLname.bind(this);
    this.onchangeAddress = this.onchangeAddress.bind(this);
    this.onchangeDistrict = this.onchangeDistrict.bind(this);
    this.onchangeCity = this.onchangeCity.bind(this);
    this.onchangePostalcode = this.onchangePostalcode.bind(this);
    this.onchangeEmail = this.onchangeEmail.bind(this);
    this.onchangeCpassword = this.onchangeCpassword.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    console.log("message");

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      address: "",
      district: "",
      city: "",
      postalcode: "",
      username: "",
      password: "",
      confirm_password: "",
    };
  }

  onchangeUsername(e) {
    this.setState({ username: e.target.value });
    //console.log(this.state)
  }

  onchangePassword(e) {
    this.setState({ password: e.target.value });
  }

  onchangeFname(e) {
    this.setState({ first_name: e.target.value });
  }

  onchangeLname(e) {
    this.setState({ last_name: e.target.value });
  }

  onchangeAddress(e) {
    this.setState({ address: e.target.value });
  }

  onchangeDistrict(e) {
    this.setState({ district: e.target.value });
  }

  onchangeCity(e) {
    this.setState({ city: e.target.value });
  }

  onchangePostalcode(e) {
    this.setState({ postalcode: e.target.value });
  }

  onchangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  onchangeCpassword(e) {
    this.setState({ confirm_password: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      address: this.state.address,
      district: this.state.district,
      city: this.state.city,
      postalcode: this.state.postalcode,
      username: this.state.username,
      password: this.state.password,
      confirm_password: this.state.confirm_password,
    };

    axios
      .post("http://localhost:5000/api/users", obj)
      .then((res) => console.log(res.data));

    this.setState({
      first_name: "",
      last_name: "",
      email: "",
      address: "",
      district: "",
      city: "",
      postalcode: "",
      username: "",
      password: "",
      confirm_password: "",
    });
  }

  render() {
    return (
      <div className="container">
      
      <div style={{ marginTop: 25 }} align="left">

        <h3 align="center"><u>User Registration</u></h3>

        <div class="row">
          <div class="col-md-4 col-md-offset-4"></div>

          <Form style={{ marginTop:50}} onSubmit={this.onSubmit}>

            <Form.Row >


              <Form.Group  controlId="formGridEmail">

                <Form.Label >User Name</Form.Label>
                <Form.Control
                  type="text"
                  className="from-control"
                  id="username"
                  placeholder="Enter username"
                  value={this.state.username}
                 onChange={this.onchangeUsername}
                />
              </Form.Group>
              &nbsp;&nbsp;
              <Form.Group controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                 type="password"
                 className="from-control"
                 id="password"
                 placeholder="Enter password"
                 value={this.state.password}
                 onChange={this.onchangePassword}
                />
              </Form.Group>

            </Form.Row>

            <Form.Row>

              <Form.Group controlId="formGridEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  className="from-control"
                  id="first_name"
                  placeholder="First Name"
                  value={this.state.first_name}
                  onChange={this.onchangeFname}
                />
              </Form.Group>
              &nbsp;&nbsp;
              <Form.Group controlId="formGridPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  className="from-control"
                  id="last_name"
                  placeholder="Enter Last Name"
                  value={this.state.last_name}
                  onChange={this.onchangeLname}
                />
              </Form.Group>

            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control 
               type="text"
               className="from-control"
               id="address"
               placeholder="Enter Address"
               value={this.state.address}
               onChange={this.onchangeAddress}
              />
            </Form.Group>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>District</Form.Label>
              <Form.Control
                 type="text"
                 className="from-control"
                 id="district"
                 placeholder="Enter District"
                 value={this.state.district}
                 onChange={this.onchangeDistrict}
              />
            </Form.Group>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>City</Form.Label>
              <Form.Control 
               type="text"
               className="from-control"
               id="city"
               placeholder="Enter City"
               value={this.state.city}
               onChange={this.onchangeCity} 
              />
            </Form.Group>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Postal Code</Form.Label>
              <Form.Control
               type="text"
               className="from-control"
               id="postalcode"
               placeholder="Enter Postal Code"
               value={this.state.postalcode}
               onChange={this.onchangePostalcode}
              />
            </Form.Group>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Email</Form.Label>
              <Form.Control
               type="text"
               className="from-control"
               id="email"
               placeholder="Enter email"
               value={this.state.email}
               onChange={this.onchangeEmail}
              />
            </Form.Group>
            
            {/* <Form.Group controlId="formGridAddress1">
              <Form.Label>Confirm PW</Form.Label>
              <Form.Control
                type="text"
                className="from-control"
                id="confirm_password"
                placeholder="Enter confirm pw"
                value={this.state.confirm_password}
                onChange={this.onchangeCpassword}
              />
            </Form.Group> */}

            <Form.Group id="formGridCheckbox">
              <Form.Check 
              type="checkbox" 
              label="Agree Terms & Condition" />
            </Form.Group>
          
            <input type ="submit" value="Create Account" className = "btn btn-primary"/>

          </Form>
          
        </div>

        <div class="row">
          <div class="col-md-2 col-md-offset-4"></div>
          <h4></h4>
        </div>
        <h1></h1>
        </div>
      </div>
    );
  }
}

export default Userreg;
