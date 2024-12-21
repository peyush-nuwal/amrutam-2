import React, { useEffect, useRef, useState } from "react";
import { GoMortarBoard } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
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
  img: string;
}

const Experts: React.FC = () => {
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
    {
      id: 4,
      name: "Dr. Priya Deshmukh",
      title: "Dermatologist",
      qualification: "(MBBS, MD, DNB)",
      experience: "10 years of experience",
      specialty: "Cosmetic Dermatology",
      rating: 4.9,
      bookSession: "Book a session",
      img: "/doc.png",
    },
    {
      id: 5,
      name: "Dr. Priya Deshmukh",
      title: "Dermatologist",
      qualification: "(MBBS, MD, DNB)",
      experience: "10 years of experience",
      specialty: "Cosmetic Dermatology",
      rating: 4.9,
      bookSession: "Book a session",
      img: "/doc.png",
    },
    {
      id: 6,
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

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 1024;
    const cardsPerPage = isMobile ? 1 : 3;
    const cardWidth = container.scrollWidth / doctors.length;
    const scrollLeft = container.scrollLeft;
    const currentIndex = Math.floor(scrollLeft / cardWidth / cardsPerPage);

    setActiveIndex(currentIndex);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll);

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCard = (index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const isMobile = window.innerWidth < 1024;
    const cardsPerPage = isMobile ? 1 : 3;
    const cardWidth = container.scrollWidth / doctors.length;

    container.scrollTo({
      left: cardWidth * index * cardsPerPage,
      behavior: "smooth",
    });
  };

 const scrollNext = () => {
   setActiveIndex((prev) => {
     const nextIndex = Math.min(prev + 1, Math.floor(doctors.length / 3));
     scrollToCard(nextIndex);
     return nextIndex;
   });
 };

 const scrollPrev = () => {
   setActiveIndex((prev) => {
     const prevIndex = Math.max(prev - 1, 0);
     scrollToCard(prevIndex);
     return prevIndex;
   });
 };

  return (
    <div className="h-[85vh] w-full my-10 px-4">
      <h1 className="text-3xl lg:text-4xl font-bold text-green text-center overflow-hidden">
        {" "}
        STORIES FROM OUR VALUED CUSTOMERS!
      </h1>
      <div className="w-full relative h-[70%]">
        <button
          onClick={scrollPrev}
          className="absolute top-1/2 -translate-y-1/2 left-20 w-16 h-16 rounded-full  hidden lg:flex items-center justify-center bg-slate-100 text-black text-xl"
        >
          <IoIosArrowForward className="transform rotate-180" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute top-1/2 -translate-y-1/2 right-20  w-16 h-16 rounded-full  hidden lg:flex items-center justify-center bg-slate-100 text-black text-xl"
        >
          <IoIosArrowForward />
        </button>

        <div
          ref={containerRef}
          className="w-full lg:w-4/5 h-full mx-auto  mt-10 flex items-center overflow-x-scroll "
        >
          {doctors.map((doc) => (
            <div
              key={doc.id}
              className="w-4/5 lg:max-w-[350px] h-[90%] max-h-[400px] rounded-3xl bg-offYellow shrink-0 ml-5 lg:ml-12 overflow-hidden"
            >
              <div className="h-[85%] w-full flex flex-col justify-center items-center">
                <div className="w-28 h-28 rounded-full overflow-hidden">
                  <img
                    src={doc.img}
                    alt="doctor img"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h1 className="font-bold text-lg mt-3">{doc.name}</h1>
                <h3 className="text-lightText text-sm">
                  {doc.title} {doc.qualification}
                </h3>
                <h5 className="flex items-center text-base gap-2 mt-2">
                  <GoMortarBoard className="text-green w-4 h-4" />
                  {doc.experience}
                </h5>

                <button className="bg-green/20 rounded-2xl text-green flex items-center gap-2 px-4 py-1 mt-5">
                  <IoIosLink />
                  {doc.specialty}
                </button>
              </div>
              <h1 className="h-[15%] text-white text-xl flex items-center justify-center bg-green">
                {doc.bookSession}
              </h1>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({
          length:
            window.innerWidth < 1024
              ? doctors.length // Show all doctors in pagination for mobile
              : Math.ceil(doctors.length / 3), // Show 1 dot for every 3 doctors for larger screens
        }).map((_, idx) => (
          <div
            key={idx}
            onClick={() => scrollToCard(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              activeIndex === idx ? "bg-green" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>

      <button className="btn mx-auto bg-green/20 text-green flex items-center gap-3 my-7">
        find more Experts <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Experts;
