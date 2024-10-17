import React, { useState } from "react";
import "../assets/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <img className="logo-img-header" src="images/i2c-logo.svg" alt="Logo" />
      </div>
      <nav>
        <button
          className={`menu-btn-header ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="hamburger-menu"></div>
          <div className="hamburger-menu"></div>
          <div className="hamburger-menu"></div>
        </button>
        <ul className={`header-nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <a href="#about">About us</a>
          </li>
          <li>
            <a href="#registration">Registration</a>
          </li>
          <li>
            <a href="#careers">Careers</a>
          </li>
        </ul>
      </nav>
      <button className="cta-btn-header">Contact us</button>
    </header>
  );
};

export default Header;
