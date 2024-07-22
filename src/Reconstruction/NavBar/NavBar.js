import "./NavBar.css";
import { Link } from "react-router-dom";
import logo from "../../logo.jpg";
import React, { useState } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="nav-container syne-font">
      <div className="logo-container">
        <img id="logo" alt="portfolio-logo" src={logo} />
        <div className="descriptor-container">
          <div id="name">Demaceo Vincent</div>
          <div id="occupation">Designer and Developer</div>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn" onClick={toggleMenu}>
          <i
            className={`fa fa-${isMenuOpen ? "close" : "bars"}`}
            id="nav-icon"
            aria-hidden="true"
          ></i>
        </button>
        <div className={`nav-links-container${isMenuOpen ? "-open" : ""}`}>
          <Link to="/" className="link">
            <span className="option-text">PROFILE</span>
          </Link>
          <Link to="/portfolio" className="link">
            <span className="option-text">PORTFOLIO</span>
          </Link>
          <a href="#contact-jump" className="link">
            <span className="option-text">CONTACT</span>
          </a>
        </div>
      </div>
    </div>
  );
}
