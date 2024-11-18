'use client';

const GradientButton = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        isActive
          ? 'text-white'
          : 'bg-gray-100 text-gray-600'
      } font-semibold p-2 px-4 w-fit h-[3.25rem] text-[1rem] rounded-md transition-colors duration-300 border-none focus:outline-none`}
      style={{
        background: isActive
          ? 'linear-gradient(270deg, #EC8DC9 0%, #FF6447 100%)'
          : 'none',
      }}
    >
      {label}
    </button>
  );
};

export default GradientButton;
