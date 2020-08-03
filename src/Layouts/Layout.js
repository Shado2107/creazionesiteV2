import React, {Component} from 'react';
import Footer from './Footer';
import Banner from './Banner';
import Navbar from './Navbar';
import Body from './../Body/Body';


class Layout extends Component{
    render() {
        return(
            <div>
                <Navbar></Navbar>
                <Banner></Banner>
                <Body></Body>
                <Footer></Footer>
            </div>
        )
    }
}

export default Layout;