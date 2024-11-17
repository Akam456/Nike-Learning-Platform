import React, { useState } from 'react';
import { Star } from 'lucide-react';

const SkillCardNew = ({ name, skill, profilePicture, backgroundImage }) => {
  const [hasOrangeBorder, setHasOrangeBorder] = useState(false);

  const toggleBorder = () => {
    setHasOrangeBorder(!hasOrangeBorder);
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
          <div className="relative w-[3rem] h-[3rem] ml-4"> {/* Profile Picture Container */}
            <div className="w-full h-full rounded-full border-2 border-orange-500 flex items-center justify-center overflow-hidden">
              <img
                src={profilePicture}
                alt={`${name}'s profile`}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute top-1 -right-1 bg-orange-500 rounded-full p-1">
              <Star className="w-2 h-2 text-white" fill="white" />
            </div>
          </div>
          <div className="ml-4 text-white mt-2">
            <p className="text-[1rem] font-helvetica-neue mb-0 leading-none">{name}</p>
          </div>
        </div>

        {/* Skill Name Section */}
        <div className="absolute bottom-6 left-6 right-6">
          <h2 className="text-white font-bold z-10 font-helvetica-neue text-[1.4rem] leading-[1]">
            {skill}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SkillCardNew;
