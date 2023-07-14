import React from "react";
import "./Bubbles.css";
import projectData from "../../utilities/projectData.js";

export default function Bubbles() {
  const getStyle = (event) => {
    event.target.classList.add("pop");
    setTimeout(() => {
      window.open(event.target.id);
      event.target.classList.remove("pop");
    }, 1000);
  };
  // eslint-disable-next-line
  const bubbles = projectData.map((bubble) => {
    const { id, name, icon, link } = bubble;
    if (id < 4) {
      return (
        <div className={`bubble x${id}`} key={id} id={link} onClick={getStyle}>
          <div className={`text-container project-${id}`}>
            {/* put 'text-container' in h1 element */}
            <h1>{name}</h1>
            <i className={`${icon} icon`} />
          </div>
        </div>
      );
    }
  });
  return <section className="bubble-container">{bubbles}</section>;
}
