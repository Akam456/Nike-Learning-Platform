'use client';

const GradientButton = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        isActive
          ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white'
          : 'bg-transparent text-gray-500'
      } font-semibold w-[10rem] h-[3.25rem] text-[1rem] rounded-md transition-colors duration-300 border-none focus:outline-none`}
    >
      {label}
    </button>
  );
};

export default GradientButton;
