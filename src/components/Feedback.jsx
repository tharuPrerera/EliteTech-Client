import React, { Component } from "react";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";

//email sender import
import emailjs from "emailjs-com";

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('gmail', 'template_kb8gj4e', e.target, 'user_7EutIespHBk5qq0zVokN0')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
}

class Feedback extends Component {

  render() {
    return (
      <> 
      <h5 align="middle"><u>Home/Feedback</u></h5><br/>

      <h7 align="middle"><b>Got a Question ?</b></h7><br/>

      <h8 align="middle"><u>EliteTech Team here to help you</u></h8><br/>
      
      <h8 align="middle"></h8><br/>
        <div class="row">
          
          <div class="col-md-5 col-md-offset-4"></div>
          

          <Form onSubmit={sendEmail}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name" name="name" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Email Address" name="email" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Subject" name="subject" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Describe Feedback</Form.Label>
              <Form.Control as="textarea" rows="3" name="message" />
            </Form.Group>
           
            <input type ="submit" value="Send Your Feedback" className = "btn btn-primary"/>

          </Form>
    
          
        </div>
        <div className="col-md-2 col-sm-15">
          {/* <div style={{ marginTop: 50 }} align="right">
          <h1>hi</h1>
        </div> */}
          {/* <h5>hi</h5> */}
        </div>
        &nbsp;&nbsp;
      </>
    );

    
  }
}

export default Feedback;

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyAEhx7u2AwIWj7sY0YEfnAufjFqmpG0D8Q",
// })(Feedback);
