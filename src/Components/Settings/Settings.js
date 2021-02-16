import "./settings.css";
import React from "react";
import { useRef } from "react";
import LightSwitch from "../LightSwitch/LightSwitch";

function Settings() {
  let navRef = useRef();
  const toggleSettings = () => {
    navRef.current.classList.toggle("hidden");
  };
  return (
    <>
      <i className="fas fa-cog" id="settings-icon" onClick={toggleSettings}></i>
      <div className="sidenav hidden" ref={navRef}>
        <a href="/aboutme">About Me</a>
        <a href="/recommendations">Recommendations</a>
        <a href="/gazer" disabled>
          Gazer
        </a>
        <a className="isDisabled" href="/map">
          Map
        </a>
        <br />
        <a href="/login">Login</a>
        <LightSwitch />
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
    </>
  );
}

export default Settings;
