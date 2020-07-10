import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <div className="tr">
                <p className="f5 di ma2 item">about</p>
                <p className="f5 di ma2 item">experience</p>
                <p className="f5 di ma2 item">projects</p>
            </div>
        );
    }
}

export default Navigation;