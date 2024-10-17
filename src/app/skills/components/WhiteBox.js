import React from 'react';

const WhiteBox = ({ children, padding = 'p-8', shadow = 'shadow-[0_0_15px_rgba(255,20,147,0.15)]' }) => {
  return (
    <div className={`bg-white ${padding} rounded-lg ${shadow} border border-gray-200`} style={{margin: "2rem 0"}}>
      {children}
    </div>
  );
};

export default WhiteBox;