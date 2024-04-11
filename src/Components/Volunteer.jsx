import React from 'react'
import { FaArrowAltCircleUp } from "react-icons/fa";
const Volunteer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className='h-auto  p-10'>
      <div className="shadow-md rounded-md p-8">
        <h1 className='text-3xl font-semibold text-blue-600 mb-4'>Volunteering</h1>
        <hr className="border-t-2 w-full my-4" style={{ borderImage: 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet) 1' }} />
        <p className='text-lg leading-snug text-gray-700'>I've been volunteering on a project aimed at revolutionizing education technology. Using React.js and Tailwind CSS, we're crafting dynamic and intuitive interfaces for an enhanced learning experience. It's been rewarding to apply my skills to such a meaningful cause and collaborate with a dedicated team. I'm excited to continue contributing to the project's goal of creating a more engaging educational environment.</p>
      </div>
      <span className="flex justify-end ml-[1000px] mt-4" onClick={scrollTop}>
        <FaArrowAltCircleUp size="30" style={{cursor: "pointer"}} />
      </span>
    </div>
  )
}

export default Volunteer