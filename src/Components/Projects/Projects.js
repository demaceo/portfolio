import React from "react";
import projectData from "../../utilities/projectData.js";
import './projects.css';
import { Link } from "react-router-dom";

export default function Projects() {
  const projects = projectData.map((project) => {
    const { id, image, name, description, partners } = project;
    return (
      <section className="project-container" id={id}>
        <Link to={`projects/${name}/`}>
          <img className="project-img" src={image} key={id} id={id} />
        </Link>
        <div className="project-details">
          <h1 id="project-title">{name}</h1>
          <p id="project-description">{description}</p>
        </div>
      </section>
    );
  });
  return <section className="projects-container">{projects}</section>;
}
