import React from "react";
import { ITServiceImage } from "../utils";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Highlights = () => {
  return (
    <div className="w-full grid justify-center">
      <div className="pt-20 text-center snap-start bg-linear-to-b from-[rgba(255,255,255,.5)] to-white z-5">
        <header className="text-5xl text-white poppins-bold font-josefin">
          WHY CHOOSE US?
        </header>
        <div className="pt-10 text-center">
          <p className="text-lg text-white leading-relaxed px-4">
            At JP Consulting & Services, we are dedicated to helping businesses
            succeed through tailored, results-driven solutions. Here’s why you
            should choose us:
          </p>
          <div className="px-10">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              autoplay={{ delay: 6000 }}
              loop={true}
              id="swiper"
              className="w-300 h-120"
            >
              <SwiperSlide>
                <div className="">
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-black">
                      Expertise Across Multiple Industries
                    </h3>
                    <p className="text-sm text-black mt-2">
                      With years of experience in Public Relations, Business
                      Setup, IT Services, Marketing, and Recruitment, we bring
                      in-depth knowledge to every project, ensuring that we meet
                      your specific needs.
                    </p>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-black">
                      Proven Track Record
                    </h3>
                    <p className="text-sm text-black mt-2">
                      Our clients trust us because we deliver results. We have a
                      strong history of helping businesses streamline
                      operations, enhance their brand presence, and grow
                      sustainably.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" ">
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-black">
                      Collaborative Approach
                    </h3>
                    <p className="text-sm text-black mt-2">
                      We believe in working as a partner, not just a service
                      provider. Our team becomes an extension of your business,
                      committed to supporting you at every step of your journey.
                    </p>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-black">
                      Customized Solutions
                    </h3>
                    <p className="text-sm text-black mt-2">
                      We understand that every business is unique. That's why we
                      work closely with you to craft solutions that align with
                      your goals and challenges, helping you achieve long-term
                      success.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" ">
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-black">
                      Comprehensive Services
                    </h3>
                    <p className="text-sm text-black mt-2">
                      From business setup to recruitment and IT support, we
                      offer a full range of services to support your business at
                      every stage, saving you time and resources by providing
                      everything you need under one roof.
                    </p>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-black">
                      Commitment to Innovation
                    </h3>
                    <p className="text-sm text-black mt-2">
                      We are always on the pulse of the latest industry trends
                      and technologies, ensuring that our solutions are both
                      innovative and effective in driving your business forward.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="pt-6 text-center">
              <p className="text-xl font-bold text-black px-4">
                Choose JP Consulting & Services for a trusted partner that is as
                invested in your success as you are. Let us help you turn
                challenges into opportunities and achieve your business goals
                with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-20 text-center snap-start">
        <header className="text-5xl poppins-semibold font-josefin">
          JP Consulting & Services
        </header>
      </div>

      <div className="pt-10 text-center">
        <p className="text-xl font-bold text-black px-4">
          Success is a journey, not a destination.{" "}
        </p>
      </div>
      <div className="my-10 mx-40 w-250 h-100 bg-white border-2 border-black rounded-xl shadow-xl">
        <div className="pt-6 text-center">
          <p className="text-lg font-bold text-black px-4">
            We work closely with businesses to understand their specific needs
            and challenges. By offering personalized solutions, we help clients
            navigate complex problems and unlock new opportunities for success.
            From streamlining operations to strategic planning, we aim to
            enhance your business performance, fostering long-term growth and
            stability. Together, we empower your business to achieve its full
            potential.{" "}
          </p>
        </div>
        <div className="w-full flex justify-center mt-20">
          <button className="px-10 py-3 rounded-full cursor-pointer text-black border border-black hover:bg-orange-500">
            Contact Us
          </button>
        </div>
        <div className="w-full flex justify-center mt-10">
          <button className="px-10 py-3 rounded-full cursor-pointer text-black border border-black hover:bg-orange-500">
            More About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
