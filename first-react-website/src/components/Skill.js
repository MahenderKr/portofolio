import React from "react";
import "./Skill.css";

function Skill(props) {
  return (
    <div className="skill-container">
      <i
        className={props.clName}
        style={{
          fontSize: "48px",
          color: "#e0a80d",
          position: "relative",
          marginLeft: "80px",
          marginTop: "40px",
        }}
      />
      <p>{props.skillName}</p>
    </div>
  );
}

export default Skill;
