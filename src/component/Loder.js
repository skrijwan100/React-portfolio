import React from 'react';

const Loader = ({ isLoading, progress }) => {
  const loaderStyle = {
    backgroundColor: '#fa5c0e', // Change as desired
    width: `${progress}%`,
    height: '3px',
    // transition: 'width 0.3s ease-in-out',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 9999,
    display: isLoading ? 'block' : 'none',
  };

  return <div style={loaderStyle}></div>;
};

export default Loader;