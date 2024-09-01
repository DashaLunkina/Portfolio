import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import './Footer.css'; 


const Footer = () => {
  return (
    <footer className="footer">
      <div className="icon-container">
        <a href="#" aria-label="Facebook" className="icon-link">
          <FaFacebook size={24} />
        </a>
        <a href="#" aria-label="Twitter" className="icon-link">
          <FaTwitter size={24} />
        </a>
        <a href="#" aria-label="Instagram" className="icon-link">
          <FaInstagram size={24} />
        </a>
        <a href="#" aria-label="GitHub" className="icon-link">
          <FaGithub size={24} />
        </a>
      </div>
      <p className="footer-text">&copy; 2024 Your Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
