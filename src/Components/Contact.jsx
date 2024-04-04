import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="w-full flex flex-col items-center"> {/* This is the outer container */}
            <h1 className="text-4xl mb-4">Let's Talk</h1> {/* Add mb-4 here to add some space between the title and the links */}
            <div className="flex"> {/* This is the inner container */}
                <div className="m-14">
                    <a href="https://github.com/codestarter" target="_blank" rel="noopener noreferrer">
                        <FaGithub size="30" />
                    </a>
                    Github
                </div>
                <div className="m-14">
                    <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
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
        </div>
    )
}

export default Contact