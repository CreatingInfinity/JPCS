import React from 'react'

const Blueprinting = () => {
  return (
    <div className='w-full pt-200 grid justify-center'>
      <div className='pt-20 text-center'>
        <header className='text-5xl poppins-semibold font-josefin'>
          BLUEPRINTING
        </header>
      </div>

      <div className='my-10 mx-40 w-250 h-100 bg-white border-2 border-black rounded-xl shadow-xl'>
        <div className='pt-6 text-center'>
            <p className='text-lg font-bold text-black px-4'>
            Blueprinting is not just about creating a document; it’s about laying a solid foundation that ensures every aspect of your business aligns with your long-term goals. Whether you’re starting a new business or scaling an existing one, having a detailed blueprint helps prevent costly mistakes, allows for smoother operations, and sets clear expectations for everyone involved.

            By taking the time to plan and strategize, you give your business the best chance for success and growth in a competitive market.</p>
        </div>

        
        <div className='flex space-x-4 mx-4 mt-6'>
          <div className='w-1/2 bg-gray-200 border-2 border-black rounded-lg p-4'>
            <h3 className='text-xl font-bold text-black'>VISION</h3>
            <p className='text-center'>Our vision is to be the trusted partner for businesses worldwide, helping them navigate change, embrace new opportunities, and unlock their full potential. We aspire to be recognized as a leader in consulting services, known for our commitment to excellence, integrity, and the transformative impact we make on our clients' success.</p>
          </div>
          <div className='w-1/2 bg-gray-200 border-2 border-black rounded-lg p-4'>
            <h3 className='text-xl font-bold text-black'>MISSION</h3>
            <p className='text-center'>At JP Consulting & Services, our mission is to empower businesses by providing customized, actionable consulting solutions that optimize operations, drive innovation, and foster sustainable growth. We are dedicated to delivering strategic insights and practical guidance, ensuring that every client achieves measurable improvements in efficiency, profitability, and long-term success.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Blueprinting
