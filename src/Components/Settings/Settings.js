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
        <a href="/gazer">Gazer</a>
        <a href="/map">Map</a>
        <br />
        <a href="/login">Login</a>
        <LightSwitch />
      </div>
    </>
  );
}

export default Settings;
