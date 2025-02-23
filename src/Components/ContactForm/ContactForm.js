import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

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
        <form className="email-form" onSubmit={sendEmail}>
          <h3>Email Me</h3>
          <label>Name</label>
          <input
            type="text"
            name="from_name"
            id="from_name"
            placeholder="Enter your name"
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="reply_to"
            id="reply_to"
            placeholder="Enter your email"
            required
          />
          <label>Message</label>
          <textarea name="message" placeholder="Enter your message" required />
          <input
            id="submit-button"
            type="submit"
            value="Send"
            disabled={isSubmitting}
          />
        </form>
        {stateMessage && <p id="form-sent-status">{stateMessage}</p>}
      </div>
    </div>
  );
};
export default ContactForm;
