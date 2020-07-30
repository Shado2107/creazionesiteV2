import React, {Component} from 'react';
import play from './../svg/play.svg';
import email from './../svg/undraw_email_campaign_qa8y.svg';
import image from './../images/ground@-min.png'

class Banner extends Component{
    render() {
        return(
            <section className="banner">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <p className="promo-title">Your Digital Agency</p>
                  <p className="join-title">Join Us! We Will Let Grown Your Business Faster</p>
                  <a href="#" className="link-play">
                    <img src={play} alt="" className="play-btn"/>Watch Tutorials
                  </a>
                </div>
                  <div className="col-md-6">
                    <img src={email} alt="" className="img-fluid"/>
                  </div>
              </div>
            </div>
             
              <img src={image} className="bottom-img" alt=""/>
          </section>
        )
    }
}

export default Banner