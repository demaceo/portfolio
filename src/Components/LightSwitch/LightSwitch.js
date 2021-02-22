import React from "react";
import { useRef } from "react";
import "./lightSwitch.css";

export default function LightSwitch() {
  const clickRef = useRef(0);
  const offRef = useRef();
  const onRef = useRef();
  const switchRef = useRef();

  const adjustLight = () => {
    // let body = document.body;
    if (clickRef.current) {
      onRef.current.classList.add("hidden");
      offRef.current.classList.remove("hidden");
      clickRef.current = 0;
    } else {
      // document.body.style.backgroundColor = "white";
      onRef.current.classList.remove("hidden");
      offRef.current.classList.add("hidden");
      clickRef.current = 1;
    }
  };

  return (
    <form ref={switchRef} onClick={adjustLight}>
      <i className="far fa-moon switch" ref={onRef}></i>
      <i className="fas fa-moon switch hidden" id="full" ref={offRef}></i>
    </form>
  );
}
