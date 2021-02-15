import React from "react";
import "./aboutMe.css";

export default function AboutMe() {
  return (
    <div className="about">
      <div>
        <h2 id="my-name">Demaceo Vincent Howard</h2>
        <h4 id="title">Front End Engineer // Software Developer</h4>
      </div>
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
          // href="https://alumni.turing.io/alumni/demaceo-vincent"
          alt="demaceos-resume"
          // href="demaceos.pdf"
          // download
        >
          {/* <img className="social" src="https://img.icons8.com/carbon-copy/100/000000/resume.png" /> */}
          <i className="far fa-file-alt" />
        </a>
      </div>
    </div>
  );
}
