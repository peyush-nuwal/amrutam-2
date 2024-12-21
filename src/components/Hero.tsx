
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[calc(100vh-60px)] ">
      <img
        src="/hero-mobile.png"
        alt=""
        className="w-full h-full object-cover block lg:hidden "
      />
      <div className="w-full h-full  hidden lg:flex relative  z-10">
        <div className="w-1/2 h-full  bg-[#951D1C]"></div>
        <div
          className="absolute top-0 left-0 w-full h-full z-20"
          style={{
            background:
              "linear-gradient(to right, black 40%, transparent 100%)",
          }}
        ></div>
        <div className="w-1/2 h-full">
          <img
            src="/hero.png"
            alt=""
            className="w-full h-full object-conver"
          />
        </div>
      </div>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50 lg:bg-transparent"></div>

      {/* Content container */}
      <div className="absolute top-0 left-0 z-50 h-full w-full text-white p-6 lg:p-28 flex flex-col justify-center items-start">
        {/* Greeting */}
        <h6 className=" text-lg lg:text-2xl font-thin text-start w-full">
          Namaste, Welcome to Amrutam
        </h6>

        {/* Headline and description */}
        <div className="my-5 ">
          <h1 className="text-3xl lg:text-4xl font-bold">
            Step into Holistic Healing with Ayurveda. <br /> Book Consultation
            with Certified Experts.
          </h1>
          <p className="w-[95%] lg:w-[60%] text-lg mt-4 text-stone-200">
            Dive into the world of Ayurveda and experience personalized health
            solutions and holistic guidance from trusted Ayurvedic doctors,
            anytime, anywhere.
          </p>
        </div>

        {/* Call-to-action button */}
        <button className="btn btn-primary mt-6 lg:mt-4 self-start">
          Book an Appointment
        </button>
      </div>
    </div>
  );
};

export default Hero;
