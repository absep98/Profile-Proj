import MyImage from '../Data/image.jpg';
import Pic from '../Data/pic.jpg';
import { IoMdCloudDownload } from "react-icons/io";
import { useState } from 'react';
const MainCont = () => {
  const [counter, setCounter] = useState(0);
  const incrementer = () => {
    setCounter(counter + 1);
  }
  return (
    <>
      <div className="h-[600px] w-full flex ">
        <div className="firsthalf w-1/3 h-full m-8 relative"> {/* Change m-14 to m-8 here */}
          <img src={MyImage} alt="Description of MyImage" className="w-[300px] border rounded-[20%] m-8 absolute top-0 left-[10%] opacity-100 hover:opacity-0 transition-opacity duration-500" /> {/* Change m-14 to m-8 here */}
          <img src={Pic} alt="Description of MyImage" className="w-[300px] border rounded-[20%] m-8 absolute top-0 left-[10%] opacity-0 hover:opacity-100 transition-opacity duration-500" /> {/* Change m-14 to m-8 here */}
        </div>
        <div className="secondhalf w-2/4 m-8 h-full flex items-start flex-col"> {/* Add flex-col here */}
          <div className="break-words max-w-3xl mt-14  text-xl">
            <h3 className="text-5xl mb-4">About Me</h3>
            Experienced software engineer with a robust proficiency in Python, C++, Java, and JavaScript. Graduated with a degree in Information Technology from PSG College of Technology. Passionate about web development, Problem solving, AI, and enthusiastic about exploring new programming languages. Actively seeking opportunities to leverage my skills and contribute to impactful projects.
          </div>
          <div className="mt-8 w-full">
            <h4 className="text-2xl mx-[250px] font-bold  ">02</h4>
            <h2 className="mx-[200px]">Internship Completed</h2>
          </div>
          <div className="resume flex justify-end w-full mt-8">
            <a href="https://drive.google.com/file/d/1jIoSbuR9JC3SFgrXlih-y8GE2LT_H4wK/view" rel="noreferrer" target="_blank" onClick={incrementer}  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-300 flex items-center"> {/* Add flex and items-center here */}
            <span className="mr-2">Download Resume</span><IoMdCloudDownload />
            </a>
            <p className='mt-2'>{counter}+ Downloads</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainCont