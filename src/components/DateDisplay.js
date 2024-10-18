import React from 'react';
import './Navbar.css';

const DateDisplay = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="date-container">
      <div className="date-text">{currentDate}</div>
    </div>
  );
};

export default DateDisplay;
