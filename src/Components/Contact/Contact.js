import "./Contact.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import ContactForm from "../ContactForm/ContactForm.js";

export default function Contact() {
  const contentStyle = { background: "transparent", border: "none", boxShadow: "none" };
  const overlayStyle = { background: "transparent" };
  const arrowStyle = { color: "#000" }; // style for an svg element
  return (
    <section className="contact-container" id="contact-jump">
      <div className="contact-title-container">
        <h2 id="contact">Contact</h2>
        <h3 id="contact-desc">Let's work together.</h3>
      </div>
      <div className="contact-info-container">
        <Popup
          trigger={
            <button className="popup-button">
              <i className="fa fa-envelope contact-icon"></i>
              <span className="option-text contact-text">Email Me</span>
            </button>
          }
          {...{
            contentStyle,
            overlayStyle,
            arrowStyle,
          }}
          position="left bottom"
        >
          <ContactForm />
        </Popup>
        <Link
          to="https://www.linkedin.com/in/demaceo/"
          className="contact-link"
        >
          <FontAwesomeIcon className="contact-icon" icon={faLinkedinIn} />
          <span className="option-text contact-text">Chat on LinkedIn</span>
        </Link>
      </div>
    </section>
  );
}
