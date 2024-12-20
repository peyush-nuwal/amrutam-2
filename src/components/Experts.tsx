import React, { useEffect, useRef, useState } from 'react'
import { GoMortarBoard } from "react-icons/go";
import { IoIosLink } from "react-icons/io";
  interface Doctor {
    id: number;
    name: string;
    title: string;
    qualification: string;
    experience: string;
    specialty: string;
    rating: number;
    bookSession: string;
    img:string
  }
const Experts:React.FC = () => {
const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Vaishali Sharma",
    title: "Ayurveda Practitioner",
    qualification: "(BAMS, MD)",
    experience: "25 years of experience",
    specialty: "Skin Specialist",
    rating: 4.5,
    bookSession: "Book a session",
    img: "/doc.png",
  },
  {
    id: 2,
    name: "Dr. Amit Patel",
    title: "Homeopathy Practitioner",
    qualification: "(BHMS, MD)",
    experience: "15 years of experience",
    specialty: "Allergy Specialist",
    rating: 4.7,
    bookSession: "Book a session",
    img: "/doc.png",
  },
  {
    id: 3,
    name: "Dr. Priya Deshmukh",
    title: "Dermatologist",
    qualification: "(MBBS, MD, DNB)",
    experience: "10 years of experience",
    specialty: "Cosmetic Dermatology",
    rating: 4.9,
    bookSession: "Book a session",
    img: "/doc.png",
  },
];
 
 const [activeIndex, setActiveIndex] = useState<number>(0)
 const containerRef=useRef<HTMLDivElement|null>(null)

 const handleScroll=()=>{
   const container =containerRef.current;
   if(!container)return;

   const cardWidth=container.scrollWidth/doctors.length;
   const scrollLeft=container.scrollLeft;
   const currentIndex=Math.round(scrollLeft/cardWidth);
   setActiveIndex(currentIndex);

 }
      useEffect(() => {
        const container=containerRef.current;
        if(!container) return;
        container.addEventListener('scroll',handleScroll)

      
        return () => container.removeEventListener('scroll',handleScroll) 
        
      }, [])
      
      const scrollToCard=(index:number)=>{
             const container=containerRef.current;
             if(!container)return;
             const cardWidth=container.scrollWidth/doctors.length;
              
             container.scrollTo({left:cardWidth*index,behavior:'smooth'})
      }
  return (
    <div className="h-[80vh] w-full my-10 px-4">
      <h1 className="text-3xl   font-bold text-green text-center overflow-hidden">
        {" "}
        STORIES FROM OUR VALUED CUSTOMERS!
      </h1>

      <div
        ref={containerRef}
         className="w-full h-[70%]  mt-10 flex overflow-x-scroll"
      >
        {doctors.map((doc) => (
          <div className="w-4/5 h-[90%] rounded-3xl bg-offYellow shrink-0 ml-5 overflow-hidden">
            <div
              className="h-[85%] w-full flex flex-col
               justify-center items-center"
            >
              <div className="w-38 h-38 rounded-full overflow-hidden">
                <img
                  src={doc.img}
                  alt="doctor img"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h1 className="font-bold text-xl mt-3">{doc.name}</h1>
              <h3 className="text-lightText">
                {doc.title} {doc.qualification}
              </h3>
              <h5 className="flex items-center text-lg gap-2 mt-2">
                <GoMortarBoard className="text-green w-6 h-6" />
                {doc.experience}
              </h5>

              <button className=" bg-green/20 rounded-2xl text-green  flex items-center gap-2 px-5 py-1 mt-5 text-lg">
                <IoIosLink />
                {doc.specialty}
              </button>
            </div>
            <h1 className=" h-[15%]  text-white text-2xl  flex items-center justify-center bg-green">
              {doc.bookSession}
            </h1>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {doctors.map((_, idx) => (
          <div
            key={idx}
            onClick={() => scrollToCard(idx)}
            className={`w-4 h-4 rounded-full cursor-pointer ${
              activeIndex === idx ? "bg-green" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Experts