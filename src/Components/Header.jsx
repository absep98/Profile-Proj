import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../Data/logo.png';
import { useTheme } from '../Components/Context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';


const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const { theme, toggleTheme } = useTheme();
  console.log(theme);
  
  return (
    <header className='bg-gradient-to-r from-blue-500 to-indigo-900 text-white p-4'>
      <div className="container mx-auto flex justify-between items-center">
        <div className='flex items-center gap-3'>
          <img src={logo} alt="Logo" className='w-10 h-10' />
          <h1 className="text-white text-2xl">My Portfolio</h1>
          <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-blue-800" />}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-4">
          <ScrollLink className="scroll-link cursor-pointer" to="/" smooth={true} offset={-10}>About me</ScrollLink>
          <ScrollLink className="scroll-link cursor-pointer" to="experience" smooth={true} offset={-50}>Experience</ScrollLink>
          <ScrollLink className="scroll-link cursor-pointer" to="contact" smooth={true} offset={-130}>Contacts</ScrollLink>
          <ScrollLink className="scroll-link cursor-pointer" to="projects" smooth={true} offset={-50}>Projects</ScrollLink>
          <ScrollLink className="scroll-link cursor-pointer" to="skills" smooth={true} offset={-50}>Skills</ScrollLink>
          <ScrollLink className="Scroll-link cursor-pointer" to="volunteer" smooth={true} offset={-50}>Volunteer</ScrollLink>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            className="text-white text-2xl focus:outline-none"
            onClick={() => setShowLinks(!showLinks)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {showLinks && (
        <div className="md:hidden absolute right-0 mt-2 bg-gradient-to-r from-blue-500 to-indigo-900 rounded-lg shadow-lg">
          <div className="flex flex-col items-start py-2 px-4 min-w-[150px]">
            <ScrollLink 
              className="scroll-link cursor-pointer hover:bg-blue-600 w-full py-2 px-4 rounded" 
              to="/" 
              smooth={true} 
              offset={-10}
            >
              About me
            </ScrollLink>
            <ScrollLink 
              className="scroll-link cursor-pointer hover:bg-blue-600 w-full py-2 px-4 rounded" 
              to="experience" 
              smooth={true} 
              offset={-50}
            >
              Experience
            </ScrollLink>
            <ScrollLink 
              className="scroll-link cursor-pointer hover:bg-blue-600 w-full py-2 px-4 rounded" 
              to="contact" 
              smooth={true} 
              offset={-130}
            >
              Contacts
            </ScrollLink>
            <ScrollLink 
              className="scroll-link cursor-pointer hover:bg-blue-600 w-full py-2 px-4 rounded" 
              to="projects" 
              smooth={true} 
              offset={-50}
            >
              Projects
            </ScrollLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;