import React from 'react'

const Projects = () => {
  return (
    <div className='h-auto  p-10'>
      <h1 className='text-4xl font-bold mb-10'>Things I've built for fun and learning</h1>
      <div className=" shadow-lg rounded-lg p-8 mb-10">
        <h1 className='text-3xl font-semibold mb-4'>Expense Tracker Web App</h1>
        <p className='text-lg leading-relaxed'>Developed a comprehensive <b>MERN (MongoDB, Express.js, React.js, Node.js) </b> full-stack expense tracker web application. This project enables users to seamlessly input daily expenses and offers tracking functionalities based on weekly and monthly metrics. Leveraging React for frontend development, MongoDB for database storage, and Node.js for backend logic, the application provides an intuitive user interface for data entry and management.</p>
      </div>
      <div className=" shadow-lg rounded-lg p-8">
        <h1 className='text-3xl font-semibold mb-4'>Weather Web App</h1>
        <p className='text-lg leading-relaxed'>WeatherApp is a modern web application built using <b>Redux, Redux Toolkit, Axios, and Thunks </b> to provide users with detailed weather information. With a focus on accuracy and user experience, WeatherApp offers real-time weather data, intuitive navigation, and a visually appealing interface. Users can easily search for weather information for any location and access descriptive weather data, including temperature, humidity, wind speed, and more. By leveraging advanced technologies, WeatherApp aims to deliver a seamless and informative weather experience for users.</p>
      </div>
    </div>
  )
}

export default Projects