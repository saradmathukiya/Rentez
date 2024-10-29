import React from "react";
import ContactUsForm from "./ContactUsForm";

const ContactFormSection = () => {
  return (
    <div className="get-in-touch">
      <h1 className="title">Get in Touch</h1>
      <p className="description">
        We'd love to hear from you. Please fill out this form.
      </p>
      <div className="form">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactFormSection;