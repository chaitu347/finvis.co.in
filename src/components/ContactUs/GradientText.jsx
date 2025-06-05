import React from 'react';

const GradientText = ({ children, className = "" }) => {
  return (
    <h1 className={`bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent ${className}`}>
      {children}
    </h1>
  );
};

export default GradientText;