import React from 'react';
import { FaArrowAltCircleUp } from "react-icons/fa";

const Footer = () => {
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        <div className="h-[150px] w-full items-center bg-slate-500 px-4">
            <div className="name p-4">
                Abhishek Sharma
            </div>
            <div className="copy">
                Copyright
            </div>
            <div className=""></div>
            <a onClick={scrollTop}>
                <div className="flex justify-end">
                    <FaArrowAltCircleUp size="30" />
                </div>
            </a>

        </div >
    )
}

export default Footer