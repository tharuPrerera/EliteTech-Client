import React from "react";
//import './App.scss';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Table,
} from "react-bootstrap";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar expand="lg" variant="dark" bg="dark">
          <Navbar.Brand href="#home">
            <Link class="text-light bg-dark" to="/"> <h1>EliteTech</h1>   </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {/*<Nav className="nav-link text-white text-uppercase ml-1">*/}
              <ul className="navbar-nav m-auto">
                {/*
                <Nav.Link href="#home">
                  <h6>
                    Home&nbsp;
                    <FontAwesomeIcon icon={faHome} />
                  </h6>
                </Nav.Link>
                <Nav.Link href="#link">
                  <h6>Laptop</h6>
                </Nav.Link>
                <Nav.Link href="#link">
                  <h6>Desktop</h6>
                </Nav.Link>
                <Nav.Link href="#link">
                  <h6>Accessories</h6>
                </Nav.Link>
                <Nav.Link href="#link">
                  <h6>Contact Us</h6>
                </Nav.Link>

                */}

                <li className="nav-item active">
                  <a className="nav-link text-white text-uppercase" >
                    <Link class="text-light bg-dark" to="/">
                      Home&nbsp;
                    </Link>
                    <FontAwesomeIcon icon={faHome} />
                    <span class="sr-only">(current)</span>
                  </a>
                </li>

                <li className="nav-item active">
                  <a className="nav-link text-white text-uppercase ml-4">
                    <Link class="text-light bg-dark" to="/Laptop">
                      Laptop
                    </Link>
                    <span class="sr-only">(current)</span>
                  </a>
                </li>

                <li className="nav-item active">
                  <a className="nav-link text-white text-uppercase ml-4">
                    <Link class="text-light bg-dark" to="/Desktop">
                    Desktop 
                    </Link>
                    <span class="sr-only">(current)</span>
                  </a>
                </li>

                <li className="nav-item active">
                  <a className="nav-link text-white text-uppercase ml-4">
                    <Link class="text-light bg-dark" to="/Accessories">
                    Accessories 
                    </Link>
                    <span class="sr-only">(current)</span>
                  </a>
                </li>

                <li className="nav-item active">
                  <a className="nav-link text-white text-uppercase ml-4">
                    <Link class="text-light bg-dark" to="/Contactus">
                    Contact Us  
                    </Link>
                    <span class="sr-only">(current)</span>
                  </a>
                </li>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li class="nav-item active">
                  <a a className="nav-link text-white text-uppercase ml-4">
                    <Link class="text-light bg-dark" to="/Cart">Cart</Link>
                    <span class="badge badge-pill red">1</span>
                    <i class="fas fa-shopping-cart pl-0" ></i>
                  </a>
                </li>

                <li class="nav-item active">
                  <a className="nav-link text-white text-uppercase ml-4">
                    <Link class="text-light bg-dark" to="/user-login">
                    Login
                    </Link>
                    <span class="sr-only">(current)</span>
                  </a>
                </li>   
              </ul>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="primary" >Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </header>

      {/*
      <div className="container">
        <div className="row mt-5">
            <div className="col-lg-4 mb-4 grid-margin">
              <div className="card h-100">
                  <h4 className="card-header">Card Title</h4>
                  <div className="card-body">
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                  </div>
                  <div className="card-footer">
                    <Button variant="btn btn-primary">Learn More</Button>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 grid-margin">
              <div className="card h-100">
                  <h4 className="card-header">Card Title</h4>
                  <div className="card-body">
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ipsam eos, nam perspiciatis natus commodi similique totam consectetur praesentium molestiae atque exercitationem ut consequuntur, sed eveniet, magni nostrum sint fuga.</p>
                  </div>
                  <div className="card-footer">
                    <Button variant="btn btn-primary">Learn More</Button>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 grid-margin">
              <div className="card h-100">
                  <h4 className="card-header">Card Title</h4>
                  <div className="card-body">
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                  </div>
                  <div className="card-footer">
                    <Button variant="btn btn-primary">Learn More</Button>
                  </div>
              </div>
            </div>
        </div>


        <div className="row mb-4">
          <div className="col-sm-12 grid-margin">
            <div className="card h-100">
              <h4 className="card-header">Table</h4>
              <div className="card-body">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td colSpan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
      */}
    </div>
  );
}
export default App;
