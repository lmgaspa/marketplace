import React from 'react';
import '../CssPagesFooter/Contact.css';

function Contact () {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <p className="contact-description">
        Have questions or inquiries? Reach out to us using the contact information below or fill out the form.
      </p>
      <div className="contact-info">
        <p>Email: info@xyzcompany.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Main Street, Cityville, State, 12345</p>
      </div>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4"></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
