import "./settings.css";
import React from "react";
import { useRef, useState } from "react";
import LightSwitch from "../LightSwitch/LightSwitch";

function Settings() {
  let navRef = useRef();
  const [open, setOpen] = useState(false);
  const toggleSettings = () => {
    if (open) {
      navRef.current.style.width = "0";
      setOpen(false);
    } else {
      navRef.current.style.width = "20vw";
      setOpen(true);
    }
  };
  return (
    <>
      <i className="fas fa-cog" id="settings-icon" onClick={toggleSettings}></i>
      <div className="sidenav" ref={navRef}>
        <div id="content-container">
          <div id="switch-container">
            <LightSwitch />
          </div>
          <div id="nav-container">
            <a aria-label="about-me" href="/aboutme">
              About Me
            </a>
            <a aria-label="playlist" href="/recommendations">
              Playlist
            </a>
            <a aria-label="gazer" href="/gazer" disabled>
              Gazer
            </a>
            <a aria-label="map" className="isDisabled" href="/map">
              Map
            </a>
            <br />
            <a id="login" href="/login">Login</a>
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

export default Settings;
