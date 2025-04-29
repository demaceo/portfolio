import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../logo.jpg";
import React, { useState, memo, useEffect } from "react";

const NavBar = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true); // ✨ new
  const [lastScrollY, setLastScrollY] = useState(0); // ✨ new

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const location = useLocation();

  // Track scroll direction
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // scrolling down ➔ hide navbar
      } else {
        setShowNavbar(true); // scrolling up ➔ show navbar
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  /* ! change Nav Links to WHO WHAT HOW WHY */

  return (
    <header className={`nav-container ${showNavbar ? "visible" : "hidden"}`}>
      <div className="logo-container">
        <img className="logo" alt="portfolio-logo" src={logo} />
        <div className="descriptor-container">
          <div className="name">Demaceo Vincent</div>
          <div className="occupation">Designer and Developer</div>
        </div>
      </div>

      <div className="dropdown">
        <button
          className="dropbtn"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <i
            className={`fa fa-${isMenuOpen ? "close" : "bars"}`}
            id="nav-icon"
          ></i>
        </button>

        <nav className={`nav-links-container${isMenuOpen ? "-open" : ""}`}>
          <Link
            to="/"
            className={`nav-link ${
              location.pathname === "/" ? "active-link" : ""
            }`}
            onClick={closeMenu}
          >
            PROFILE
          </Link>
          <Link
            to="/projects"
            className={`nav-link ${
              location.pathname === "/projects" ? "active-link" : ""
            }`}
            onClick={closeMenu}
          >
            PROJECTS
          </Link>
          <a
            href="#contact-jump"
            className="nav-link contact-link"
            onClick={closeMenu}
          >
            CONTACT
          </a>
        </nav>
      </div>
    </header>
  );
});

export default NavBar;
