'use client';
import React, { useRef } from 'react';
import SkillCard from './SkillCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';



const ProfileScroll = ({ skills }) => {
  const containerRef = useRef(null);

  // Function to scroll the grid left and right
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="p-0 mx-4 mt-8">
      {/* Grid with horizontal scrolling */}
      <div
        ref={containerRef}
        className="grid grid-flow-col auto-cols-max gap-6 h-full overflow-x-auto"
      >
        {skills.map((item, index) => (
          <SkillCard key={index} name={item.name} skill={item.skill} profilePicture={item.profilePicture} backgroundImage={item.backgroundImage}/>
        ))}
      </div>

      {/* Buttons to scroll, hacky solution for pres*/}
      {skills.length > 0 ? (<div className="flex justify-end mt-4">
        <button className="p-2" onClick={scrollLeft}>
          <FaArrowLeft />
        </button>
        <button className="p-2" onClick={scrollRight}>
          <FaArrowRight />
        </button>
      </div>) : ""}
    </div>
  );
};

export default ProfileScroll;
