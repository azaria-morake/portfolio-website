import React, { useState } from 'react';
import './Navbar.css'; // Ensure this includes the updated CSS
import { Button } from 'react-bootstrap'; // For the button behavior
import Clock from './Clock'; // Import the Clock component
import DateDisplay from './DateDisplay'; // Import the DateDisplay component
import Weather from './Weather'; // Import the Weather component
import useWindowWidth from '../hooks/useWindowWidth';
//import { FaClock, FaCalendarAlt, FaCloud } from 'react-icons/fa'; // Import icons for clock, date, and weather

const Navbar = () => {

  const width = useWindowWidth();
  const isMobile = width <= 768; // Define mobile as screens <= 768px

  const [showSocialIcons, setShowSocialIcons] = useState(false);

  const handleConnectClick = () => {
    setShowSocialIcons(!showSocialIcons);
  };

  const resumeLink = 'https://drive.google.com/file/d/your-resume-file-id/view?usp=sharing';

  const handleResumeDownload = () => {
    window.open(resumeLink, '_blank');
  };

  // Determine button class based on the state
  const buttonClass = showSocialIcons ? 'connect-btn slide-right' : 'connect-btn';

  return (
  <>
    <div className="navbar-container">
      {!showSocialIcons && (
        <div className="profile-container">
          <img src="mr-morake.jpg" alt="Profile" className="profile-image" />
          <div className="profile-info">
          {isMobile ? null : <span className="profile-bracket">[</span>}
            <div className="profile-text">
              <h3>Azaria Morake</h3>
              <p>Software Engineer</p>
              <p>Johannesburg, ZA</p>
            </div>
          </div>
        </div>
      )}

      {/* Connect Button */}
      <Button variant="info" className={buttonClass} style={{ fontWeight: 'bold' }} onClick={handleConnectClick}>
        {showSocialIcons ? 'Return' : 'Connect'}
      </Button>

      {/* Right-side Widgets (Clock, Date, Weather, Resume Button) */}
      {isMobile ? ( 
        !showSocialIcons && (
        <div className='mobile-text'>
                   <p> Hello, welcome to my website. 😊🌟 </p>
                   <p>Here you will get to know everything about me and my profession. It also gives a glimpse into my programming ideologies. </p>
                   <p> You can use the arrows to navigate through each section. I designed  it in this way so that the content
                       is manageable, hoping to enhance your experience.</p>
                   <p>Thanks for popping in. Much Love. ❤️💖</p>
                        
      </div>)) : ( <div className="navbar-right">
        {!showSocialIcons && (
          <>
            <div className="info-item">
              <img src='time.png' className="info-icon" />
              <Clock />
            </div>
            <div className="info-item">
              <img src='Date.png' className="info-icon" />
              <DateDisplay />
            </div>
            <div className="info-item">
              <img src='weather.png' className="info-icon" />
              <Weather />
            </div>
            
          </>
        )}
      </div>)}
      

      {/* Social Media Icons (show when connect button is clicked) */}
      {showSocialIcons && (
        <div className="social-icons">
          <a href="https://github.com/azaria-morake" target="_blank" rel="noopener noreferrer">
          <img src="github.png" alt="GitHub" className="social-icon"/>
        </a>
        <a href="https://linkedin.com/azariamorake" target="_blank" rel="noopener noreferrer"> 
          <img src="linkedin.png" alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://wa.me/+27660857813" target="_blank" rel="noopener noreferrer">
          <img src="whatsapp.png" alt="WhatsApp" className="social-icon" />
        </a>
        <a href="https://www.youtube.com/@azariamorake" target="_blank" rel="noopener noreferrer">
          <img src="youtube.png" alt="YouTube" className="social-icon" />
        </a>
        <a href="https://web.facebook.com/profile.php?id=100079640784574" target="_blank" rel="noopener noreferrer">
          <img src="facebook.png" alt="Facebook" className="social-icon" />
        </a>
        <a href="https://x.com/azariamorake" target="_blank" rel="noopener noreferrer">
          <img src="x-twitter.png" alt="Twitter" className="social-icon" />
        </a>
        <a href="https://instagram.com/millionairemorake" target="_blank" rel="noopener noreferrer">
          <img src="instagram.png" alt="Instagram" className="social-icon" />
        </a>
        </div>
      )}
    </div>
    </>
  );
};

export default Navbar;
