import MyImage from '../Data/image.jpg';
import Pic from '../Data/pic.jpg';
import { IoMdCloudDownload } from "react-icons/io";
import { useState } from 'react';
import { useTheme } from '../Components/Context/ThemeContext'; // Import the useTheme hook

const MainCont = () => {
  const [counter, setCounter] = useState(0);
  const { theme } = useTheme(); // Use the theme context

  const incrementer = () => {
    setCounter(counter + 1);
  }

  return (
    <div className={`min-h-screen py-16 px-4 sm:px-6 lg:px-8 ${theme === 'light' ? 'bg-gradient-to-b from-blue-200 to-white' : 'bg-gradient-to-b from-gray-800 to-gray-900'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 relative">
          {/* Background decorative elements */}
          <div className={`absolute -z-10 top-20 left-0 w-72 h-72 ${theme === 'light' ? 'bg-blue-100' : 'bg-gray-700'} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob`}></div>
          <div className={`absolute -z-10 bottom-0 right-0 w-72 h-72 ${theme === 'light' ? 'bg-indigo-100' : 'bg-gray-600'} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000`}></div>

          {/* Image Section */}
          <div className="lg:w-1/3 flex justify-center lg:justify-start relative group">
            <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] transform hover:scale-105 transition-all duration-500">
              <img 
                src={MyImage} 
                alt="Profile" 
                className="w-full h-full object-cover rounded-2xl shadow-xl absolute inset-0 group-hover:opacity-0 transition-opacity duration-500" 
              />
              <img 
                src={Pic} 
                alt="Alternative Profile" 
                className="w-full h-full object-cover rounded-2xl shadow-xl absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-2/3 space-y-8">
            {/* About Me Section */}
            <div className="space-y-4">
              <h3 className={`text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${theme === 'light' ? 'from-blue-600 to-indigo-600' : 'from-gray-400 to-gray-500'} animate-fade-in-down`}>
                About Me
              </h3>
              <p className={`text-lg sm:text-xl ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'} leading-relaxed transform hover:scale-105 transition-all duration-300 border-l-4 ${theme === 'light' ? 'border-blue-500' : 'border-gray-500'} pl-4 backdrop-blur-sm`}>
                Experienced software engineer with a robust proficiency in Python, C++, Java, and JavaScript. 
                Graduated with a degree in Information Technology from PSG College of Technology. 
                Passionate about web development, Problem solving, AI, and enthusiastic about exploring 
                new programming languages. Actively seeking opportunities to leverage my skills and 
                contribute to impactful projects.
              </p>
            </div>

            {/* Internship Section */}
            <div className="flex flex-col items-center sm:items-start space-y-2 transform hover:scale-105 transition-all duration-300">
              <h4 className={`text-3xl sm:text-4xl font-bold ${theme === 'light' ? 'text-blue-600' : 'text-gray-400'}`}>02</h4>
              <h2 className={`text-xl sm:text-2xl font-semibold ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                Internships Completed
              </h2>
            </div>

            {/* Resume Section */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-4">
              <a 
                href="https://drive.google.com/file/d/1jIoSbuR9JC3SFgrXlih-y8GE2LT_H4wK/view" 
                rel="noreferrer" 
                target="_blank" 
                onClick={incrementer}
                className={`group px-6 py-3 ${theme === 'light' ? 'bg-gradient-to-r from-blue-500 to-indigo-500' : 'bg-gradient-to-r from-gray-700 to-gray-600'} text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2`}
              >
                <span>Download Resume</span>
                <IoMdCloudDownload className="text-xl group-hover:animate-bounce" />
              </a>
              <p className={`text-lg font-semibold ${theme === 'light' ? 'text-blue-600' : 'text-gray-400'}`}>
                {counter}+ Downloads
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainCont;