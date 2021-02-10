import "./settings.css";
import React from "react";
import { useRef } from "react";
import LightSwitch from "../LightSwitch/LightSwitch";

function Settings() {
  const switchRef = useRef(0);
  const navRef = useRef();
  
  const toggleSettings = () => {
    if (!switchRef.current) {
      navRef.current.classList.remove("hidden");
      switchRef.current = 1;
    } else {
      navRef.current.classList.add("hidden");
      switchRef.current = 0;
    }
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
