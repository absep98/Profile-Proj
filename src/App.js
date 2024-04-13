// App.jsx
import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import MainCont from './Components/MainCont';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Volunteer from './Components/Volunteer';
import './App.css';
const App = () => {
  return (
    <div   className="font-poppins" style={{ backgroundColor: '#deeefc' }}>
      <Header />
      <Home />
      <div id="/"><MainCont /></div>
      <div id="experience"><Experience /></div>
      <div id="contact"><Contact /></div>
      <div id="projects"><Projects /></div>
      <Volunteer />
    </div>
  );
}

export default App;