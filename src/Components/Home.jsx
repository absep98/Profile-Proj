import React from 'react'

function Home() {
  return (
    <div className="font-poppins min-h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8 mt-16 bg-gradient-to-b from-white to-blue-50 ">
      <div className="max-w-4xl w-full space-y-8 p-4 sm:p-8 md:p-12 lg:p-16 relative">
        {/* Decorative elements */}
        <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -z-10 top-0 left-0 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        
        <p className="text-xl sm:text-2xl font-semibold text-blue-700 tracking-wide transform hover:scale-105 transition-transform duration-300 cursor-default">
          Hi, My name is
        </p>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold 
                       bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600
                       hover:from-indigo-600 hover:to-blue-600 transition-all duration-500
                       animate-fade-in-down">
          Abhishek Sharma
        </h1>
        
        <h2 className="text-xl sm:text-2xl font-bold relative inline-block
                       before:content-[''] before:absolute before:w-full before:scale-x-0 
                       before:h-1 before:bottom-0 before:left-0 before:bg-blue-500 
                       before:origin-right before:transition-transform before:duration-300
                       hover:before:scale-x-100 hover:before:origin-left">
          Building things for fun and learning
        </h2>
        
        <h3 className="text-base sm:text-lg text-gray-700 max-w-3xl leading-relaxed
                       transform hover:scale-105 transition-all duration-300
                       border-l-4 border-blue-500 pl-4 backdrop-blur-sm">
          "I'm a software engineer deeply passionate about crafting exceptional digital experiences. 
          Currently in a dynamic learning phase, I'm exploring various aspects of development, 
          with a particular interest in backend technologies. Eager to absorb new knowledge and 
          grow with every project."
        </h3>

        {/* Floating elements */}
        <div className="absolute -z-10 right-10 bottom-10 animate-bounce-slow opacity-20">
          <div className="w-16 h-16 border-4 border-blue-500 rounded-full"></div>
        </div>
        <div className="absolute -z-10 left-10 top-10 animate-spin-slow opacity-20">
          <div className="w-12 h-12 border-4 border-indigo-500 rotate-45"></div>
        </div>
      </div>
    </div>
  )
}

export default Home