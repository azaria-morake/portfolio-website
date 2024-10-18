import React from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import CarouselComponent from './components/Carousel'; // redundant but may be used again
import Articles from './components/Articles';
import './App.css';
import Skills from './components/Skills';

function App() {
  return (
    <>
    {/* Navbar section */}
    <Navbar />
    <div className="app-container">
      
      
      {/* Profile and Carousel sections side by side */}
      <div className="content">
        {/* Left: Profile Description */}
        <div className="profile-descrip-container">
          <Profile />
           {/* Articles Section */}
           <h3 className='skills-title'>Articles</h3>
          <Articles />

        </div>
       
        {/* Right: Carousel */}
        <div className="carousel-container">
          <Skills />
        </div>
      </div>

      
    </div>
    </>
  );
}

export default App;

