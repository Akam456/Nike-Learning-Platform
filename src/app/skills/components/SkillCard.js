'use client';

import React, { useState } from 'react';

const SkillCard = ({ name, skill, profilePicture, backgroundImage }) => {
  // State to toggle border around the card
  const [hasOrangeBorder, setHasOrangeBorder] = useState(false);

  // Function to toggle the border around the card
  const toggleBorder = () => {
    setHasOrangeBorder(!hasOrangeBorder);  // Toggle the state of the border
  };

  return (
    <div
      onClick={toggleBorder}
      className={`p-[0.2rem] rounded-md ${hasOrangeBorder ? 'border-2 border-orange-500' : 'border-2 border-transparent'}`}
    >
      <div className="relative w-[13.75rem] h-[12.95rem] rounded-md overflow-hidden cursor-pointer">
        {/* Blurred background image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(2px)',
            transform: 'scale(1.05)',
          }}
        />
        {/* Semi-transparent overlay for darkening */}
        <div className="absolute inset-0 bg-black opacity-20" />
        {/* Profile Section */}
        <div className="relative flex items-center p-[0.2rem] mt-2">
          <div className="w-[3rem] h-[3rem] bg-gray-300 rounded-full flex items-center justify-center ml-4"> {/* Profile Picture */}
            <img
              src={profilePicture}
              alt={`${name}'s profile`}
              className="w-full h-full object-cover rounded-full"  // Profile image styling
            />
          </div>
          <div className="ml-4 text-white mt-2">
            <p className="text-[1rem] font-helvetica-neue mb-0 leading-none">{name}</p>
            {/* Follow Button */}
            <button className="mt-[0rem] bg-gradient-to-r from-orange-400 to-pink-500 text-white px-1 py-0 rounded-sm text-[0.5rem] font-bold font-helvetica-neue">
              + Follow
            </button>
          </div>
        </div>

        {/* Skill Name Section */}
        <div className="absolute bottom-6 left-6 right-6">
          <h2 className="text-white font-bold z-10 font-helvetica-neue text-[1.5rem] leading-[1.1]">
            {skill}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
