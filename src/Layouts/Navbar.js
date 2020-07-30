import React, {Component} from 'react';
import logo from './../images/webiz-logo.png';


class Navbar extends Component {
    render(){
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
                    <a className="nav-link" href="#top">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#services">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#testimonials">Testimonials</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </nav>
          </section>
        )
    }
}

export default Navbar