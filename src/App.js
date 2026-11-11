import React from 'react';
import { MotionConfig } from 'framer-motion';
import { ScrollProgress } from './Components/Shared';
import Header from './Components/Header';
import Home from './Components/Home';
import MainCont from './Components/MainCont';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Writing from './Components/Writing';
import Skills from './Components/Skills';
import Volunteer from './Components/Volunteer';
import Contact from './Components/Contact';

const App = () => {
  return (
    <MotionConfig reducedMotion="user">
      <div className="font-body bg-paper text-ink">
        <ScrollProgress />
        <Header />
        <main>
          <div id="home"><Home /></div>
          <div id="about"><MainCont /></div>
          <div id="experience"><Experience /></div>
          <div id="projects"><Projects /></div>
          <div id="writing"><Writing /></div>
          <div id="skills"><Skills /></div>
          <div id="volunteer"><Volunteer /></div>
          <div id="contact"><Contact /></div>
        </main>
      </div>
    </MotionConfig>
  );
}

export default App;
