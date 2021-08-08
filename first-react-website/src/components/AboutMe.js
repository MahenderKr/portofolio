import React from "react";
import "./AboutMe.css";
import photo from "../images/fb.jpg";
import Button from "./Button";

function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="img-container">
        <img src={photo} className="my-img" />
      </div>
      <div className="description">
        <h1>About Me</h1>
        Front End Developer with working experience in ReactJS. Built and
        delivered quality code while working on various projects. Strong
        interpersonal skills proven through customer satisfaction and
        organizational recognition awards. Aspire to become an expert in the
        field of software development.
        <div className="resume-btn">
          <Button buttonSize="btn--large" buttonStyle="btn--outline">
            Download Resume
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
