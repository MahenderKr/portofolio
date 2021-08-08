import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Navbar.css";

function Navbar() {
  const [button, setButton] = useState(true);
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };
  function handleScrollHome(e) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  function handleScrollAboutMe(e) {
    window.scrollTo({
      top: 610,
      left: 0,
      behavior: "smooth",
    });
  }
  function handleScrollProjects(e) {
    window.scrollTo({
      top: 1200,
      left: 0,
      behavior: "smooth",
    });
  }
  function handleScrollContact(e) {
    window.scrollTo({
      top: 3600,
      left: 0,
      behavior: "smooth",
    });
  }
  function handleScrollSkills(e) {
    window.scrollTo({
      top: 2600,
      left: 0,
      behavior: "smooth",
    });
  }
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="../images/logo.png" height="80px" width="150px" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={(e) => {
                  closeMobileMenu();
                  handleScrollHome(e);
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={(e) => {
                  closeMobileMenu();
                  handleScrollAboutMe(e);
                }}
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={(e) => {
                  closeMobileMenu();
                  handleScrollProjects(e);
                }}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={(e) => {
                  closeMobileMenu();
                  handleScrollSkills(e);
                }}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={(e) => {
                  closeMobileMenu();
                  handleScrollContact(e);
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
