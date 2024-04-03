import React from 'react'

const MainCont = () => {
  return (
    <div className="h-[500px] w-full flex">
        <div className="firsthalf w-1/2 h-full">
            Image
        </div>
        <div className="secondhalf w-1/2 h-full">
            <h3>About me</h3>
            <p className="break-words max-w-prose">
            Experienced software engineer with a robust proficiency in Python, C++, Java, and JavaScript. Graduated with a degree in Information Technology from PSG College of Technology. Passionate about web development, Problem solving, AI, and enthusiastic about exploring new programming languages. Actively seeking opportunities to leverage my skills and contribute to impactful projects.</p>
        </div>
    </div>
  )
}

export default MainCont