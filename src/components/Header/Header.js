import React, { Component } from 'react';
import './Header.css';
import Navigation from './../Navigation/Navigation';

class Header extends Component {
    render() {
        return (
            <div>
                <Navigation></Navigation>
                <h1 className="mb0">hi, im ryan</h1>
                <h3 className="mt0">click a section to learn more about me!</h3>
            </div>
        );
    }
}

export default Header;