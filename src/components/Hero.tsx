
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[calc(100vh-60px)] bg-hero-mobile bg-cover bg-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content container */}
      <div className="relative z-20 h-full w-full text-white p-6 flex flex-col justify-center items-center">
        {/* Greeting */}
        <h6 className="text-lg text-start w-full">
          Namaste, Welcome to Amrutam
        </h6>

        {/* Headline and description */}
        <div className="my-5">
          <h1 className="text-3xl font-bold">
            Step into Holistic Healing with Ayurveda. <br /> Book Consultation
            with Certified Experts.
          </h1>
          <p className="w-[95%] mt-4">
            Dive into the world of Ayurveda and experience personalized health
            solutions and holistic guidance from trusted Ayurvedic doctors,
            anytime, anywhere.
          </p>
        </div>

        {/* Call-to-action button */}
        <button className="btn btn-primary mt-6 self-start">
          Book an Appointment
        </button>
      </div>
    </div>
  );
};

export default Hero;
