import React from "react";
import { useRef } from "react";
import "./lightSwitch.css";
import { useTheme, useThemeUpdate } from "../../utilities/ThemeContext";

export default function LightSwitch() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const moonStyle = darkTheme ? "fas fa-moon switch" : "far fa-moon switch";

  return (
    <form className="light-switch" onClick={toggleTheme}>
      <i className={moonStyle}></i>
    </form>
  );
}
