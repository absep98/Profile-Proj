import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
import MainCont from './MainCont';

const AboutComponent = () => <h1>About Page</h1>;
const ContactComponent = () => <h1>Contact Page</h1>;

const Header = () => {
  const [isMainRen, setIsMain] = useState(false);
  const HomeComponent = () => {
    if(isMainRen) {
      return null;
    } else {
      setIsMain(true);
      return <MainCont />;
    }
  }
  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/contact" element={<ContactComponent />} />
      </Routes>
    </Router>
  );
}

export default Header;