'use client';

import React, { useState } from 'react';

const SkillCard = ({ name, skill }) => {
  // State to toggle border
  const [hasOrangeBorder, setHasOrangeBorder] = useState(false);

  // Function to toggle the border
  const toggleBorder = () => {
    setHasOrangeBorder(!hasOrangeBorder);
  };

  return (
    <div
      // Make the entire card clickable
      onClick={toggleBorder}
      className={`w-64 h-60 rounded-xl overflow-hidden shadow-lg p-4 bg-white cursor-pointer border-4 ${
        hasOrangeBorder ? 'border-orange-500' : 'border-gray-300'
      }`}
    >
      {/* Profile Section */}
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
          <span className="text-xl font-bold text-gray-600">
            {name.charAt(0)}
          </span>
        </div>
        <div className="ml-2">
          <p className="font-bold text-lg">{name}</p>
        </div>
        <button className="ml-auto bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
          + Follow
        </button>
      </div>

      {/* Skill Name Section */}
      <div className="relative">
        <div className="h-32 flex items-center justify-center">
          <h2 className="text-gray-600 text-xl font-bold">{skill}</h2>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;