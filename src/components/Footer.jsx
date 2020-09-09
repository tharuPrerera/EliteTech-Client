import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">

                {/*Column 1*/}
                <div className="col-md-3 col-sm-6">
                <ul className="list-unstyled">
                    <h4>Laptop</h4>
                    <li>EliteTech Loptop</li>
                    <li>EliteTech Loptop</li>
                    
                </ul>
                </div>

                {/*Column 2*/}
                <div className="col-md-3 col-sm-6">
                <ul className="list-unstyled">
                    <h4>Desktop</h4>
                    <li>EliteTech Desktop</li>
                    <li>EliteTech Desktop</li>
                    
                </ul>
                </div>

                {/*Column 3*/}
                <div className="col-md-3 col-sm-6">
                <ul className="list-unstyled">
                    <h4>Accessories</h4>
                    <li>EliteTech Accessories</li>
                    <li>EliteTech Accessories</li>
                    
                </ul>
                </div>

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
