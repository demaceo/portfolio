import React from "react";
import "./aboutMe.css";

export default function AboutMe() {
  return (
    <div className="about">
      <h2 id="my-name">Demaceo Vincent Howard</h2>
      <h4 id="title">Front End Engineer // Software Developer</h4>
      <div id="socials">
        <a
          href="https://www.linkedin.com/in/demaceo-vincent-howard-12a9028b/"
          alt="linked-in"
        >
          <i className="social fab fa-linkedin"></i>
        </a>

        <a href="https://www.instagram.com/demaceo.vh/" alt="instagram">
          <i className="social fab fa-instagram"></i>
        </a>
        <a href="https://github.com/demaceo" alt="github">
          <i className="social fab fa-github"></i>
        </a>

        <a
          href="https://alumni.turing.io/sites/default/files/resumes/FE%202021%20Resume.pdf"
          alt="demaceos-resume"
        >
          <img className="social" src="https://img.icons8.com/carbon-copy/100/000000/resume.png" />
          {/* <img
            className="social"
            src="https://static.thenounproject.com/png/543772-200.png"
          /> */}
          {/* <i className="social far fa-file"></i> */}
        </a>
      </div>
    </div>
  );
}
