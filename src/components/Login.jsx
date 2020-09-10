import React, { Component } from "react";
import { Form } from "react-bootstrap";
import {Link} from 'react-router-dom';


import { GoogleLogin } from 'react-google-login';
import { GoogleLogout  } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
  '170039174173-00hitt2uf6q2rvg424k34p8vkmbp9jlq.apps.googleusercontent.com';

class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        password: "",
      };
      this.logUser = this.logUser.bind(this);
      this.setUsername = this.setUsername.bind(this);
      this.setPassword = this.setPassword.bind(this);
    }
  
    setUsername(username) {
      this.setState({ username: username });
    }
  
    setPassword(password) {
      this.setState({ password: password });
    }
  
    logUser() {
      // put your own code here
      alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    }

    onSuccess = (res) => {
      console.log('Login Success: currentUser:', res.profileObj);
      alert(
        `Logged in successfully welcome ${res.profileObj.name}. \n See console for full profile object.`
      );
      localStorage.setItem('name', res.profileObj.name)
      localStorage.setItem('id', res.profileObj.googleId)
    
      refreshTokenSetup(res);
    };
  
    onFailure = (res) => {
      console.log('Login failed: res:', res);
      alert(
        `Failed to login. Please register or again Login`
      );
    };

    onSuccessLogout = () => {
      console.log('Logout made successfully');
      alert('Logout made successfully');
      localStorage.removeItem("id");
    };

  
    render() {
      return (
          <div className="container">
            <div className="row">
               <div className="col-md-12 col-sm-12"></div>
               <div className="col-md-6 col-sm-12">
                  <div style={{ marginTop: 50 }} align="center">
                     <Form style={{ marginTop: 50 }} onSubmit={this.logUser}>
                       <h3>User Login</h3>&nbsp;
                       <h5>Please login to manage your orders</h5>&nbsp;
                          <div className="form-group">
                              <label>Username: </label>&nbsp;&nbsp;
                              <input
                              type="text"
                              className="from-control"
                              placeholder="Enter username"
                              onChange={this.setUsername}
                              required
                              />
                          </div>
                          <div className="form-group">
                              <label>Password: </label>&nbsp;&nbsp;
                              <input
                              type="password"
                              className="from-control"
                              placeholder="Enter password"
                              onChange={this.setPassword}
                              required
                              />
                          </div>
                          <div className="form-group">
                              <div className="custom-control custom-checkbox">
                              <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="customCheck1"
                              />
                              <label
                                  className="custom-control-label"
                                  htmlFor="customCheck1"
                              >
                                  Remember me
                              </label>
                              </div>
                          </div>
                          <div className="form-group">
                              <input
                              type="submit"
                              value="Login"
                              className="btn btn-primary"
                              />
                          </div>
                         
                          <p className="forgot-password text-center">
                              Forgot <a href="#">password?</a>
                          </p>
                          <div>
                            <GoogleLogin 
                              clientId={clientId}
                              buttonText="Login with Google"
                              onSuccess={this.onSuccess}
                              onFailure={this.onFailure}
                              cookiePolicy={'single_host_origin'}
                              style={{ marginTop: '100px' }}
                              isSignedIn={true}
                            />
                          </div>&nbsp;&nbsp;

                          <div>
                            <GoogleLogout
                              clientId={clientId}
                              buttonText="Logout"
                              onLogoutSuccess={this.onSuccessLogout}
                            ></GoogleLogout>
                          </div>&nbsp;&nbsp;

                     </Form>
                  </div>
               </div>
               <div className="col-md-6 col-sm-12">
                  <div style={{ marginTop: 50 }} align="left">
                      <h2>Create an account</h2>&nbsp;
                      <h5>Create an account to buy products.</h5>&nbsp;&nbsp;
                      <div className="form-group">
                        <Link to={"/Userreg"} className="btn btn-danger">Create an account</Link> &nbsp;&nbsp;
                      </div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;
                        <h2>Update your Profile.</h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to={"/userUpdate/"+this.props.match.params.id} className="btn btn-info">Update Your Profile</Link>
                      </div>
                  </div>
               </div>
            </div>
          </div>
      );
    }
  }
  
  export default Login;
