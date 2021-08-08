import React from "react";
import CardItem from "./CardItem";
import project1 from "../images/project-1.png";
import project2 from "../images/project-2.webp";
import "./Cards.css";
import Skill from "./Skill";

function Cards() {
  return (
    <div className="cards">
      <p className="project-title">Projects</p>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={project1}
              text="Designed and developed the rain sensing smart helmet, was among top 50 projects at university"
              label="Rain Sensing Smart Helmet"
              path="/services"
            />
            <CardItem
              src={project2}
              text="Study on how to machine non-conductive metals through electric discharge machining"
              label="Electric Discharge Machining"
              path="/services"
            />
          </ul>
          {/* <ul className="cards__item">
            <CardItem
              src="images/img-1.jpg"
              text="Explore the hidden waterfall deep inside the amazon jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Traveling through the islands of bali in private cruise"
              label="Luxury"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Traveling through the islands of bali in private cruise"
              label="Luxury"
              path="/services"
            />
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
