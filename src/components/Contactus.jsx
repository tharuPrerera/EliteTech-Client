import React, { Component } from "react";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";

//map imports
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

// //currency exchange
// import {ExchangeRate} from "react-currency-conversion";

//email sender import
import emailjs from "emailjs-com";


const mapStyles = {
  width: "60%",
  height: "90%",
};

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

class Contactus extends Component {

  render() {
    return (
      <> 
      <h5 align="middle"><u>Home/Contactus</u></h5><br/>
        <div class="row">
          
          <div class="col-md-2 col-md-offset-4"></div>
          

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
              <Form.Label>Message Here</Form.Label>
              <Form.Control as="textarea" rows="3" name="message" />
            </Form.Group>
           
            <input type ="submit" value="Send Message" className = "btn btn-primary"/>

          </Form>
    
          <div class="col-md-8 col-sm-15">
            {/* <h4>123</h4> */}
            &nbsp;
            <Map
              google={this.props.google}
              zoom={14}
              style={mapStyles}
              initialCenter={{
                lat: 6.9065,
                lng: 79.8734,
              }}
            >
              <Marker onClick={this.onMarkerClick} name={"Current location"} />

              <InfoWindow onClose={this.onInfoWindowClose}>
                  {/* 
                      <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                      </div>
                  */}
              </InfoWindow>
            </Map>
            &nbsp;
          </div>
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

//export default Contactus;

export default GoogleApiWrapper({
  apiKey: "AIzaSyAEhx7u2AwIWj7sY0YEfnAufjFqmpG0D8Q",
})(Contactus);
