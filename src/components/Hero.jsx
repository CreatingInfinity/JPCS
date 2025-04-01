import React from 'react';
import { heroVideo } from '../utils';

const Hero = () => {
  return (
    <div className='relative poppins-regular'>
      <div className="relative bg-black h-screen w-full overflow-hidden">
        <video
          id="videoHero"
          className="absolute top-0 opacity-50 left-0 w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          muted
          playsInline
          loop
        />
      </div>
      {/* Add glass morphism !!!IMPORTANT!!! */}
      <div className='absolute top-40 left-85'>
        <h1 className='poppins-bold text-white text-center text-5xl w-180 text-wrap drop-shadow-xl'>EMPOWERING BUSINESSES, ONE SOLUTION AT A TIME.</h1>
      </div>
      <div className='border border-gray-200 text-white w-250 absolute top-80 right-40 p-8 text-center space-y-10 rounded-2xl shadow-lg bg-transparent backdrop-blur-md'>
        <h1 className='text-2xl text-center poppins-semibold'>Delivering Tailored Solutions to Drive Growth and Efficiency</h1>
        <p className='text-sm'>JP Consulting & Services, we believe in empowering businesses by offering tailored solutions that meet their unique challenges. With every project we undertake, we focus on delivering impact strategies that drive growth, efficiency, and success.</p>
        <div className='w-full flex justify-center'>
          <button className='px-10 py-3 rounded-full cursor-pointer text-white border border-white hover:bg-orange-500'>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;