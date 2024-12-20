
import React from "react";
import ay1 from "/ay-1.png";
import ay2 from "/ay-2.png";
import ay3 from "/ay-3.png";

const Consultations: React.FC = () => {
  return (
    <div className="bg-offYellow w-full mt-12 px-4 py-16  ">
      <h1 className="text-3xl lg:text-4xl font-bold text-green text-center">
        What sets Ayurvedic consultations apart?
      </h1>

      <div className="mt-10 flex flex-col lg:grid lg:grid-cols-12 gap-5 w-full lg:w-[70%] lg:mx-auto  h-800px auto-rows-fr">
        {/* First Card */}
        <div className="col-span-5  border-t-8 border-green rounded-3xl flex flex-col gap-4 justify-center items-center text-green bg-white p-8">
          <h1 className="text-2xl font-semibold text-center">
            स्वस्थस्य स्वास्थ्य रक्षणं, <br /> आतुरस्य विकार प्रशमनं ।
          </h1>
          <p className="text-lg text-center">
            [ Meaning: The Goal of Ayurveda is to maintain the health of a
            healthy person and to cure the disease of a diseased person. ]
          </p>
        </div>
        {/* First Image */}
        <div className="w-full col-span-3 flex items-center justify-center ">
          <img
            src={ay1}
            alt="Ayurvedic consultation"
            className="w-full h-full object-contain"
          />
        </div>
        {/* Second Card */}
        <div className="col-span-4 border-t-8 border-green rounded-3xl flex flex-col gap-4 justify-center items-center text-green bg-white p-8">
          <h1 className="text-2xl font-semibold text-center">
            Precise Diagnosis
          </h1>
          <p className="text-lg text-center">
            [ Ayurveda's core principles revolve around Vata, Pitta, and Kapha
            doshas, guiding you with precise diagnosis and treatment. ]
          </p>
        </div>

        {/* Third Card */}
        <div className="col-span-3 border-t-8 border-green rounded-3xl flex flex-col gap-4 justify-center items-center text-green bg-white p-8">
          <h1 className="text-2xl font-semibold text-center">
            Zero Side-Effects
          </h1>
          <p className="text-lg text-center">
            [ Ayurvedic treatments are devoid of chemicals, and are based
            completely on natural herbs. ]
          </p>
        </div>
        {/* Second img */}
        <div className="col-span-3 w-full  flex items-center justify-center">
          <img
            src={ay2}
            alt="Precise Diagnosis"
            className="w-full h-full object-contain"
          />
        </div>
        {/* forth Card */}
        <div className="col-span-3 border-t-8 border-green rounded-3xl flex flex-col gap-4 justify-center items-center text-green bg-white p-8 ">
          <h1 className="text-2xl font-semibold text-center text-nowrap">
            Individual Treatment
          </h1>
          <p className="text-lg text-center">
            [ all Treatments are personalized based on a person's unique
            constitution and health concerns. ]
          </p>
        </div>

        {/* Third img */}
        <div className="col-span-3 w-full flex items-center justify-center ">
          <img
            src={ay3}
            alt="Zero Side-Effects"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Consultations;
