import React from 'react';

const Australia = () => {
  return (
    <div className='fixed top-40 right-0 z-40 cursor-pointer'>
      <div className='w-12 md:w-48 text-center py-5 rounded-s-full font-bold text-gray-800 bg-white transition-all hover:pl-10 hover:border-orange-600 border-l-4 pl-2 md:pl-4 overflow-hidden'>
        <span className='block md:hidden'>🇦🇺</span> {/* Peek (icon or hint) on mobile */}
        <span className='hidden md:block'>Australia</span> {/* Full label on medium screens and up */}
      </div>
    </div>
  );
};

export default Australia;
