import React, { Component } from 'react';
import logo from './../images/logo_creazione.png';
import facebook from './../svg/facebook-logo.svg';
import instagram from './../svg/instagram_.svg';
import twitter from './../svg/twitter-logo.svg';
import whatsapp from './../svg/whatsapp.svg';
import { Link } from 'react-router-dom';
  
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
                <p id="contact"><b>ADRESSE</b></p>
                <p><i className="fa fa-map-marker"></i>Adidoadin, 50m de l'hotel la concorde</p>
                <p><i className="fa fa-phone"></i>(+228) 70 54 10 86 | 91 77 99 59</p>
                <p><i className="fa fa-envelope-o"></i>contact@creazionestudio.com</p>
            </div>
            <div className="col-md-4 footer-box">
                <p><b>SUBSCRIBE NEWSLETTER</b></p>
                <form>
                    <input type="email" className="form-control" placeholder="Your Email"></input>
                    <button type="button" className="btn btn-primary" name="button">Subscribe</button>
                </form> 
                

                <div id="social">
                    <p>Retrouvez nous sur les réseaux sociaux</p>
                       <div className="social-icons">
                          <Link to="#" className="svg-icons"><img src={facebook} alt=""/></Link>
                          <Link to="#" className="svg-icons"><img src={instagram} alt=""/></Link>
                          <Link to="#" className="svg-icons"><img src={twitter} alt=""/></Link>
                          <Link to="#" className="svg-icons"><img src={whatsapp} alt=""/></Link>
                       </div>
                </div>
            </div>
            <div className="col-md-6 ">
              <p className="copyright">Copyright © 2020. All rights reserved | Designed by <Link to="">shado</Link></p>
            </div>
            <div className="col-md-6 text-right">
            <p className="copyright">
              <Link to="#">Privacy Policy</Link>
              <Link to="#">Cookie Policy</Link>
              <Link to="#">Terms & Conditions</Link>
            </p>
            </div>
          </div>
          <br/>
        </div>
    </section>
            </div>  
        )  
    }  
}  
  
export default Footer;