import React from 'react';
import website from './../svg/undraw_website_setup_5hr2.svg';
import branding from './../svg/branding.svg';
import undraw from './../svg/undraw_Savings_dwkw.svg';
import social from './../svg/social.svg';
import wireframe from './../svg/undraw_wireframing_nxyi.svg';
import ads from './../svg/ads.svg';

const Services = () => {
    return (
        <section id="services">
      <div class="container text-center">
        <h3 class="title text-center">SERVICES</h3>
        <div class="row text-center">
          <div class="col-md-4 services">
            <img src={website} class="service-img"   alt=""/>
            <h4>Landing Page Design</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div class="col-md-4 services">
            <img src={branding} class="service-img"   alt=""/>
            <h4>Online  Branding</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div class="col-md-4 services">
            <img src={ads} class="service-img"   alt=""/>
            <h4>Google Ads</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div class="col-md-4 services">
            <img src={undraw} class="service-img"   alt=""/>
            <h4>PPC</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div class="col-md-4 services">
            <img src={social} class="service-img"   alt=""/>
            <h4>Social Media</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div class="col-md-4 services">
          <img src={wireframe} class="service-img"   alt=""/>
            <h4>SEO</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <button type="button" class="btn btn-primary"  name="button">Find Out More</button>
      </div>
    </section>
    )
}

export default Services;