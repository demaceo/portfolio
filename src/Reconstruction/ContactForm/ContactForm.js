import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage("Something went wrong, please try again later");
          console.log(
            "Something went wrong, please try again later",
            error.text
          );
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears form after sending the email
    e.target.reset();
  };

  return (
    <div className="contact-form-container">
      <div className="email-form-wrapper">
        <form className="email-form" onSubmit={sendEmail}>
          <h3>Email Me</h3>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
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
