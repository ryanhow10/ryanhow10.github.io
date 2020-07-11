import React, { Component } from 'react';
import Header from './../Header/Header';
import Sections from './../Sections/Sections';
import Footer from './../Footer/Footer';

class Home extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Sections></Sections>
                <Footer></Footer>
            </div>
        )
    }
}

export default Home;