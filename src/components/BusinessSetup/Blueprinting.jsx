import React from 'react';

const Blueprinting = () => {
  return (
    <div className="w-full px-4 pt-10 pb-20 flex flex-col items-center font-serif bg-white text-black">
      <h1 className="text-4xl font-bold text-center tracking-wide">BLUEPRINTING</h1>
      <h2 className="text-lg text-center font-medium mt-1 mb-12">JP Consulting & Services</h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl px-4 mb-20">
        <div className="w-80 h-40 border-4 border-blue-400 rounded-xl bg-gray-300 shadow-inner" />
        <p className="text-sm text-center md:text-left max-w-lg leading-relaxed border-l-4 border-gray-300 pl-4 italic">
          Blueprinting is not just about creating a document; it’s about laying a solid
          foundation that ensures every aspect of your business aligns with your long-term
          goals. Whether you’re starting a new business or scaling an existing one, having a
          detailed blueprint helps prevent costly mistakes, allows for smoother operations,
          and sets clear expectations for everyone involved. <br /><br />
          By taking the time to plan and strategize, you give your business the best chance
          for success and growth in a competitive market.
        </p>
      </div>

      <h3 className="text-xl font-semibold text-center mb-15">A Comprehensive Blueprint for Empowering Your Success</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mb-20">
        {[{
          title: "Our Promise to You",
          desc: "At JP Consulting & Services, our mission is to provide customized, actionable solutions that deliver real, measurable improvements in your business. Whether you're looking to optimize resources, scale operations, or implement cutting-edge strategies, we're here to help you succeed."
        }, {
          title: "Your Path to Success",
          desc: "We don’t believe in one-size-fits-all solutions. We take the time to get to know your business, your goals, and your market. Then we develop a personalized strategy that is as unique as your company."
        }, {
          title: "Understand Your Challenges",
          desc: "We understand that every business faces unique challenges, whether it's operational inefficiencies, technology integration, or strategic direction. Our consultants work closely with you to deeply diagnose these challenges and help you unlock your business’s full potential."
        }, {
          title: "Pain Points We Solve",
          desc: "• Streamlining complex business processes\n• Expanding your market reach\n• Integrating innovative technologies seamlessly\n• Improving workforce efficiency and reducing costs"
        }, {
          title: "How We Help Your Business Grow",
          desc: "Strategy Development: Helping you craft a roadmap for success, whether you're a startup or scaling to the next level.\nTechnology Integration: Applying and integrating the right technology solutions to make your business more efficient and competitive."
        }, {
          title: "Your Benefits",
          desc: "• Enhanced operational efficiency and reduced overhead costs\n• A clearer, more actionable business strategy\n• Increased profitability and better resource utilization\n• Improved customer satisfaction through better service and quicker response"
        }].map((card, i) => (
          <div
            key={i}
            className="relative border border-yellow-500 rounded-xl bg-white p-6 text-center shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-12">
              <div className="w-0.5 h-6 bg-yellow-500 translate-x-[-32px]" />
              <div className="w-0.5 h-6 bg-yellow-500 translate-x-[32px]" />
            </div>

            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white border border-yellow-500 rounded-full px-6 py-1 text-sm font-semibold shadow-sm">
              {card.title}
            </div>

            <p className="text-sm pt-8 leading-relaxed whitespace-pre-line mb-4">{card.desc}</p>
            <button className="text-xs px-4 py-1 border border-black rounded hover:bg-yellow-100 transition">Contact Us</button>
          </div>
        ))}
      </div>

      <div className="pt-20 text-center">
        <header className="text-5xl poppins-semibold font-josefin">
          JP Consulting & Services
        </header>
      </div>

      <div className="pt-10 text-center">
        <p className="text-xl font-bold text-black px-4">
          Success is a journey, not a destination.
        </p>
      </div>

      <div className="my-10 mx-40 w-250 h-100 bg-white border-2 border-black rounded-xl shadow-xl">
        <div className="pt-6 text-center">
          <p className="text-lg font-bold text-black px-4">
            We work closely with businesses to understand their specific needs and challenges. By offering personalized solutions, we help clients navigate complex problems and unlock new opportunities for success. From streamlining operations to strategic planning, we aim to enhance your business performance, fostering long-term growth and stability. Together, we empower your business to achieve its full potential.
          </p>
        </div>
        <div className="w-full flex justify-center mt-20">
          <button className="px-10 py-3 rounded-full cursor-pointer text-black border border-black hover:bg-orange-500">Contact Us</button>
        </div>
        <div className="w-full flex justify-center mt-10">
          <button className="px-10 py-3 rounded-full cursor-pointer text-black border border-black hover:bg-orange-500">More About Us</button>
        </div>
      </div>
    </div>
  );
};

export default Blueprinting;
