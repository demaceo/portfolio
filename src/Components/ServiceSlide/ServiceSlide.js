import "./ServiceSlide.css";
import { motion } from "framer-motion";
import services from "../../utilities/servicesData";
import { useState, useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";
import logoFelt from "../../assets/icons/logo-felt.png";

export default function ServiceSlide() {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    if (showContactForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showContactForm]);

  const handleCardToggle = (index) => {
    setFlippedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <motion.section
      className="services-page"
      id="services-slide"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="service-main-title-container">
        <h2 className="service-main-title">Service Spectrum</h2>
      </div>
      <div className="service-boxes-container">
        {services.map(({ id, title, description, icon }, index) => (
          <div
            className={`service-box ${
              flippedIndex === index ? "is-flipped" : ""
            }`}
            id={id}
            key={id}
            onMouseEnter={() => handleCardToggle(index)}
            onMouseLeave={() => handleCardToggle(index)}
          >
            <div className="card-inner">
              <div className="card-front">
                <img src={icon} alt={title} className="illustration" />
                <h3 className="service-title">{title}</h3>
              </div>
              <div className="card-back">
                <h3 className="service-title">{title}</h3>
                <p className="service-description">{description}</p>
              </div>
            </div>
          </div>
        ))}
        <div
          className="service-box contact-logo-card"
          onClick={() => setShowContactForm(true)}
        >
          <div className="card-inner no-flip">
            <div className="card-front" id="serviceLogo">
              <img src={logoFelt} alt="Contact Logo" className="illustration" />
              <h3 className="service-title">Contact</h3>
            </div>
          </div>
        </div>
      </div>
      {showContactForm && (
        <div
          className="contact-modal-overlay"
          onClick={() => setShowContactForm(false)}
        >
          <div
            className="contact-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <ContactForm onClose={() => setShowContactForm(false)} />
          </div>
        </div>
      )}
    </motion.section>
  );
}
