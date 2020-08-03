import React, {Component} from 'react';
import play from './../svg/play.svg';
import email from './../svg/undraw_email_campaign_qa8y.svg';
import image from './../images/ground@-min.png';
import {Link} from 'react-router-dom';

class Banner extends Component{
    render() {
        return(
          <div>
            <section className="banner">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <p className="promo-title">CREAZIONE STUDIO</p>
                  <p className="join-title">Votre studio de création numérique et multimédia</p>
                  <Link to="#" className="link-play">
                    <img src={play} alt="" className="play-btn"/>Demander un devis
                  </Link>
                </div>
                  <div className="col-md-6">
                    <img src={email} alt="" className="img-fluid"/>
                  </div>
              </div>
            </div>
             
              <img src={image} className="bottom-img" alt=""/>
          </section>
          </div>
            
        )
    }
}

export default Banner