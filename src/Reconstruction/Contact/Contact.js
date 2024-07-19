import "./Contact.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <section className="contact-container" id="contact-jump">
      <div className="contact-title-container">
        <h2 id="contact">Contact</h2>
        <h3 id="contact-desc">Let's work together.</h3>
      </div>
      <div className="contact-info-container">
        <Link
          to="https://www.linkedin.com/in/demaceo/"
          className="contact-link"
        >
          <FontAwesomeIcon id="linkedIn-icon" icon={faLinkedinIn} />
          <span className="option-text">Chat on LinkedIn</span>
        </Link>
      </div>
    </section>
  );
}
