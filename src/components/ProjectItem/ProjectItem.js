import React, { Component } from 'react';
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './ProjectItem.css';

class ProjectItem extends Component {
    render() {
        const { title, repoLink, technologies, timeInterval, blurb } = this.props;
        return (
            <div className="mt0 mb2 pb2 projectItem">
                <div className="flex">
                    <div className="w-90">
                        <h2 className="mb1 di">{ title }</h2>
                        <a className="ml2 icon" href={ repoLink } target="_blank"><FontAwesomeIcon icon={ faGithubAlt }></FontAwesomeIcon></a>
                        <div className="mt1 mb3">
                            <mark className="mr2"><p className="di">tech used:</p></mark>{ technologies }
                        </div>
                        { blurb }
                    </div>
                    <div className="w-10">
                        <p className="f5 tr mb0">{ timeInterval }</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectItem;