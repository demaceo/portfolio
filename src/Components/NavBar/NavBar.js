import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../logo(light).png";
import { useState, memo, useEffect } from "react";

const NavBar = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY) < 20) return;

      if (currentScrollY - lastScrollY > 30) {
        setShowNavbar(false);
      } else if (lastScrollY - currentScrollY > 10) {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
          aria-expanded={isMenuOpen}
          aria-controls="nav-menu"
        >
          <i
            className={`fa fa-${isMenuOpen ? "close" : "bars"}`}
            id="nav-icon"
          ></i>
        </button>

        <nav
          id="nav-menu"
          className={`nav-links-container${isMenuOpen ? "-open" : ""}`}
        >
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
