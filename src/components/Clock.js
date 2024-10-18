import React, { useState, useEffect } from 'react';
import './Clock.css'; // Importing the CSS for Clock styling
import './Navbar.css';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update time every second

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock-container clock-text">
      {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
    </div>
  );
};

export default Clock;

