import React from "react";
import projectData from "../../utilities/projectData.js";
import "./Projects.css";

export default function Projects() {
  const projects = projectData.map(
    ({ id, image, name, description, partners, link }) => (
      <section className="project-container" key={id} id={id}>
        <a className="img-container" href={link}>
          <img className="project-img" src={image} alt={name} />
        </a>
        <div className="project-details">
          <h1 id="project-title">{name}</h1>
          <p id="project-description">{description}</p>
          <div className="contributors">
            Contributors:
            {partners.map((partner) => (
              <a className="contributor" key={partner.link} href={partner.link}>
                {partner.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    )
  );
  return <section className="projects-container">{projects}</section>;
}
