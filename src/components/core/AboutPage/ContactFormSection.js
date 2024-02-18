import React from "react";
import ContactUsForm from "./ContactUsForm";

const ContactFormSection = () => {
  return (
    <div class="get-in-touch">
      <h1 class="title">Get in Touch</h1>
      <p class="description">
        We'd love to hear from you. Please fill out this form.
      </p>
      <div class="form ">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactFormSection;
