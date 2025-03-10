import React, { useState } from "react";
import projectData from "../../utilities/projectData.js";
import "./Portfolio.css";
// import TinyDesk from "../TinyDesk/TinyDesk.tsx";
export default function Portfolio() {
  const [imageError, setImageError] = useState(false);

  const projects = projectData.map(
    ({ id, image, name, description, link, icon }) => {
      return (
        <section className="project-container" key={id} id={id}>
          <a className="img-container" href={link}>
            {!imageError && image ? (
              <img
                className="project-img"
                src={image}
                alt={name}
                onError={() => setImageError(true)}
              />
            ) : (
              <i className={`${icon} icon`}></i>
            )}
          </a>
          <div className="project-details">
            <h1 id="project-title">{name}</h1>
            <p id="project-description">{description}</p>
          </div>
        </section>
      );
    }
  );

  return (
    // <>
      <section className="projects-container">
        {/* <TinyDesk /> */}
        {projects}
      </section>
    // </>
  );
}
