import React from 'react'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const Projects = () => {
  const projects = [
    {
      title: "Expense Tracker Web App",
      description: "Developed a comprehensive MERN (MongoDB, Express.js, React.js, Node.js) full-stack expense tracker web application. This project enables users to seamlessly input daily expenses and offers tracking functionalities based on weekly and monthly metrics. Leveraging React for frontend development, MongoDB for database storage, and Node.js for backend logic, the application provides an intuitive user interface for data entry and management.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      github: "https://github.com/yourusername/expense-tracker",
      live: "https://your-expense-tracker.com",
    },
    {
      title: "Weather Web App",
      description: "WeatherApp is a modern web application built using Redux, Redux Toolkit, Axios, and Thunks to provide users with detailed weather information. With a focus on accuracy and user experience, WeatherApp offers real-time weather data, intuitive navigation, and a visually appealing interface. Users can easily search for weather information for any location and access descriptive weather data, including temperature, humidity, wind speed, and more.",
      tech: ["Redux", "Redux Toolkit", "Axios", "Thunks"],
      github: "https://github.com/yourusername/weather-app",
      live: "https://your-weather-app.com",
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center 
                       bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 
                       animate-fade-in-down">
          Things I've built for fun and learning
        </h1>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-xl shadow-xl p-8 
                         transform hover:scale-[1.02] transition-all duration-300
                         hover:shadow-2xl"
            >
              {/* Decorative background elements */}
              <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-blue-100 
                            rounded-full mix-blend-multiply filter blur-xl opacity-70 
                            animate-blob animation-delay-2000"></div>

              <div className="relative z-10">
                {/* Project Title */}
                <h2 className="text-2xl md:text-3xl font-bold mb-4 
                              text-gray-800 group-hover:text-blue-600 
                              transition-colors duration-300">
                  {project.title}
                </h2>

                {/* Project Description */}
                <div className="backdrop-blur-sm bg-white/50 rounded-lg p-6 mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-sm font-mono text-blue-600 
                                bg-blue-50 rounded-full
                                transform hover:scale-110 transition-transform duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 
                              transition-colors duration-300"
                  >
                    <FaGithub className="text-xl" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 
                              transition-colors duration-300"
                  >
                    <FaExternalLinkAlt className="text-lg" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects