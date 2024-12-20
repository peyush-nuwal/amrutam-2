import React from 'react'

const Download :React.FC= () => {
  return (
    <div className="bg-offYellow w-full px-4 py-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-green text-center">
        Amrutam home App
      </h1>
      <p className="text-lightText w-[80%] text-center mt-3  ">
        The Amrutam Home App is your one-stop app for all things Ayurveda! Apart
        from mimicking the significant characteristics of our website, this app
        offers a wide range of additional features.
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
      <h1 className="text-3xl font-bold  mt-10 text-center">Get the App now</h1>
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
  );
}

export default Download