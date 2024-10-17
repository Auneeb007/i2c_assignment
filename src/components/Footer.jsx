import React, { useState } from "react";
import "../assets/Footer.css";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="footer">
      <div className="top-line"></div>
      <div className="footer-content">
        <div className="logo">
          <img
            className="logo-img-footer"
            src="images/i2c-logo.svg"
            alt="Logo"
          />
        </div>
        <nav>
          <ul className={`footer-nav-links ${isOpen ? "open" : ""}`}>
            <li>
              <a href="#about">FAQs</a>
            </li>
            <li>
              <a href="#registration">Privacy Policy</a>
            </li>
            <li>
              <a href="#careers">Others</a>
            </li>
          </ul>

          <button
            className={`menu-btn-footer ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="hamburger-menu"></div>
            <div className="hamburger-menu"></div>
            <div className="hamburger-menu"></div>
          </button>
        </nav>
        <button className="cta-btn-footer">Contact us</button>
      </div>
      <p className="footer-copyright">
        Copyright © 2024 i2c inc. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
