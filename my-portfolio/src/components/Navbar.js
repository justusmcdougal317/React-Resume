import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState('');

  // Function to update the current time
  const updateTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM'; // Determine if it's AM or PM
    hours = hours % 12 || 12; // Convert hours to 12-hour format
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    setCurrentTime(`${hours}:${minutes}:${seconds} ${ampm}`);
  };

  // Update the time every second
  useEffect(() => {
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Justus</h1>
      </div>
      <div className="navbar-center">
        <h2 className="time">{currentTime}</h2>
      </div>
      <div className="navbar-right">
        {/* Add more links as needed */}
      </div>
    </nav>
  );
};

export default Navbar;