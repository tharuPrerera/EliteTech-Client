import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { GoogleLogout  } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
  '170039174173-00hitt2uf6q2rvg424k34p8vkmbp9jlq.apps.googleusercontent.com';

  class Logout extends Component{

    onSuccess = () => {
        console.log('Logout made successfully');
        alert('Logout made successfully');
      };

      render(){
          return(
            <Form>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div>
                    <GoogleLogout
                    clientId={clientId}
                    buttonText="Logout"
                    onLogoutSuccess={this.onSuccess}
                    ></GoogleLogout>
                </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Form>
          );
      }
  }
  export default Logout;