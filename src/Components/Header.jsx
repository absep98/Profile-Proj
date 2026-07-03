import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useTheme } from '../Components/Context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { to: 'about', label: 'About', number: '01' },
  { to: 'experience', label: 'Experience', number: '02' },
  { to: 'projects', label: 'Projects', number: '03' },
  { to: 'skills', label: 'Skills', number: '04' },
  { to: 'volunteer', label: 'Volunteer', number: '05' },
  { to: 'contact', label: 'Contact', number: '06' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer font-display text-xl font-semibold tracking-tight"
        >
          Abhishek<span className="text-accent">.</span>
        </ScrollLink>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-72}
              activeClass="!text-accent"
              className="group cursor-pointer text-sm font-medium text-soft transition-colors hover:text-ink"
            >
              <span className="mr-1 font-mono text-xs text-accent opacity-0 transition-opacity group-hover:opacity-100">
                {item.number}
              </span>
              {item.label}
            </ScrollLink>
          ))}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="ml-2 rounded-full border border-line p-2 text-soft transition-colors hover:border-accent hover:text-accent"
          >
            {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full border border-line p-2 text-soft"
          >
            {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="rounded-full border border-line p-2 text-soft"
          >
            {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="border-t border-line bg-paper md:hidden">
          <div className="flex flex-col px-4 py-2">
            {navItems.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-72}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer border-b border-line py-3 text-sm font-medium text-soft last:border-b-0 hover:text-accent"
              >
                <span className="mr-2 font-mono text-xs text-accent">{item.number}</span>
                {item.label}
              </ScrollLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
