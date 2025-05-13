import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png'; 
import PatternFooter from '../assets/PatternFooter.png';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

// Конфигурация колонок
const footerSections = [
  {
    title: "Company",
    links: ["Home", "Order", "FAQ", "Contact"],
  },
  {
    title: "Template",
    links: ["Style Guide", "Changelog", "Licence", "Webflow University"],
  },
  {
    title: "Flowbase",
    links: ["More Cloneables"],
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="pattern">
          <img src={PatternFooter} alt="pattern" />
        </div>

        <div className="columns">
          <div className="logo-column">
            <img src={logo} alt="Logo" className="footer-logo" />
            <p className="footer-description">
              Takeaway & Delivery template <br /> for small – medium businesses.
            </p>
          </div>

          <div className="footer-columns">
            {footerSections.map((section, index) => (
              <div className="footer-column" key={index}>
                <h4>{section.title}</h4>
                <ul>
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <button>{link}</button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Built by <span className="link">Flowbase</span> · Powered by <span className="link">Webflow</span>
        </p>
        <div className="footer-socials">
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
