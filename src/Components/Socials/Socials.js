import React from "react";
import "./socials.css";

export default function Socials() {
  return (
    <div>
      <img
        className="me"
        src="https://avatars2.githubusercontent.com/u/62954974?s=400&u=b246587c21877b7fe4a4972e89ec98677d5c29d6&v=4"
        alt=""
      />

      <div className="social">
        <a href="https://twitter.com/bphillips201">
          <i id="instagram" className="icon-instagram"></i>
        </a>
        <i id="github" className="icon-github"></i>
        <i id="linkedin" className="icon-linkedin-sign"></i>
        <i id="mail" className="icon-envelope"></i>
      </div>
    </div>
  );
}
