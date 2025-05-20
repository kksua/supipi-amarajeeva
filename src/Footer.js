import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
        <p className="footer-tagline">WRITING STORIES IN SYNTAX</p>
      <div className="icon-wrapper">
        <a href="https://github.com/kksua" target="_blank" rel="noopener noreferrer" className="icon-circle">
          <FaGithub />
        </a>
        <a href="mailto:supipiamarajeeva@gmail.com" className="icon-circle">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/supipi-amarajeeva/" target="_blank" rel="noopener noreferrer" className="icon-circle">
          <FaLinkedin />
        </a>
      </div>
      <p>Designed & Built by Supipi © 2025</p>
    </footer>
  );
};

export default Footer;
