import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import './Static/CSS/footer.css';
function Footer() {
  return (
  <>
      <MDBContainer fluid >
        <MDBRow>
          <MDBCol md="3" align="center">
              <p><i class="fas fa-info-circle" ></i></p>
              <p><b>Need Help?</b></p>
              <a  href="#">Visit our knowlegde center</a>
          </MDBCol>
          <MDBCol md="3" align="center">
              <p><i class="fas fa-envelope"></i></p>
              <p><b>24x7 support</b></p>
              <a href="#"> wecare@hopscotch.in</a>
          </MDBCol>
          <MDBCol md="3" align="center">
              <p><img src="https://static.hopscotch.in/web2/images/hs-icon.03afbb0a0b552f116bede3eeec5949ad.svg"></img></p>
              <p><b>Download our apps</b></p>
              <a href="#" ><i class="fab fa-apple"></i></a>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <a href="#" ><i class="fab fa-google-play"></i></a>
          </MDBCol>
          <MDBCol md="3" align="center">
              <p><i class="fas fa-thumbs-up"></i></p>
              <p><b>Connect with us</b></p>
              <a href="#" ><i class="fab fa-facebook-f"></i></a>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <a href="#" ><i class="fab fa-twitter"></i></a>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <a href="#" ><i class="fab fa-instagram"></i></a>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <a href="#" ><i class="fab fa-pinterest-p"></i></a>
              
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div>
        <MDBContainer fluid>
          <br/><br/>
            <MDBRow>
              <MDBCol  noGutters={true}>
                <img height="40px" src="https://static.hopscotch.in/web2/images/hs-logo.png"></img>
                </MDBCol>
              
                 <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                 <a href="#">About us &nbsp;.&nbsp;</a>
                 <a href="#">Terms of Service &nbsp;.&nbsp;</a>
                 <a href="#">Privacy Policy</a>
                 <MDBCol  noGutters={true}>
                 <p align="right">© 2011-2021 Hopscotch. All rights reserved.</p>
            </MDBCol>
            </MDBRow>
            
        </MDBContainer>
      </div>
    </>
  );
}

export default Footer;
