import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome CSS
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <h5>Contact Us</h5>
      <div className="social-icons">
        <a href="https://www.facebook.com" className="text-white me-4" aria-label="Facebook">
          <i className="fab fa-facebook fa-2x"></i>
        </a>
        <a href="https://www.twitter.com" className="text-white me-4" aria-label="Twitter">
          <i className="fab fa-twitter fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com" className="text-white me-4" aria-label="LinkedIn">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://www.github.com" className="text-white" aria-label="GitHub">
          <i className="fab fa-github fa-2x"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;