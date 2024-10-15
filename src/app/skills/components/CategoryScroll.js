'use client';

import React, { useRef, useState } from 'react';
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

  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="p-0 mx-5 mt-8">
      {/* Grid with horizontal scrolling */}
      <div
        ref={containerRef}
        className="grid grid-flow-col auto-cols-max gap-6 h-full overflow-x-auto"
      >
        {skillCategories.map((category, index) => (
          <GradientButton 
          key={index} label={category} 
          isActive={selectedCategory === category} 
          onClick={() => setSelectedCategory(category)} />
        ))}
      </div>
    </div>
  );
};

export default CategoryScroll;
