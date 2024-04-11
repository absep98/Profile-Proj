// App.jsx
import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import MainCont from './Components/MainCont';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Volunteer from './Components/Volunteer';
const App = () => {
  return (
    <div style={{ backgroundColor: '#deeefc' }}>
      <Header />
      <Home />
      <div id="/"><MainCont /></div>
      <div id="experience"><Experience /></div>
      <div id="contact"><Contact /></div>
      <Projects />
      <Volunteer />
    </div>
  );
}

export default App;