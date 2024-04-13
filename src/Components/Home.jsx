import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <p className='text-2xl font-semibold text-blue-700'>Hi, My name is </p>
        <h1 className="text-7xl m-4" style={{ fontSize: 'clamp(40px, 8vw, 80px)' }}>Abhishek Sharma</h1>
        <h2 className='text-2xl font-bold text-blue-500 p-4 rounded'>
          Building things for fun and learning
        </h2>
        <h3 className="max-w-3xl">"I'm a software engineer deeply passionate about crafting exceptional digital experiences. Currently in a dynamic learning phase, I'm exploring various aspects of development, with a particular interest in backend technologies. Eager to absorb new knowledge and grow with every project."</h3>
      </div>
    </div>
  )
}

export default Home