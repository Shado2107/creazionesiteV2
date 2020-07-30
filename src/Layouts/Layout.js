import React, {Component} from 'react';
import Footer from './Footer';
import Banner from './Banner';
import Navbar from './Navbar';
import Services from './../Body/Services';


class Layout extends Component{
    render() {
        return(
            <div>
                <Navbar></Navbar>
                <Banner></Banner>
                <Services></Services>
                <Footer></Footer>
            </div>
        )
    }
}

export default Layout;