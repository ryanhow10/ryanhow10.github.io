import React, { Component } from "react";
import about from "./../../assets/images/about.svg";
import experience from "./../../assets/images/experience.svg";
import projects from "./../../assets/images/projects.svg";
import "./Sections.css";

class Sections extends Component {
  render() {
    return (
      <div className="sections">
        <a href="/about">
          <div className="section">
            <img alt="about" src={about} className="ma0" height="400px"></img>
            <p className="mt0 f4">about</p>
          </div>
        </a>
        <a href="/experience">
          <div className="section">
            <img
              alt="experience"
              src={experience}
              className="ma0"
              height="400px"
            ></img>
            <p className="mt0 f4">experience</p>
          </div>
        </a>
        <a href="/projects">
          <div className="section">
            <img
              alt="projects"
              src={projects}
              className="ma0"
              height="400px"
            ></img>
            <p className="mt0 f4">projects</p>
          </div>
        </a>
      </div>
    );
  }
}

export default Sections;
