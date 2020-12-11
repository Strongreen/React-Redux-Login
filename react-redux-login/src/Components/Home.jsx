import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Logo from './Logo';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Logo />
                <Footer />                
            </div>
        );
    }
}

export default Home;
