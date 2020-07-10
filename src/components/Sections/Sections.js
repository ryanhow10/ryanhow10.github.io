import React, { Component } from 'react';
import './Sections.css';

class Sections extends Component {
    render() {
        return (
            <div className="flex tc">
                <div className="section">
                    <img src={require(`./../../assets/images/about.svg`)} className="ma0" height="400px"></img>
                    <p className="mt0 f4">about</p>
                </div>
                <div className="section">
                    <img src={require(`./../../assets/images/experience.svg`)} className="ma0" height="400px"></img>
                    <p className="mt0 f4">experience</p>
                </div>
                <div className="section">
                    <img src={require(`./../../assets/images/projects.svg`)} className="ma0" height="400px"></img>
                    <p className="mt0 f4">projects</p>
                </div>
            </div>
        );
    }
}

export default Sections;