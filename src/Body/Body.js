import React, {Component} from 'react';
import Services from './Services';
import About from './About';
import Testimonials from './Testimonials';
import Form from './../components/Form';

class Body extends Component{
    render() {
        return(
            <div>
                <Services />
                <About />
                <Testimonials />
                <Form></Form>
            </div>
            
        )
    }
}

export default Body;