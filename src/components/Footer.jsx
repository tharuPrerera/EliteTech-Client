import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">

                {/*Column 1*/}
                <div className="col-md-3 col-sm-6">
                <ul className="list-unstyled">
                    <h4>Explore</h4>
                    <li className="nav-item active">
                        <a className="nav-link text-white text-uppercase ml-4">
                    <Link className="text-light bg-dark" to="/Laptop">
                         Laptop 
                    </Link>
                        </a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link text-white text-uppercase ml-4">
                    <Link className="text-light bg-dark" to="/Desktop">
                         Desktop 
                    </Link>
                        </a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link text-white text-uppercase ml-4">
                    <Link className="text-light bg-dark" to="/Accessories">
                         Accessories 
                    </Link>
                        </a>
                    </li>
                </ul>
                </div>

                {/*Column 2*/}
                <div className="col-md-3 col-sm-6">
                <ul className="list-unstyled">
                    <h4>Services & Support</h4>
                    <li>News Feeds</li>
                    <li>Currency Convert</li>
                    <li>feedbacks</li>
                    <li>Contact us</li>
                    
                </ul>
                </div>

                {/*Column 3*/}
                {/*<div className="col-md-3 col-sm-6">
                <ul className="list-unstyled">
                    <h4>Useful Info</h4>
                    <li>Payments</li>
                    <li>Shipping</li>
                    
                </ul>
  </div>*/}

                {/*Column 4*/}
                <div className="col-md-3 col-sm-6">
                <ul className="list-unstyled">
                    <h4>Contact Us</h4>
                    <li>EliteTech</li>
                    <li>120/5 Vidya Mawatha,<br/>Colombo 00700</li>
                    <li> 011-1234567 </li>
                    <li> 071-1234567</li>
                   
                </ul>
                </div>


            </div>
            {/*Footer Bottom*/}
            <div className="footer-bottom">
              <p className="text-xs-center">
                &copy;{new Date().getFullYear()}EliteTech -All Rights Reserved
              </p>
            </div>



          </div>
        </div>
    </FooterContainer>
  );
}
export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background-color:#3a4040;
    padding-top: 3rem;
    color:#fff;
  }

  .footer-bottom{
    padding-top: 3rem;
    padding-bottom: 2rem;
  }
`;
