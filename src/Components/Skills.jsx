import React from 'react'
import { FaReact, FaJava, FaHtml5, FaPython, FaGitAlt } from "react-icons/fa";
import { TbBrandCpp, TbSql } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { SiRobotframework } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: 'React', icon: FaReact, color: 'hover:text-[#61DAFB]' },
    { name: 'Java', icon: FaJava, color: 'hover:text-[#007396]' },
    { name: 'C++', icon: TbBrandCpp, color: 'hover:text-[#00599C]' },
    { name: 'HTML', icon: FaHtml5, color: 'hover:text-[#E34F26]' },
    { name: 'Python', icon: FaPython, color: 'hover:text-[#3776AB]' },
    { name: 'JavaScript', icon: IoLogoJavascript, color: 'hover:text-[#F7DF1E]' },
    { name: 'Git', icon: FaGitAlt, color: 'hover:text-[#F05032]' },
    { name: 'Robot Framework', icon: SiRobotframework, color: 'hover:text-[#00B0D8]' },
    { name: 'SQL', icon: TbSql, color: 'hover:text-[#4479A1]' }
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-bold 
                       bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 
                       animate-fade-in-down">
            Skills & Technologies
          </h2>
          
          {/* Decorative elements */}
          <div className="absolute -z-10 top-0 right-1/4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -z-10 top-0 left-1/4 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 p-4">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-xl shadow-lg p-6
                         transform hover:scale-110 transition-all duration-300
                         hover:shadow-xl backdrop-blur-sm bg-opacity-80"
            >
              <div className="flex flex-col items-center space-y-4">
                <skill.icon 
                  className={`text-4xl md:text-5xl text-gray-700 transition-colors duration-300 ${skill.color}
                             group-hover:animate-bounce-slow`}
                />
                <span className="text-sm md:text-base font-medium text-gray-800 group-hover:text-blue-600
                                transition-colors duration-300">
                  {skill.name}
                </span>
              </div>

              {/* Hover card effect */}
              <div className="absolute inset-0 bg-white rounded-xl opacity-0 group-hover:opacity-10 
                            transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Optional: Add a proficiency indicator */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 italic animate-pulse">
            Constantly learning and improving...
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skills