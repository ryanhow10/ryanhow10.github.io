import React, { Component } from 'react';
import ProjectItem from './../ProjectItem/ProjectItem'
import about from './../../assets/about';

class Projects extends Component {
    render() {
        const projectItems = about.projects.map((item, index) => {
            return (
                <ProjectItem
                    key={ index }
                    title={ item.title }
                    technologies={ item.technologies }
                    timeInterval={ item.timeInterval }
                    blurb={ item.blurb }>
                </ProjectItem>
            )
        });
        return (
            <div>
                <h1 className="mb0">projects</h1>
                <h3 className="mt0">here's a list of some things i made</h3>
                <div className="flex">
                    <div className="w-100">
                        { projectItems }
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;