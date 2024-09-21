import React from 'react';
import Slider from './Slider'; // Import the Slider component

const Aboutfront = () => {
  return (
    <div className='h-screen bg-pink flex items-center justify-center'>
      <div className='h-[50%] w-[50%] bg-slate-400'>
        <Slider /> {/* Use the Slider component */}
      </div>
    </div>
  );
};

export default Aboutfront;
