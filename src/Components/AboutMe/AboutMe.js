import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <section className="aboutme-container">
      <div className="about">
        <div className="basic-info">
          <h2 id="my-name">Demaceo Vincent Howard</h2>
          <h3 id="title">Front End Engineer // Software Developer</h3>
        </div>
        <div id="socials">
          <a href="https://www.linkedin.com/in/demaceo/" alt="linked-in">
            <i className="social fab fa-linkedin"></i>
          </a>

          <a href="https://www.instagram.com/demaceovincent/" alt="instagram">
            <i className="social fab fa-instagram"></i>
          </a>
          <a href="https://github.com/demaceo" alt="github">
            <i className="social fab fa-github"></i>
          </a>
          <a
            href="https://turing-terminal-production.s3.us-east-2.amazonaws.com/lw1r9fg9qwabdksuwjkj069zy508?response-content-disposition=inline%3B%20filename%3D%22Resume_Demaceo_2023.pdf%22%3B%20filename%2A%3DUTF-8%27%27Resume_Demaceo_2023.pdf&response-content-type=application%2Fpdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3LJHOIGWOPTBZWP6%2F20230712%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230712T185319Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=7f9dcf0a0e5efc79f422e3ce929948127303fc05350025fbc6d6e4ce41ce5c99"
            alt="demaceos-resume"
          >
            <i className="far fa-file-alt" />
          </a>
        </div>
      </div>
    </section>
  );
}
