import React from 'react';

const CustomCard = ({ topTitle, title, backgroundImage, rating, tickerProgress, onClick }) => {
  return (
    
      <div className="w-[16.8rem] cursor-pointer"> {/* Ensure the card container is centered and scales */}
        <h1 className='text-xl font-sans font-[600] pb-1'>{topTitle}</h1>
        <div onClick={onClick} className='flex flex-col items-start'>
          {/* Card Content */}
          <div
            className="relative w-[14.44rem] h-[9.31rem] rounded overflow-hidden bg-cover bg-center transform transition-transform duration-300 hover:scale-105"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
             {/* Gradient Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('images/gradient.png')" }} // Change this to the correct path for your gradient.png
          ></div>
          
            {/* Rating (Top-Right) */}
            <div className="absolute top-2 right-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="white"
              >
                <path d="M9.049 2.927a1 1 0 011.902 0l1.36 4.194a1 1 0 00.95.69h4.388c.969 0 1.371 1.24.588 1.81l-3.557 2.584a1 1 0 00-.364 1.118l1.36 4.194c.287.884-.755 1.61-1.54 1.118l-3.557-2.584a1 1 0 00-1.176 0l-3.557 2.584c-.785.492-1.827-.234-1.54-1.118l1.36-4.194a1 1 0 00-.364-1.118L2.06 9.621c-.783-.57-.381-1.81.588-1.81h4.388a1 1 0 00.95-.69l1.36-4.194z" />
              </svg>
              <span className="ml-1 text-[1rem] text-white font-bold">{rating}</span>
            </div>

            {/* Title (Bottom-Left) */}
            <div className="absolute bottom-1 left-2 text-left">
              <h2 className="text-[1.4rem] font-sans font-[550] text-white">{title}</h2>
            </div>
          </div>

          {/* Ticker (Vertically centered below the card) */}
          <div className="flex mt-2">
            <div className="relative w-[14.44rem] h-[0.3rem] bg-gray-300 rounded-full overflow-hidden">
              <div
                className="absolute inset-0 bg-orange-500 h-full rounded-full"
                style={{ width: `${tickerProgress}%` }} // Adjust ticker progress dynamically
              ></div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default CustomCard;
