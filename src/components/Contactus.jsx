import React, { Component } from "react";
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

          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Your Info</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Button variant="primary">Send</Button>{" "}
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
