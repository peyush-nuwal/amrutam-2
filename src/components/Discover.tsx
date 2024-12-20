
import React from 'react'
 import girlBg from '/girl-bg.png'
 import girl from '/girl.png'
 import heartbeat from '/heartbeat.png'
 import lotus from '/lotus.png'
 import ribbon from '/ribbon.png'
 import protection from "/protection.png";
 import pestle from "/pestle.png";
 import strong from "/strong.png";

const Discover:React.FC = () => {
  return (
    <div className="px-4 mt-16 flex flex-col  items-center my-20">
      <h1 className="text-3xl  text-center text-green font-bold">
        Discover Ayurveda’s magic with us
      </h1>
      <p className="text-lg text-center mt-4 mx-1 text-lightText">
        Ayurvedic treatment aims to balance your body and mind, bringing harmony
        and vitality. It's like a journey to better health using ancient wisdom,
        a totally effective approach for a better life.{" "}
      </p>
      <div className="w-full ">
        <div className="relative p-2 w-full mt-5 flex justify-center items-center ">
          <img
            src={girlBg}
            alt="girl-background"
            className="w-full h-full  object-contain   "
          />
          <img
            src={girl}
            alt="girl"
            className="w-full h-full object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>

        <div className="  grid grid-cols-2 gap-4">
          {/* first div */}
          <div className=" border-2 w-full border-stone-300 rounded-lg flex flex-col justify-start items-center px-3 py-4 gap-2">
            <div className="bg-[#EDF5FA] w-20 h-20 p-4 rounded-full flex justify-center items-center shrink-0 ">
              <img
                src={heartbeat}
                alt="card-1"
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="text-center font-bold text-lg  leading-tight">
              Personalized Wellness
            </h4>
            <p className="text-center text-lightText font-semibold text-sm ">
              {" "}
              treatments made just for you based on your individual doshas,
              (body type)
            </p>
          </div>

          {/* second div */}
          <div className="  border-2 w-full border-stone-300 rounded-lg flex flex-col justify-start items-center px-3 py-4 gap-2 ">
            <div className="bg-[#EAF2EA] w-20 h-20 p-4 rounded-full flex justify-center items-center shrink-0 ">
              <img
                src={lotus}
                alt="card-2"
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="text-center font-bold text-lg  leading-tight">
              Focus on prevention
            </h4>
            <p className="text-center text-lightText font-semibold text-sm ">
              {" "}
              Stop problems even before they start.
            </p>
          </div>
          {/* third div */}
          <div className=" border-2 w-full border-stone-300 rounded-lg flex flex-col justify-start items-center px-3 py-4 gap-2">
            <div className="bg-[#FCF1F1] w-20 h-20 p-4 rounded-full flex justify-center items-center shrink-0 ">
              <img
                src={ribbon}
                alt="card-3"
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="text-center font-bold text-lg  leading-tight">
              Mind-Body Connection
            </h4>
            <p className="text-center text-lightText font-semibold text-sm ">
              {" "}
              Keep your mind and body in sync for a happy life.
            </p>
          </div>
          {/* fourth div */}
          <div className=" border-2 w-full border-stone-300 rounded-lg flex flex-col justify-start items-center px-3 py-4 gap-2">
            <div className="bg-[#F5F3FC] w-20 h-20 p-4 rounded-full flex justify-center items-center shrink-0 ">
              <img
                src={protection}
                alt="card-4"
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="text-center font-bold text-lg  leading-tight">
              Holistic <br /> Healing
            </h4>
            <p className="text-center text-lightText font-semibold text-sm ">
              {" "}
              Fix the root problem for long-lasting health.
            </p>
          </div>
          {/* fifth div */}
          <div className=" border-2 w-full border-stone-300 rounded-lg flex flex-col justify-start items-center px-3 py-4 gap-2">
            <div className="bg-[#FEF6ED] w-20 h-20 p-4 rounded-full flex justify-center items-center shrink-0 ">
              <img
                src={pestle}
                alt="card-5"
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="text-center font-bold text-lg  leading-tight">
              Natural <br /> Remedies
            </h4>
            <p className="text-center text-lightText font-semibold text-sm ">
              {" "}
              Using herbs and natural therapies for healing.
            </p>
          </div>
          {/* sixth div */}
          <div className=" border-2 w-full border-stone-300 rounded-lg flex flex-col justify-start items-center px-3 py-4 gap-2">
            <div className="bg-[#EAF2EA] w-20 h-20 p-4 rounded-full flex justify-center items-center shrink-0 ">
              <img
                src={strong}
                alt="card-6"
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="text-center font-bold text-lg  leading-tight">
              Boosting immunity
            </h4>
            <p className="text-center text-lightText font-semibold text-sm ">
              {" "}
              Stay strong and healthy for life, not just for today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover