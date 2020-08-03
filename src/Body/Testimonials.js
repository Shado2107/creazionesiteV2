import React from 'react';
import testimonial1 from './../images/testimonials/testimonial-1.jpg';
import testimonial2 from './../images/testimonials/testimonial-3.jpg';

const Testimonials = () => {
    return(
        <section id="testimonials">
        <div className="container">
          <h3 className="title text-center">TESTIMONIALS</h3>
          <div className="row offset-1">
            <div className="col-md-5 testimonials">
              <p className="feedback">"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              </p>
              <img src={testimonial1}  alt=""/>
              <p className="user-details"><b>James</b><br/>CEO at DIN</p>
            </div>
            <div className="col-md-5 testimonials">
              <p className="feedback">"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              </p>
              <img src={testimonial2}  alt=""/>
              <p className="user-details"><b>William</b><br/>Co-founder at ArtSpace</p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Testimonials;