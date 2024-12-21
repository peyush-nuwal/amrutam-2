import React from 'react'

const Download :React.FC= () => {
  return (
    <>
      <div className="bg-offYellow w-full px-4 py-10 flex lg:hidden flex-col items-center">
        <h1 className="text-3xl font-bold text-green text-center">
          Amrutam home App
        </h1>
        <p className="text-lightText w-[80%] text-center mt-3  ">
          The Amrutam Home App is your one-stop app for all things Ayurveda!
          Apart from mimicking the significant characteristics of our website,
          this app offers a wide range of additional features.
        </p>

        <div className="w-full mt-5">
          <img
            src="/iPhone-13.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <p className="text-xl font-semibold text-center w-[70%]">
          Get a diet & lifestyle consultation with ayurvedic experts across the
          globe{" "}
        </p>
        <h1 className="text-3xl font-bold  mt-10 text-center">
          Get the App now
        </h1>
        <div className="mt-8">
          <img
            src="/playStore.png"
            alt=""
            className="w-full h-full object-contain "
          />
        </div>
        <div className="mt-3">
          <img
            src="/appStore.png"
            alt=""
            className="w-full h-full object-contain "
          />
        </div>
      </div>
      <div className="hidden  bg-offYellow w-full h-[80vh]  lg:flex items-center justify-center">
        <div className="w-2/5 h-full  flex flex-col justify-start items-start  px-7 pt-28">
          <h1 className="text-4xl font-bold text-green text-start">
            Amrutam home App
          </h1>
          <p className="text-lightText w-[90%] text-start mt-3 text-lg  ">
            The Amrutam Home App is your one-stop app for all things Ayurveda!
            Apart from mimicking the significant characteristics of our website,
            this app offers a wide range of additional features.
          </p>

          <p className="text-xl font-semibold text-start mt-4 w-4/5 ">
            Get a diet & lifestyle consultation with ayurvedic experts across
            the globe{" "}
          </p>
          <h1 className="text-3xl font-bold  mt-10 text-start">
            Get the App now
          </h1>
          <div className="w-3/5 flex items-center mt-5 ">
            <div className="">
              <img
                src="/playStore.png"
                alt=""
                className="w-full h-full object-contain "
              />
            </div>
            <div className="">
              <img
                src="/appStore.png"
                alt=""
                className="w-full h-full object-contain "
              />
            </div>
          </div>
        </div>

        <div className="w-2/5 relative h-full p-20">
          <div className="absolute top-20 left-20 bg-green/20 rounded-full w-60 h-60 z-10"></div>
          <div className="absolute bottom-20 right-20 bg-green/20 rounded-full w-60 h-60 z-10"></div>
          <img
            src="/iPhone-13.png"
            alt=""
            className="w-full h-full object-contain relative z-20"
          />
        </div>
      </div>
    </>
  );
}

export default Download