import React from "react";
import { useRef } from "react";
import "./lightSwitch.css";
import { useTheme, useThemeUpdate } from "../../utilities/ThemeContext";

export default function LightSwitch() {
  const clickRef = useRef(0);
  const offRef = useRef();
  const onRef = useRef();
  const switchRef = useRef();
  const dark = useTheme();
  const themeStyles = {
    backgroundColor: dark ? "#333" : "#CCC",
    color: dark ? "#333" : "#CCC",
    padding: "2rem",
    margin: "2rem",
  };
  const toggleTheme = useThemeUpdate();

  const adjustLight = () => {
    if (clickRef.current) {
      onRef.current.classList.add("hidden");
      offRef.current.classList.remove("hidden");
      clickRef.current = 0;
    } else {
      onRef.current.classList.remove("hidden");
      offRef.current.classList.add("hidden");
      clickRef.current = 1;
    }
  };

  return (
    <button
      className="light-switch"
      onClick={toggleTheme}
      ref={switchRef}
      // onClick={adjustLight}
      
    >
      <i className="far fa-moon switch" ref={onRef}></i>
      <i className="fas fa-moon switch hidden" id="full" ref={offRef}></i>
    </button>
  );
}
