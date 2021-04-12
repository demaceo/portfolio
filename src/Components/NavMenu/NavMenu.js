import "./navmenu.css";
import React from "react";
import { useRef, useState } from "react";
import LightSwitch from "../LightSwitch/LightSwitch";
import { Link } from "react-router-dom";
import Matrix from "../Matrix/Matrix.js";
import Tasks from "../Tasks/Tasks.js";

function NavMenu() {
  const navRef = useRef();
  const navIconRef = useRef();
  const [open, setOpen] = useState(false);
  const toggleSettings = () => {
    if (open) {
      navRef.current.style.width = "0";
      navIconRef.current.style.position = "initial";
      navIconRef.current.style.right = ".8vw";
      setOpen(false);
    } else {
      navRef.current.style.width = "25vw";
      navIconRef.current.style.position = "fixed";
      navIconRef.current.style.right = "3vw";
      setOpen(true);
    }
  };
  return (
    <section className="side-nav-container">
      <i
        className="fas fa-bars"
        ref={navIconRef}
        id="settings-icon"
        onClick={toggleSettings}
      ></i>
      <div className="sidenav" ref={navRef}>
        <div id="content-container">
          {/* <div id="switch-container">
            <LightSwitch />
          </div> */}
          <div id="nav-container">
            <Link to="/" aria-label="about-me">
              Home
            </Link>
            <Link to="/projects" aria-label="about-me">
              Projects
            </Link>
            <Link to="/aboutme" aria-label="about-me">
              About Me
            </Link>
            <Tasks />

            {/* <Link to="/playlist" aria-label="playlist" className="isDisabled">
              Playlist
            </Link> */}
            {/* <Link to="/gazer" aria-label="gazer">
              Gazer
            </Link> */}
            {/* <Link to="/map" aria-label="map" className="isDisabled">
              Map
            </Link> */}
            <br />
            {/* <Link id="login" to="/login" className="isDisabled">
              Login
            </Link> */}
            {/* <Matrix /> */}
          </div>
          {/* <div className="github-container">
            <a
              className="github-button"
              href="https://github.com/demaceo"
              data-icon="fab fa-github"
              data-size="large"
              data-show-count="true"
              aria-label="Demaceo on GitHub"
            >
              Demaceo
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default NavMenu;
