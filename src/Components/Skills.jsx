import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaGitAlt } from "react-icons/fa";
import { SiRobotframework } from "react-icons/si";
import { TbSql } from "react-icons/tb";

const Skills = () => {
  return (
    <div className="m-14">
        <div className="text-5xl flex justify-center mb-10">
            <h2>Skills</h2>
        </div>
        <div className="m-2 flex justify-around"> 
            <div className="flex flex-col items-center"> 
                <FaReact size="2em" /> 
                <div>React</div>
            </div>
            <div className="flex flex-col items-center"> 
                <FaJava size="2em" /> 
                <div>Java</div>
            </div>
            <div className="flex flex-col items-center"> 
                <TbBrandCpp size="2em" /> 
                <div>C++</div>
            </div>
            <div className="flex flex-col items-center"> 
                <FaHtml5 size="2em" /> 
                <div>HTML</div>
            </div>
            <div className="flex flex-col items-center"> 
                <FaPython size="2em" /> 
                <div>Python</div>
            </div>
            <div className="flex flex-col items-center"> 
                <IoLogoJavascript size="2em" /> 
                <div>JavaScript</div>
            </div>
            <div className="flex flex-col items-center"> 
                <FaPython size="2em" /> 
                <div>Python</div>
            </div>
            <div className="flex flex-col items-center"> 
                <FaGitAlt size="2em" /> 
                <div>Git</div>
            </div>
            <div className="flex flex-col items-center"> 
                <SiRobotframework size="2em" /> 
                <div>Robot Framework</div>
            </div>
            <div className="flex flex-col items-center"> 
                <TbSql size="2em" /> 
                <div>SQL</div>
            </div>
        </div>
    </div>
  )
}

export default Skills