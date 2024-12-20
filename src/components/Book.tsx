import React from 'react'

const Book: React.FC= () => {
  return (
    <div className=" relative h-[50vh] w-full bg-call-bg  bg-cover bg-center ">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-20 h-full w-full text-white p-6 flex flex-col justify-center items-center">
        <h1 className='text-center text-3xl font-semibold '>Ready to restore harmony in your mind, body and spirit?</h1>
        <button className="btn btn-primary mt-6 ">
          Book an Consultation
        </button>
      </div>
    </div>
  );
}

export default Book