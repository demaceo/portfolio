import "./NavBar.css";
import { Link } from "react-router-dom";
import logo from "../../logo.jpg";
import React, { useState, memo } from "react";

const NavBar = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

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
          ></i>
        </button>
        <div className={`nav-links-container${isMenuOpen ? "-open" : ""}`}>
          <Link to="/" className="link" onClick={closeMenu}>
            PROFILE
          </Link>
          <Link to="/projects" className="link" onClick={closeMenu}>
            PROJECTS
          </Link>
          <a href="#contact-jump" className="link" onClick={closeMenu}>
            CONTACT
          </a>
        </div>
      </div>
    </div>
  );
});

export default NavBar;