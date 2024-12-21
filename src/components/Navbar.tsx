

import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "/logo.png";

const Navbar:React.FC = () => {
  
  return (
    <>
      <div className="relative  h-[80px] w-full bg-offYellow flex items-center  px-5 lg:hidden  ">
        <RxHamburgerMenu className="w-8 h-8 text-green" />
        <img
          src={Logo}
          className="absolute left-1/2 transform -translate-x-1/2 scale-125"
          alt="logo"
        />
      </div>
      <div className="  h-[80px] w-full bg-offYellow  hidden lg:flex items-center justify justify-between  px-8 ">
        <img src={Logo} className=" scale-125" alt="logo" />

        <ul className="flex items-center text-lg gap-4 font-semibold">
          <li className="hover:text-green cursor-pointer"> Home</li>
          <li className="hover:text-green cursor-pointer"> Find Doctors</li>
          <li className="hover:text-green cursor-pointer"> About Us</li>
          <li className="hover:text-green cursor-pointer">Contact</li>
        </ul>

        <div className="flex items-center gap-5">
          <button className="btn btn-transparent">Login</button>
          <button className="btn btn-primary">Sign-up</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
