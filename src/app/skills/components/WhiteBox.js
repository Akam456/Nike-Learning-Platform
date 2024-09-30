import React from 'react';

const WhiteBox = ({ children, padding = 'p-4', shadow = 'shadow-[0_0_15px_rgba(0,0,0,0.1)]' }) => {
  return (
    <div className={`bg-white ${padding} rounded-lg ${shadow} border border-gray-200`}>
      {children}
    </div>
  );
};

export default WhiteBox;
