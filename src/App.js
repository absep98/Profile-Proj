// App.jsx
import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import MainCont from './Components/MainCont';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Experience from './Components/Experience';

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <div id="/"><MainCont /></div>
      <div id="contact"><Contact /></div>
      <div id="experience"><Experience /></div>
      <Footer />
    </div>
  );
}

export default App;