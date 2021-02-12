import React from 'react'
import './bubbles.css';
import projectData from "../../utilities/projectData.js";
// import { Link } from "react-router-dom";

export default function Bubbles() {
  const bubbles = projectData.map((bubble) => {
    const { id, name, icon } = bubble;
    return (
      <div className={`bubble x${id}`} key={id} id={id}>
        <div className={`text-container project-${id}`}>
          <h1>{name}</h1>
          <i className={`${icon} icon`} />
        </div>
      </div>
    );
})
  return <section className="bubble-container">{bubbles}</section>;
}
