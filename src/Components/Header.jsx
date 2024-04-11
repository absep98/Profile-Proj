// Header.jsx
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../Data/logo.png';

const Header = () => {
  return (
    <div style={{ 
        position: 'fixed', 
        top: 0, 
        width: '100%', 
        backgroundColor: '#bad9f7', 
        zIndex: 1, 
        display: 'flex', 
        justifyContent: 'right', 
        padding: '22px',
        marginBottom: '10px',
      }}>
        <img src={logo} alt="Logo" style={{ position: 'fixed', top: 10, left: 10, width: '50px' }} />
        <ScrollLink style={{ margin: '0 10px' }} to="/" smooth={true} offset={-50}>About me</ScrollLink>
        <ScrollLink style={{ margin: '0 10px' }} to="experience" smooth={true} offset={-50}>Experience</ScrollLink>
        <ScrollLink style={{ margin: '0 10px' }} to="contact" smooth={true} offset={-130}>Contacts</ScrollLink>
        <ScrollLink style={{ margin: '0 10px' }} to="projects" smooth={true} offset={-50}>Projects</ScrollLink>
      </div>
  );
}

export default Header;