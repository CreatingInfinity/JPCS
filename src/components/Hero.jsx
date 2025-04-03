import React, { useEffect } from 'react';
import { heroVideo } from '../utils';
import gsap from 'gsap';

const Hero = () => {
  const timeline = gsap.timeline();
  useEffect(() => {
    timeline
      .to("#text1", { opacity: 1, y: -10,duration: 0.5, delay: 0.5 })
      .to("#text2", { opacity: 1, y: -10, duration: 0.5 })

  })
  return (
    <div className='relative poppins-regular'>
      <div className="fixed bg-black h-full w-full overflow-hidden">
        <video
          id="videoHero"
          className="absolute top-0 opacity-50 left-0 w-full object-cover "
          src={heroVideo}
          autoPlay
          muted
          playsInline
          loop
        />
      </div>
      {/* Add glass morphism !!!IMPORTANT!!! */}
      <div className='absolute top-50 gap-18 grid w-full h-full justify-center'>
        <div id='text1' className='flex justify-center opacity-0'>
          <h1 className='poppins-bold text-white text-center text-5xl w-180 text-wrap drop-shadow-xl'>EMPOWERING BUSINESSES, ONE SOLUTION AT A TIME.</h1>
        </div>
        <div id='text2' className='border border-gray-200 text-white opacity-0 w-250 p-8 text-center space-y-10 rounded-2xl shadow-lg bg-transparent backdrop-blur-md'>
          <h1 className='text-2xl text-center poppins-semibold'>Delivering Tailored Solutions to Drive Growth and Efficiency</h1>
          <p className='text-sm'>JP Consulting & Services, we believe in empowering businesses by offering tailored solutions that meet their unique challenges. With every project we undertake, we focus on delivering impact strategies that drive growth, efficiency, and success.</p>
          <div className='w-full flex justify-center'>
            <button className='px-10 py-3 rounded-full cursor-pointer text-white border border-white hover:bg-orange-500'>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;