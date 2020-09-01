import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";

class Contactus extends Component {
  render() {
    return (
      <>
        <div class="row">
          <div class="col-md-2 col-md-offset-4"></div>
          <h4>User Register</h4>
        </div>

        <div class="row">
          <div class="col-md-2 col-md-offset-4"></div>

          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="User Name" placeholder="User Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="First Name" placeholder="First Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="Last Name" placeholder="Last Name" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="Address" />
            </Form.Group>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>District</Form.Label>
              <Form.Control placeholder="District" />
            </Form.Group>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>City</Form.Label>
              <Form.Control placeholder="City" />
            </Form.Group>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Postal Code</Form.Label>
              <Form.Control placeholder="Postal Code" />
            </Form.Group>

            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Agree Terms & Condition" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Create Account
            </Button>
          </Form>
        </div>
        
        <div class="row">
          <div class="col-md-2 col-md-offset-4"></div>
          <h4></h4>
        </div>
      </>
    );
  }
}

export default Contactus;
