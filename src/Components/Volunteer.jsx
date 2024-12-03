import React from 'react'
import { FaArrowAltCircleUp, FaHandsHelping } from "react-icons/fa"
import { useTheme } from '../Components/Context/ThemeContext';

const Volunteer = () => {
  const { theme } = useTheme();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative
      ${theme === 'light' 
        ? 'bg-gradient-to-b from-blue-50 to-white' 
        : 'bg-gradient-to-b from-gray-900 to-gray-800'}`}>
      <div className="max-w-4xl mx-auto">
        {/* Decorative elements */}
        <div className={`absolute -z-10 top-20 right-0 w-72 h-72 
          ${theme === 'light' ? 'bg-blue-100' : 'bg-gray-700'} 
          rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob`}>
        </div>
        <div className={`absolute -z-10 bottom-20 left-0 w-72 h-72 
          ${theme === 'light' ? 'bg-indigo-100' : 'bg-gray-600'} 
          rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000`}>
        </div>

        {/* Main content card */}
        <div className={`backdrop-blur-sm rounded-xl 
          transform hover:scale-[1.02] transition-all duration-300
          p-8 md:p-10 relative overflow-hidden
          ${theme === 'light' 
            ? 'bg-white bg-opacity-90 shadow-xl' 
            : 'bg-gray-800 bg-opacity-90 shadow-xl shadow-gray-900/30'}`}>
          
          {/* Header section */}
          <div className="flex items-center gap-4 mb-6">
            <FaHandsHelping className={`text-4xl animate-bounce-slow
              ${theme === 'light' ? 'text-blue-600' : 'text-blue-400'}`} />
            <h1 className={`text-3xl md:text-4xl font-bold 
              bg-clip-text text-transparent bg-gradient-to-r 
              ${theme === 'light' 
                ? 'from-blue-600 to-indigo-600' 
                : 'from-blue-400 to-indigo-400'}`}>
              Volunteering
            </h1>
          </div>

          {/* Rainbow divider */}
          <div className="relative h-1 w-full my-6 rounded-full overflow-hidden">
            <div className="absolute inset-0 animate-gradient-x"
                 style={{
                   background: 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)',
                   opacity: theme === 'light' ? '1' : '0.7'
                 }}>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className={`text-lg md:text-xl leading-relaxed 
              transform hover:scale-105 transition-all duration-300
              border-l-4 pl-4 backdrop-blur-sm
              ${theme === 'light' 
                ? 'text-gray-700 border-blue-500' 
                : 'text-gray-300 border-blue-400'}`}>
              I've been volunteering on a project aimed at revolutionizing education technology. 
              Using React.js and Tailwind CSS, we're crafting dynamic and intuitive interfaces 
              for an enhanced learning experience. It's been rewarding to apply my skills to such 
              a meaningful cause and collaborate with a dedicated team. I'm excited to continue 
              contributing to the project's goal of creating a more engaging educational environment.
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-3 mt-6">
              {['React.js', 'Tailwind CSS', 'Education Tech'].map((tech, index) => (
                <span 
                  key={index}
                  className={`px-3 py-1 text-sm font-mono 
                    transform hover:scale-110 transition-transform duration-200
                    ${theme === 'light'
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-blue-400 bg-gray-700'} 
                    rounded-full`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        <button 
          onClick={scrollTop}
          className={`fixed bottom-8 right-8 p-3 rounded-full 
            shadow-lg transform hover:scale-110 transition-all duration-300
            focus:outline-none focus:ring-2 group
            ${theme === 'light'
              ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500' 
              : 'bg-blue-500 text-gray-100 hover:bg-blue-600 focus:ring-blue-400'}`}
          aria-label="Scroll to top"
        >
          <FaArrowAltCircleUp 
            size="24" 
            className="transform group-hover:-translate-y-1 transition-transform duration-300" 
          />
        </button>
      </div>
    </div>
  )
}

export default Volunteer