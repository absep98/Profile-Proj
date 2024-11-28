import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
const Contact = () => {
    const socialLinks = [
        {
            name: 'Github',
            icon: <FaGithub size="30" />,
            url: 'https://github.com/coderstarter',
            color: 'hover:text-gray-800'
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedin size="30" />,
            url: 'https://www.linkedin.com/in/abhishek-sharma-688566151/',
            color: 'hover:text-blue-600'
        },
        {
            name: 'Twitter',
            icon: <FaSquareXTwitter size="30" />,
            url: 'https://twitter.com/yourusername',
            color: 'hover:text-blue-400'
        },
        {
            name: 'Instagram',
            icon: <FaInstagramSquare size="30" />,
            url: 'https://www.instagram.com/yourusername',
            color: 'hover:text-pink-600'
        }
    ];

    return (
        <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-4xl mx-auto flex flex-col items-center relative">
                {/* Decorative elements */}
                <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -z-10 bottom-0 left-0 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

                {/* Main content */}
                <h1 className="text-4xl md:text-5xl font-bold mb-12 
                             bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 
                             animate-fade-in-down">
                    Let's Talk
                </h1>

                <p className="text-lg md:text-2xl text-gray-700 text-center mb-12 
                             leading-relaxed transform hover:scale-105 transition-all duration-300
                             border-l-4 border-blue-500 pl-4 backdrop-blur-sm">
                    I'm on the lookout for exciting new opportunities and my inbox is eagerly waiting 
                    for your message! Whether you have a burning question or simply want to drop a 
                    friendly 'hello,' don't hesitate to reach out. I'll make sure to respond promptly 
                    and with a smile!
                </p>

                {/* Email button */}
                <a 
                    href="mailto:absep98@gmail.com" 
                    className="group relative inline-flex items-center justify-center px-8 py-4 
                             text-lg font-medium text-blue-600 border-2 border-blue-600 rounded-full 
                             overflow-hidden transition-all duration-300 ease-in-out
                             hover:text-white transform hover:scale-105 mb-16"
                >
                    <span className="absolute inset-0 w-full h-full bg-blue-600 transform scale-x-0 
                                   group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left">
                    </span>
                    <span className="relative">Say Hello</span>
                </a>

                {/* Social links */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    {socialLinks.map((social, index) => (
                        <a 
                            key={index}
                            href={social.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`group flex flex-col items-center gap-2 
                                      transform hover:scale-110 transition-all duration-300 ${social.color}`}
                        >
                            <span className="transform group-hover:-translate-y-1 transition-transform duration-300">
                                {social.icon}
                            </span>
                            <span className="text-sm font-medium">{social.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Contact