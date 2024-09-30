'use client';

import React, { useState } from 'react';

const GradientButton = ({ label }) => {
  // Manage the active state of the button
  const [isActive, setIsActive] = useState(false);

  // Function to handle the click event and toggle the button's state
  const handleClick = () => {
    setIsActive(!isActive); // Toggle between true and false on each click
  };

  return (
    <button
      onClick={handleClick}
      className={`${
        isActive
          ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white'
          : 'bg-transparent text-gray-500'
      } font-semibold px-6 py-2 rounded-md shadow-md transition-colors duration-300`}
    >
      {label}
    </button>
  );
};

export default GradientButton;