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

const mapStyles = {
  width: "60%",
  height: "90%",
};

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


        <div className="col-md-2 col-sm-15" >
        {/* <div style={{ marginTop: 50 }} align="right">
          <h1>hi</h1>
        </div> */}
        {/* <h5>hi</h5> */}
        </div>
        &nbsp;&nbsp;

       
      </>
    );

    // return (
    //   <>
    //     <div class="row">
    //       <div class="col-md-2 col-md-offset-4"></div>

    //       <Form>
    //         <Form.Group controlId="exampleForm.ControlInput1">
    //           <Form.Label>Email address</Form.Label>
    //           <Form.Control type="email" placeholder="name@example.com" />
    //         </Form.Group>
    //         <Form.Group controlId="exampleForm.ControlTextarea1">
    //           <Form.Label>Your Info</Form.Label>
    //           <Form.Control as="textarea" rows="3" />
    //         </Form.Group>
    //         <Button variant="primary">Send</Button>{" "}
    //       </Form>
    //     </div>

    //     <div class="row">
    //       <div class="col-md-2 col-md-offset-4"></div>
    //       <h4></h4>
    //     </div>
    //   </>
    // );

    
  

  }
}

//export default Contactus;

export default GoogleApiWrapper({
  apiKey: "AIzaSyAEhx7u2AwIWj7sY0YEfnAufjFqmpG0D8Q",
})(Contactus);
