import gsap from "gsap";
import React, { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    
    tl
    .to("#anim1", {
      duration: 1,
      x: 0,
      delay: .5
    })
    .to("#anim1", {
      duration: 1,
      x: -200,
      opacity: 0,
      delay: 1
    })

  }, []);

  return (
    <div className="">
      <div className="h-screen bg-orange-400 josefin space-y-30 flex flex-col justify-center items-center text-center">
        <p id="anim1" className="text-2xl text-white translate-x-400 select-none">
          <span className="bold text-6xl/20 block ">OUR SERVICES</span>
          JP Consulting & Services
        </p>
        
      </div>
    </div>
  );
};

export default Services;
