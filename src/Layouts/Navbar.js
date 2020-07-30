import React, {Component} from 'react';
import logo from './../images/webiz-logo.png';
import {Link} from 'react-router-dom';


function Navbar() {
  
        return(
            
            <section id="nav-bar">
                
                <nav className="navbar navbar-expand-lg navbar-light">
               <a className="navbar-brand" href="#">
                 <img src={logo} alt=""/>
               </a>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                 <i className="fa fa-bars"></i>
               </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-Link" to="#top">Creazione <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-Link" to="#services">Services</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-Link" to="#about">A propos</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-Link" to="#testimonials">Testimonials</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-Link" to="#contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </nav>
        

          </section>
        )
   
}

export default Navbar