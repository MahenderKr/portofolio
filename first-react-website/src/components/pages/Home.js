import React from "react";
import "../../App.css";
import AboutMe from "../AboutMe";
import Cards from "../Cards";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import SkillBox from "../SkillBox";

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <Cards />
      <SkillBox />
      <Footer />
    </div>
  );
}

export default Home;
