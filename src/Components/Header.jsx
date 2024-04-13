import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../Data/logo.png';
import './Header.css';

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className='header'>
      <img src={logo} alt="Logo" />
      <div className={`nav-links ${showLinks ? 'show' : ''}`}>
        <ScrollLink className="scroll-link" to="/" smooth={true} offset={-10}>About me</ScrollLink>
        <ScrollLink className="scroll-link" to="experience" smooth={true} offset={-50}>Experience</ScrollLink>
        <ScrollLink className="scroll-link" to="contact" smooth={true} offset={-130}>Contacts</ScrollLink>
        <ScrollLink className="scroll-link" to="projects" smooth={true} offset={-50}>Projects</ScrollLink>
      </div>
      <button className="menu" onClick={toggleLinks}>Menu</button>
    </div>
  );
};

export default Header;