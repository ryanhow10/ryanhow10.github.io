import React, { Component } from 'react';
import './ExperienceItem.css';

class ExperienceItem extends Component {
    render() {
        const { position, organization, location, timeInterval, technologies, blurb} = this.props;
        return (
            <div className="mt0 mb2 pb2 experienceItem">
                <div className="flex">
                    <div className="w-90">
                        <h2 className="mb1">{ organization }</h2>
                        <p className="mt0 mb0">{ position }</p>
                        <div className="mt1 mb3">
                            <mark className="mr2"><p className="di">tech used:</p></mark>{ technologies }
                        </div>
                        { blurb }
                    </div>
                    <div className="w-10">
                        <p className="f5 tr mb0">{ timeInterval }</p>
                        <p className="f5 tr mt1">{ location }</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExperienceItem;