import React from "react";
import "./aboutMe.css";

export default function AboutMe() {
  return (
    <div className="about">
      <h2 id="my-name">Demaceo Vincent Howard</h2>
      <h4 id="title">Front End Engineer // Software Developer</h4>
      <div id="socials">
        <a
          className="social fab fa-linkedin"
          href="https://www.linkedin.com/in/demaceo-vincent-howard-12a9028b/"
        />
        <a
          className="social fab fa-instagram"
          href="https://www.instagram.com/demaceo.vh/"
        />
        <a className="social fab fa-github" href="https://github.com/demaceo" />

        <a className="social far fa-file" />
      </div>
    </div>
  );
}
