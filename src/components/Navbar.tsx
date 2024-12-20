

import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "/logo.png";

const Navbar:React.FC = () => {
  
  return (
    <div className="relative  h-[80px] w-full bg-offYellow flex items-center  px-5 ">
      <RxHamburgerMenu className="w-8 h-8 text-green" />
      <img
        src={Logo}
        className="absolute left-1/2 transform -translate-x-1/2 scale-125"
        alt="logo"
      />
      
    </div>
  );
};

export default Navbar;
