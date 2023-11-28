import React from 'react';
import '../CssPagesFooter/Company.css'

function Company () {
  return (
    <div className="company-container">
      <h1 className="company-name">Welcome to SHOOPER</h1>
      <p className="company-description">
        At SHOOPER Company, we are committed to delivering excellence in every aspect of our business.
        Our mission is to [insert mission statement here], and our vision is to [insert vision statement here].
      </p>
      <h2 className="company-values-heading">Our Values</h2>
      <ul className="company-values-list">
        <li>Customer Satisfaction: We prioritize the needs and satisfaction of our customers.</li>
        <li>Innovation: We embrace creativity and strive for continuous improvement.</li>
        <li>Integrity: We conduct our business with honesty, transparency, and ethical standards.</li>
      </ul>
      <p className="company-thank-you">
        Thank you for choosing SHOOPER Company. We look forward to serving you and building a lasting relationship.
      </p>
    </div>
  );
};

export default Company;
