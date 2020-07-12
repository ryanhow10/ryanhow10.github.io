import React, { Component } from 'react';
import ExperienceItem from '../ExperienceItem/ExperienceItem';
import about from './../../assets/about';
import './Experience.css';

class Experience extends Component {
    render() {
        const experienceItems = about.experience.map((item, index) => {
            return (
                <ExperienceItem
                    key={ index }
                    position={ item.position }
                    organization={ item.organization }
                    location={ item.location }
                    timeInterval={ item.timeInterval }
                    technologies={ item.technologies }
                    blurb={ item.blurb }>
                </ExperienceItem>
            )
        });
        return (
            <div className="experience">
                <h1 className="mb0 topExperience">experience</h1>
                <h3 className="mt0 topExperience">here's a list of my professional experience</h3>
                <div className="flex">
                    <div className="w-100">
                        { experienceItems }
                    </div>
                </div>
            </div>
        )
    }
}

export default Experience;