import "./Contact.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Popup from "reactjs-popup";
import ContactForm from "../ContactForm/ContactForm.js";
import { motion } from "framer-motion"; // ✨ Added

// Move Popup styling config outside
const popupStyles = {
  contentStyle: {
    background: "transparent",
    border: "none",
    boxShadow: "none",
    padding: "0",
  },
  overlayStyle: { background: "rgba(0, 0, 0, 0.3)" }, // subtle dark overlay
  arrowStyle: { color: "#000" },
};

export default function Contact() {
  return (
    <motion.section
      className="contact-container"
      id="contact-jump"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="contact-title-container">
        <h2 id="contact">Contact</h2>
        <h3 id="contact-desc">Let's work together.</h3>
      </div>

      <div className="contact-info-container">
        <Popup
          trigger={
            <button className="popup-button">
              <i className="fa fa-envelope contact-icon"></i>
              <span className="contact-text">Email Me</span>
            </button>
          }
          {...popupStyles}
          position="left bottom"
          modal
          nested
          className="popup-content glide-in" // ✨ ADD THIS
        >
          <ContactForm />
        </Popup>

        <Link
          to="https://www.linkedin.com/in/demaceo/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-contact-link"
        >
          <FontAwesomeIcon className="contact-icon" icon={faLinkedinIn} />
          <span className="contact-text">Connect on LinkedIn</span>
        </Link>
      </div>
    </motion.section>
  );
}
