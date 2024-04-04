import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenuSharp } from "react-icons/io5";

function HeaderComponent() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div className="bg-cyan-100 h-16 w-full flex justify-end">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <IoMenuSharp size="2em" className="mr-8 mt-5 "/>  {/* replace with your actual icon */}
          {isHovered && (
            <nav className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
              <Link to="/home" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Home</Link>
              <Link to="/about" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">About</Link>
              <Link to="/contact" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Contact</Link>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;