import React from "react";
import $ from "jquery";
import { findDOMNode } from "react-dom";
import Button from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>
        <span
          style={{ fontSize: "50px" }}
          class="typer"
          id="main"
          data-colors="white,orange"
          data-words="Mahender Kumar,Web Developer"
          data-delay="100"
          data-deleteDelay="10"
        ></span>
        <span
          style={{ fontSize: "0.1px" }}
          class="cursor"
          data-owner="main"
        ></span>
      </h1>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Download Resume
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
