import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

const ContactForm = ({ onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const nameInputRef = useRef();

  useEffect(() => {
    nameInputRef.current?.focus();
  }, []);

  const showMessage = (message) => {
    setStateMessage(message);
    setTimeout(() => setStateMessage(null), 5000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(() => showMessage("Message sent!"))
      .catch(() => showMessage("Something went wrong, please try again later"))
      .finally(() => {
        setIsSubmitting(false);
        e.target.reset();
      });
  };

  return (
    <div className="contact-form-container">
      <div className="email-form-wrapper">
        <button
          className="close-modal-btn"
          onClick={onClose}
          aria-label="Close Contact Form"
        >
          &times;
        </button>

        <form className="email-form" onSubmit={sendEmail}>
          <h3>Email Me</h3>

          <label htmlFor="from_name">Name</label>
          <input
            ref={nameInputRef}
            type="text"
            name="from_name"
            id="from_name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="reply_to">Email</label>
          <input
            type="email"
            name="reply_to"
            id="reply_to"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Enter your message"
            required
          />

          <input
            id="submit-button"
            type="submit"
            value={isSubmitting ? "Sending..." : "Send"}
            disabled={isSubmitting}
            aria-disabled={isSubmitting}
          />
        </form>

        <p
          id="form-sent-status"
          aria-live="polite"
          role="status"
          style={{ minHeight: "1.5rem" }}
        >
          {stateMessage}
        </p>
      </div>
    </div>
  );
};

export default ContactForm;