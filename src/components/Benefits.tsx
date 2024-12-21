
import React from "react";
import speechBubble from "/speech-bubble.png";
import shield from "/shield.png";
import doctor from "/doctor.png";
import prescription from "/prescription.png";


interface benefits{
  id:number,
  title:string,
  img:any
}
const Benefits:React.FC = () => {
  const benefits: benefits[] = [
    {
      id: 1,
      title: "convenient online & In-clinic consultations",
      img: speechBubble,
    },
    {
      id: 2,
      title: " Safe and effective treatment",
      img: shield,
    },
    {
      id: 3,
      title: "Experienced Ayurvedic Practitioners",
      img: doctor,
    },
    {
      id: 4,
      title: "personalized Treatment Plans & Guidance",
      img: prescription,
    },
  ];

  return (
    <div className="bg-offYellow flex flex-col lg:flex-row  ">
      {benefits.map((item) => (
        <div
          key={item.id}
          className=" py-6 px-6 flex gap-4   justify-start  items-center     border-b-2 lg:border border-stone-300"
        >
          <div className="w-16 h-16 p-3 rounded-full bg-white border-2 border-green flex justify-center items-center  shrink-0">
            <img
              src={item.img}
              alt="img"
              className=" w-full h-full object-contain"
            />
          </div>

          <h2 className="   text-xl    font-bold text-green">
            {item.title}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Benefits;
