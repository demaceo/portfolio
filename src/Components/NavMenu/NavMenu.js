import "./navmenu.css";
import React from "react";
import { useRef, useState } from "react";
import LightSwitch from "../LightSwitch/LightSwitch";
import { Link } from "react-router-dom";

function NavMenu() {
  const navRef = useRef();
  const navIconRef = useRef();
  const [open, setOpen] = useState(false);
  const toggleSettings = () => {
    if (open) {
      navRef.current.style.width = "0";
      navIconRef.current.classList.remove("fa-angle-double-right");
      navIconRef.current.classList.add("fa-angle-double-left");

      setOpen(false);
    } else {
      navRef.current.style.width = "20vw";
      navIconRef.current.classList.remove("fa-angle-double-left");
      navIconRef.current.classList.add("fa-angle-double-right");

      setOpen(true);
    }
  };
  return (
    <>
      <i
        className="fa fa-angle-double-left"
        ref={navIconRef}
        id="settings-icon"
        onClick={toggleSettings}
      ></i>
      <div className="sidenav" ref={navRef}>
        <div id="content-container">
          <div id="switch-container">
            <LightSwitch />
          </div>
          <div id="nav-container">
            <Link to="/aboutme" aria-label="about-me">
              About Me
            </Link>
            <Link to="/playlist" aria-label="playlist">
              Playlist
            </Link>
            <Link to="/gazer" aria-label="gazer">
              Gazer
            </Link>
            <Link to="/map" aria-label="map" className="isDisabled">
              Map
            </Link>
            <br />
            <Link id="login" to="/login">
              Login
            </Link>
          </div>
          <div className="github-container">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default NavMenu;
