
import React, { useState, useRef, useEffect } from "react";

interface ApproachCard {
  id: number;
  title: string;
  desc: string;
}

const Approach:React.FC = () => {
  const approach: ApproachCard[] = [
    {
      id: 1,
      title: "Make Appointment",
      desc: "You must make an appointment in advance, to choose the service and date.",
    },
    {
      id: 2,
      title: "Consultations",
      desc: "The next stage involves a thorough consultation with an Ayurveda practitioner.",
    },
    {
      id: 3,
      title: "Treatment Planning",
      desc: "The Ayurvedic practitioner creates a personalized treatment plan for you.",
    },
    {
      id: 4,
      title: "Maintenance",
      desc: "These visits allow for assessment of progress, adjustments to the treatment.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef=useRef<HTMLDivElement|null>(null)

    const handleScroll=()=>{
      const container=containerRef.current;
      if(!container) return;

      const cardWidth=container.scrollWidth/approach.length;
      const scrollLeft=container.scrollLeft;
      const currentIndex = Math.round(scrollLeft / cardWidth);

      setActiveIndex(currentIndex);
    }

        useEffect(() => {
          const container =containerRef.current;
          if(!container)return;
           
          container.addEventListener('scroll',handleScroll)
          return ()=> container.removeEventListener('scroll',handleScroll)
        }, [])
         

        const scrollToCard=(index:number)=>{
          const container =containerRef.current;
          if(!container)return;
          const cardWidth =container.scrollWidth/approach.length;

          container.scrollTo({ left: cardWidth * index, behavior: "smooth" });

        }
  return (
    <div className="w-full my-20 px-4 h-screen ">
      <h1 className="text-3xl w-4/5 ml-[10%] text-center text-green font-bold">
        Our ayurvedic approach
      </h1>
      <p className="text-lg text-center mt-4  text-lightText">
        At Amrutam we follow a unique and personalized approach to healing. Our
        expert practitioners begin each treatment process by conducting a
        thorough analysis of the patient’s body type, medical history, and
        current health conditions.
      </p>

      <div
        ref={containerRef}
        className="w-full  overflow-x-scroll flex py-16  scroll-smooth"
      >
        {approach.map((card) => (
          <div
            key={card.id}
            className="bg-offYellow border-green border-t-8  w-4/5 shrink-0 ml-6 rounded-3xl flex flex-col justify-start items-center gap-2 px-6 py-12"
          >
            <div className="text-white bg-green/60 border-green border-2 rounded-full  w-20 h-20  text-4xl shrink-0 flex justify-center items-center ">
              {card.id}
            </div>
            <h4 className="text-green text-2xl font-bold ">{card.title}</h4>
            <p className="text-lightText  text-lg px-2 text-center">
              {card.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {approach.map((_, index) => (
          <div
            key={index}
            onClick={() => scrollToCard(index)}
            className={`w-4 h-4 rounded-full cursor-pointer ${
              activeIndex === index ? "bg-green" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Approach;
