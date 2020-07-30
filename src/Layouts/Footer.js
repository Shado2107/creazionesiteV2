import React, { Component } from 'react';
import logo from './../images/webiz-logo.png';
import facebook from './../svg/facebook-logo.svg';
import instagram from './../svg/instagram_.svg';
import twitter from './../svg/twitter-logo.svg';
import whatsapp from './../svg/whatsapp.svg';
  
class Footer extends Component {  
    render() {  
        return (  
            <div>  
                 <section id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 footer-box">
              <img src={logo} alt=""/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="col-md-4 footer-box">
                <p id="contact"><b>OUR OFFICE</b></p>
                <p><i className="fa fa-map-marker"></i>Holloway Road, London</p>
                <p><i className="fa fa-phone"></i>+44 074 675 86 965</p>
                <p><i className="fa fa-envelope-o"></i>info@examle.com</p>
            </div>
            <div className="col-md-4 footer-box">
                <p><b>SUBSCRIBE NEWSLETTER</b></p>
                <form>
                    <input type="email"className="form-control" placeholder="Your Email"></input>
                </form> 
                <button type="button"className="btn btn-primary" name="button">Subscribe</button>

                <div id="social">
                    <p>Retrouvez nous sur les réseaux sociaux</p>
                       <div className="social-icons">
                          <a href="#" className="svg-icons"><img src={facebook} alt=""/></a>
                          <a href="#" className="svg-icons"><img src={instagram} alt=""/></a>
                          <a href="#" className="svg-icons"><img src={twitter} alt=""/></a>
                          <a href="#" className="svg-icons"><img src={whatsapp} alt=""/></a>
                       </div>
                </div>
            </div>
            <div className="col-md-6 ">
              <p className="copyright">Copyright © 2019. All rights reserved | Designed by <a href="https://www.salvatoremandis.it/index-eng.html">Salvatore Mandis</a></p>
            </div>
            <div className="col-md-6 text-right">
            <p className="copyright">
              <a href="#">Privacy Policy</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Terms & Conditions</a>
            </p>
            </div>
          </div>
          {/* <br> */}
        </div>
    </section>
            </div>  
        )  
    }  
}  
  
export default Footer;