import React, { Component } from "react";
import links from "./../../assets/links";
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import resume from "./../../assets/resume.pdf";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <a href={links.github} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faGithubAlt}
            className="icon ma3"
          ></FontAwesomeIcon>
        </a>
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="icon ma3"
          ></FontAwesomeIcon>
        </a>
        <a href={links.email} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="icon ma3"
          ></FontAwesomeIcon>
        </a>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faFileAlt}
            className="icon ma3"
          ></FontAwesomeIcon>
        </a>
      </div>
    );
  }
}

export default Footer;
