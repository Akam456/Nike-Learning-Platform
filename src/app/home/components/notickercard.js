import React from 'react';

const NoTickerCard = ({ title, backgroundImage, rating }) => {
  return (
    <div className="w-full px-2">
      {/* Card Content */}
      <div
        className="py-4 px-2 relative w-64 h-36 rounded-lg overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Rating (Top-Right) */}
        <div className="absolute top-2 right-2 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927a1 1 0 011.902 0l1.36 4.194a1 1 0 00.95.69h4.388c.969 0 1.371 1.24.588 1.81l-3.557 2.584a1 1 0 00-.364 1.118l1.36 4.194c.287.884-.755 1.61-1.54 1.118l-3.557-2.584a1 1 0 00-1.176 0l-3.557 2.584c-.785.492-1.827-.234-1.54-1.118l1.36-4.194a1 1 0 00-.364-1.118L2.06 9.621c-.783-.57-.381-1.81.588-1.81h4.388a1 1 0 00.95-.69l1.36-4.194z" />
          </svg>
          <span className="ml-1 text-sm text-white">{rating}</span>
        </div>

        {/* Title (Bottom-Left) */}
        <div className="absolute bottom-4 left-4 text-left">
          <h2 className="text-2xl font-semibold text-white">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default NoTickerCard;
