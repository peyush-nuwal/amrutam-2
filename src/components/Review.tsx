import React, { useEffect, useRef, useState } from 'react'

interface Review{
  id:number,
  name:string,
  date:string,
  city:string,
  title:string,
  desc:string,
  problem:string,
  img:string,
  bg:string
  
}




const Review :React.FC= () => {
  const reviews: Review[] = [
    {
      id: 1,
      name: "kylie jenner",
      date: "17/02/24",
      city: "Chennai",
      title: "One of a kind service",
      desc: "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
      problem: "Consulted for Skin",
      img: "/kylie.jpg",
      bg: "#ECE7FF",
    },
    {
      id: 2,
      name: "Dwayne John",
      date: "17/02/24",
      city: "Mumbai",
      title: "One of a kind service",
      desc: "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
      problem: "Consulted for Hair",
      img: "/rock.jpg",
      bg: "#ECFEE7",
    },
    {
      id: 3,
      name: "josan santham",
      date: "17/02/24",
      city: "Chennai",
      title: "One of a kind service",
      desc: "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
      problem: "Consulted for Hair",
      img: "/josn.jpg",
      bg: "#ECFEE7",
    },
    {
      id: 4,
      name: "sydney_sweeney",
      date: "18/02/24",
      city: "Delhi",
      title: "Highly recommend!",
      desc: "A perfect blend of professionalism and expertise. Will definitely come back again!",
      problem: "Consulted for Skin",
      img: "/sydeny.jpg",
      bg: "#ECE7FF",
    },
    {
      id: 5,
      name: "anupam khair",
      date: "19/02/24",
      city: "Bangalore",
      title: "Exceptional results",
      desc: "Had a fantastic experience! The consultation was thorough and the results speak for themselves.",
      problem: "Consulted for Hair",
      img: "/anupan.jpeg",
      bg: "#ECFEE7",
    },
    {
      id: 6,
      name: "anupam khair",
      date: "19/02/24",
      city: "Bangalore",
      title: "Exceptional results",
      desc: "Had a fantastic experience! The consultation was thorough and the results speak for themselves.",
      problem: "Consulted for Hair",
      img: "/anupan.jpeg",
      bg: "#ECFEE7",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef=useRef<HTMLDivElement|null>(null);


  const handleScroll=()=>{
     const container=containerRef.current;
     if(!container)return;

   const isMobile = window.innerWidth < 1024;
   const cardsPerPage = isMobile ? 1 : 3;
   const cardWidth = container.scrollWidth / reviews.length;
    const scrollLeft=container.scrollLeft
    const currentIndex = Math.floor(scrollLeft / cardWidth / cardsPerPage);
    setActiveIndex(currentIndex)
  }

  useEffect(() => {
    const container=containerRef.current;
    if(!container)return;
     
    container.addEventListener('scroll',handleScroll)
  
    return () => container.removeEventListener('scroll',handleScroll)
  }, [])

  const scrollToCard=(index:number)=>{
    const container=containerRef.current;
    if(!container)return;

    const isMobile = window.innerWidth < 1024;
    const cardsPerPage = isMobile ? 1 : 3;
    const cardWidth = container.scrollWidth / reviews.length;

    container.scrollTo({
      left: cardWidth * index * cardsPerPage,
      behavior: "smooth",
    });
  }
  
  return (
    <div className="h-[80vh] bg-offYellow w-full px-4 py-16">
      <h1 className="text-3xl lg:text-4xl   font-bold text-green text-center overflow-hidden">
        {" "}
        STORIES FROM OUR VALUED CUSTOMERS!
      </h1>
      <div
        ref={containerRef}
        className="w-full lg:w-4/5 mx-auto h-[45vh] my-10 flex overflow-x-scroll hide-scrollbar"
      >
        {reviews.map((user) => (
          <div
            key={user.id}
            className=" w-4/5 lg:max-w-[350px] h-full shrink-0 bg-white  ml-5 lg:ml-20 rounded-3xl  overflow-hidden"
          >
            <h1
              className="h-[15%] text-xl font-semibold py-3 px-5 "
              style={{ backgroundColor: user.bg }}
            >
              {user.problem}
            </h1>
            <div className="h-[85%] p-4 flex flex-col   ">
              <div className="flex items-center justify-between">
                <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 flex justify-center items-center">
                  {" "}
                  <img
                    src={user.img}
                    alt="user img"
                    className="w-full h-full object-cover  object-center"
                  />
                </div>
                <div className="w-full px-2">
                  <h1 className="font-semibold text-lg   w-full ">
                    {user.name}
                  </h1>
                  <h5 className="px-3 w-full">{user.city}</h5>
                </div>

                <h5>{user.date}</h5>
              </div>

              <h1 className="text-xl font-semibold mt-10 mb-2 ">
                “{user.title}”
              </h1>
              <p className="text-sm">{user.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, idx) => (
          <div
            key={idx}
            onClick={() => scrollToCard(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              activeIndex === idx ? "bg-green" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Review