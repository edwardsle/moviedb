import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="elegant-color" className="font-small pt-4 mt-4">
      <MDBContainer className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <h5 className="title">CPSC 531 - Group 6</h5>
            <hr/>
            <p><strong>Edward Le</strong> - CWID: 886654797</p>
            <p><strong>Yong Kim</strong> - CWID: 888250156</p>
          </MDBCol>
          <MDBCol md="8">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
           &copy; {new Date().getFullYear()}  MovieDb
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;
