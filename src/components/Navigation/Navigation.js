import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <div className="nav">
                <a href="/"><p className="f5 di ma2 item">home</p></a>
                <a href="/about"><p className="f5 di ma2 item">about</p></a>
                <a href="/experience"><p className="f5 di ma2 item">experience</p></a>
                <a href="projects"><p className="f5 di ma2 item">projects</p></a>
            </div>
        );
    }
}

export default Navigation;