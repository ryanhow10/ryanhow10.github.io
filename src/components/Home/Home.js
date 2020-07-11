import React, { Component } from 'react';
import Header from './../Header/Header';
import Sections from './../Sections/Sections';

class Home extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Sections></Sections>
            </div>
        )
    }
}

export default Home;