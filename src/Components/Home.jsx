import React from 'react';
import { useTheme } from '../Components/Context/ThemeContext';

function Home() {
  const { theme } = useTheme();

  return (
    <div className={`font-poppins min-h-[calc(100vh-8rem)] flex justify-center items-center px-4 sm:px-6 lg:px-8 mt-8 ${theme === 'light' ? 'bg-gradient-to-b from-white to-blue-100' : 'bg-gradient-to-b from-gray-900 to-gray-800'}`}>
      <div className="max-w-4xl w-full space-y-8 p-4 sm:p-8 md:p-12 lg:p-16 relative">
        {/* Decorative elements */}
        <div className={`absolute -z-10 top-0 right-0 w-72 h-72 ${theme === 'light' ? 'bg-blue-100' : 'bg-gray-700'} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob`}></div>
        <div className={`absolute -z-10 top-0 left-0 w-72 h-72 ${theme === 'light' ? 'bg-indigo-100' : 'bg-gray-600'} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000`}></div>
        
        <p className={`text-xl sm:text-2xl font-semibold ${theme === 'light' ? 'text-blue-700' : 'text-gray-300'} tracking-wide transform hover:scale-105 transition-transform duration-300 cursor-default`}>
          Hi, My name is
        </p>
        
        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${theme === 'light' ? 'from-blue-600 to-indigo-600' : 'from-gray-400 to-gray-500'} hover:from-indigo-600 hover:to-blue-600 transition-all duration-500 animate-fade-in-down`}>
          Abhishek Sharma
        </h1>
        
        <h2 className={`text-xl sm:text-2xl font-bold relative inline-block before:content-[''] before:absolute before:w-full before:scale-x-0 before:h-1 before:bottom-0 before:left-0 ${theme === 'light' ? 'before:bg-blue-500' : 'before:bg-gray-500'} before:origin-right before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-left`}>
          Building things for fun and learning
        </h2>
        
        <h3 className={`text-base sm:text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'} max-w-3xl leading-relaxed transform hover:scale-105 transition-all duration-300 border-l-4 ${theme === 'light' ? 'border-blue-500' : 'border-gray-500'} pl-4 backdrop-blur-sm`}>
          "I'm a software engineer deeply passionate about crafting exceptional digital experiences. 
          Currently in a dynamic learning phase, I'm exploring various aspects of development, 
          with a particular interest in backend technologies. Eager to absorb new knowledge and 
          grow with every project."
        </h3>

        {/* Floating elements */}
        <div className={`absolute -z-10 right-10 bottom-10 animate-bounce-slow opacity-20 ${theme === 'light' ? 'border-blue-500' : 'border-gray-500'}`}>
          <div className="w-16 h-16 border-4 rounded-full"></div>
        </div>
        <div className={`absolute -z-10 left-10 top-10 animate-spin-slow opacity-20 ${theme === 'light' ? 'border-indigo-500' : 'border-gray-500'}`}>
          <div className="w-12 h-12 border-4 rotate-45"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;