import React from "react";
import Skill from "./Skill";
import "./Skill.css";

export default function SkillBox() {
  return (
    <div className="skillbox-container">
      <h1>Skills</h1>
      <Skill clName="fab fa-react" skillName="ReactJS" />
      <Skill clName="fab fa-java" skillName="Java" />
      <Skill clName="fab fa-js" skillName="JavaScript" />
      <Skill clName="fab fa-html5" skillName="HTML5" />
      <Skill clName="fab fa-css3-alt" skillName="CSS3" />
      <Skill clName="fab fa-git-alt" skillName="git" />
    </div>
  );
}
