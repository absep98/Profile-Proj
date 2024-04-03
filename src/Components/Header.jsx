import React, { useState } from 'react';
import { IoMenuSharp } from "react-icons/io5";

const Header = () => {
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
                            <a href="/home" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Home</a>
                            <a href="/about" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">About</a>
                            <a href="/contact" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Contact</a>
                        </nav>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header;