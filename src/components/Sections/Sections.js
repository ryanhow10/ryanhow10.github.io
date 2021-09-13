import React, { Component } from "react";
import "./Sections.css";

class Sections extends Component {
  render() {
    return (
      <div className="sections">
        <a href="/about">
          <div className="section">
            <img
              alt="about"
              src={require(`./../../assets/images/about.svg`)}
              className="ma0"
              height="400px"
            ></img>
            <p className="mt0 f4">about</p>
          </div>
        </a>
        <a href="/experience">
          <div className="section">
            <img
              alt="experience"
              src={require(`./../../assets/images/experience.svg`)}
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
              src={require(`./../../assets/images/projects.svg`)}
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
