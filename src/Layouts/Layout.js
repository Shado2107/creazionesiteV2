import React, {Component} from 'react';
import Footer from './Footer';
import Banner from './Banner';
import Navbar from './Navbar';


class Layout extends Component{
    render() {
        return(
            <div>
                <Navbar></Navbar>
                <Banner></Banner>
                <Footer></Footer>
            </div>
        )
    }
}

export default Layout;