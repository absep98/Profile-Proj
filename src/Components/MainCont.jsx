import MyImage from '../Data/image.jpg';
import Pic from '../Data/pic.jpg';
import { IoMdCloudDownload } from "react-icons/io";

const MainCont = () => {
  return (
    <>
      <div className="h-[600px] w-full flex">
        <div className="firsthalf w-1/3 h-full m-8 relative"> {/* Change m-14 to m-8 here */}
          <img src={MyImage} className="w-[300px] border rounded-[20%] m-8 absolute top-0 left-[10%] opacity-100 hover:opacity-0 transition-opacity duration-500" /> {/* Change m-14 to m-8 here */}
          <img src={Pic} className="w-[300px] border rounded-[20%] m-8 absolute top-0 left-[10%] opacity-0 hover:opacity-100 transition-opacity duration-500" /> {/* Change m-14 to m-8 here */}
        </div>
        <div className="secondhalf w-2/4 m-8 h-full flex items-start flex-col"> {/* Add flex-col here */}
          <p className="break-words max-w-3xl mt-14  text-xl">
            <h3 className="text-5xl mb-4">About Me</h3>
            Experienced software engineer with a robust proficiency in Python, C++, Java, and JavaScript. Graduated with a degree in Information Technology from PSG College of Technology. Passionate about web development, Problem solving, AI, and enthusiastic about exploring new programming languages. Actively seeking opportunities to leverage my skills and contribute to impactful projects.
          </p>
          <div className="mt-8 w-full">
            <h4 className="text-2xl mx-[250px] font-bold  ">02</h4>
            <h2 className="mx-[200px]">Internship Completed</h2>
          </div>
          <div className="resume flex justify-end w-full mt-8">
            <a href="/path/to/your/resume.pdf" download className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-300 flex items-center"> {/* Add flex and items-center here */}
            <span className="mr-2">Download Resume</span><IoMdCloudDownload />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainCont