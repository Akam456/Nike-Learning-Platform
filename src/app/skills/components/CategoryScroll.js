'use client';

import React, { useRef, useState } from 'react';
import GradientButton from './GradientButton'; // Import your GradientButton component

const CategoryScroll = ({ skillCategories, selectedCategory, setSelectedCategory }) => {
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
    <div className="mx-5 mt-8">
      {/* Grid with horizontal scrolling */}
      <div
        ref={containerRef}
        className="grid grid-flow-col auto-cols-max gap-6 h-full overflow-x-auto rounded-md bg-gray-100 p-2 scroll-smooth"
        style={{
          scrollPadding: "1rem",
        }}
      >
        {skillCategories.map((category, index) => (
          <GradientButton
            key={index}
            label={category}
            isActive={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
            className="min-w-[10rem] max-w-[12rem]" // Ensure consistent button width
          />
        ))}
      </div>
    </div>

  );
};

export default CategoryScroll;
