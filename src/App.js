// src/App.js

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Articles from './components/Articles';
import Skills from './components/Skills';
import './App.css';
import useWindowWidth from './hooks/useWindowWidth';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // arrow buttons

const App = () => {
  const width = useWindowWidth(); // Custom hook
  const isMobile = width <= 768; // Mobile screens
  const [currentSection, setCurrentSection] = useState(0);

  // These sections are meant for mobile switch
  const sections = [
    { component: <Navbar />, className: 'navbar-section' },
    { component: <Profile />, className: 'profile-section' },
    { component: <Skills />, className: 'skills-section' },
    { component: <Articles />, className: 'articles-section' }
    
  ];

    const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };


  return (
    <div className="app-container">
      {isMobile ? (
        // Mobile view: render sections with their respective class names
<>
          {/* Render only the current section */}
          <div className={`section-container ${sections[currentSection].className}`}>
            {sections[currentSection].component}
          </div>

          {/* Navigation Arrows */}
          <div className="navigation-arrows">
            {currentSection > 0 && (
              <button className="arrow-button left" onClick={handlePrev}>
                <FaArrowLeft />
              </button>
            )}
            {currentSection < sections.length - 1 && (
              <button className="arrow-button right" onClick={handleNext}>
                <FaArrowRight />
              </button>
            )}
          </div>
        </>
      ) : (
        // Desktop view: render original layout
        <>
          <Navbar />
          <div className="content">
            {/* Left: Profile Description and Articles */}
            <div className="profile-descrip-container">
              <Profile />
              <h3 className="skills-title">Articles</h3>
              <Articles />
            </div>

            {/* Right: Carousel */}
            <div className="carousel-container">
              <Skills />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
