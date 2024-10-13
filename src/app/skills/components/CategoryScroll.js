'use client';

import React, { useRef } from 'react';
import GradientButton from './GradientButton'; // Import your GradientButton component

const CategoryScroll = ({ skillCategories }) => {
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
    <div>
      {/* Grid with horizontal scrolling */}
      <div
        ref={containerRef}
        className="grid grid-flow-col auto-cols-max gap-6 h-full overflow-x-auto"
      >
        {skillCategories.map((category, index) => (
          <GradientButton key={index} label={category} />
        ))}
      </div>

      {/* Buttons to scroll */}
      <div className="flex justify-end mt-4">
        <button className="p-2" onClick={scrollLeft}>
          ←
        </button>
        <button className="p-2" onClick={scrollRight}>
          →
        </button>
      </div>
    </div>
  );
};

export default CategoryScroll;
