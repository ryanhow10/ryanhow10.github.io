import React, { Component } from 'react';
import about from './../../assets/about';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className="about">
                <h1 className="mb0 top">ryan how</h1>
                <h3 className="mt0 top">let me tell you a bit about myself!</h3>
                <div className="aboutContent">
                    <div>
                        <p className="f5">{ about.description }</p>
                        <div>
                            <p className="f5">here's a brief rundown about me</p>
                            <div className="mb4">
                                <mark className="mr3"><p className="f5 di">education: </p></mark>{ about.education }
                            </div>
                            <div className="mb4">
                                <mark className="mr3"><p className="f5 di">toolset: </p></mark>{ about.toolset }
                            </div>
                            <div>
                                <mark className="mr3"><p className="f5 di">interests/hobbies: </p></mark>{ about.interests }
                            </div>
                        </div>
                        <p className="f5">{ about.closer }</p>
                    </div>
                    <img src={require(`./../../assets/images/aboutPage.svg`)} className="aboutImage"></img>
                </div>
            </div>
        )
    }
}

export default About;