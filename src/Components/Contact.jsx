import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
const Contact = () => {
    return (
        <div className="w-full flex flex-col items-center"> {/* This is the outer container */}
            <h1 className="text-4xl mt-8 mb-14">Let's Talk</h1>
            <p className="max-w-2xl font-thin text-2xl">I'm on the lookout for exciting new opportunities and my inbox is eagerly waiting for your message! Whether you have a burning question or simply want to drop a friendly 'hello,' don't hesitate to reach out. I'll make sure to respond promptly and with a smile!</p>
            <button className="text-green-500 bg-transparent border border-green-500 rounded py-3 px-4 text-sm font-mono leading-none hover:bg-green-500 hover:text-white transition duration-300 ease-in-out mt-12">
                Say Hello
            </button>            <div className="flex"> {/* This is the inner container */}
                <div className="m-14">
                    <a href="https://github.com/coderstarter" target="_blank" rel="noopener noreferrer">
                        <FaGithub size="30" />
                    </a>
                    Github
                </div>
                <div className="m-14">
                    <a href="https://www.linkedin.com/in/abhishek-sharma-688566151/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size="30" />
                    </a>
                    Linkedin
                </div>
                <div className="m-14">
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <FaSquareXTwitter size="30" />
                    </a>
                    Twitter
                </div>
                <div className="m-14">
                    <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <FaInstagramSquare size="30" />
                    </a>
                    Instagram
                </div>
            </div>
            <span className="flex justify-end ml-[1000px] mb-4">
                <FaArrowAltCircleUp size="30" />
            </span>
        </div>
    )
}

export default Contact