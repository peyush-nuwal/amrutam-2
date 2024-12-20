import React from 'react'
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";

interface Social{
   id:number,
   logo:JSX.Element,

}
interface link {
  id: number;
  title: string;
}

const Footer :React.FC= () => {

 const socials: Social[] = [
   { id: 1, logo: <FiFacebook /> },
   { id: 2, logo: <FaInstagram /> },
   { id: 3, logo: <FiYoutube /> },
   { id: 4, logo: <FaXTwitter /> },
   { id: 5, logo: <FaLinkedinIn /> },
   { id: 6, logo: <FaPinterestP /> },
 ];


const Links: link[] = [
  { id: 1, title: "About Us" },
  { id: 2, title: "Terms and Conditions" },
  { id: 3, title: "Privacy Policy" },
  { id: 4, title: "Privacy Policy for Mobile Apps" },
  { id: 5, title: "Shipping and Returns Policy" },
  { id: 6, title: "International Delivery" },
  { id: 7, title: "For Businesses, Hotels and Resorts" },
];


  return (
    <div className="h-screen bg-green/20 px-6 py-12 flex flex-col items-start ">
      <div className="">
        <h4 className="font-bold text-green text-xl tracking-wider">
          Get in touch
        </h4>

        <h6 className="text-black text-lg  font-semibold mt-3 tracking-wide">
          support@amrutam.co.in
        </h6>
        <p className="text-black text-lg  font-semibold mt-8 pr-2 tracking-wide">
          Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj, Nai Sadak, Lashkar,
          Gwalior - 474001
        </p>
        <h6 className="text-black text-lg  font-semibold mt-5 tracking-wide">
          +91 9713171999
        </h6>
      </div>
      <div className="flex gap-2 my-8">
        {socials.map((social) => (
          <div
            key={social.id}
            className="bg-green text-white rounded-full w-12 h-12 text-2xl flex justify-center items-center "
          >
            {social.logo}
          </div>
        ))}
      </div>

      <div className="">
        <h4 className="font-bold text-green text-xl tracking-wider">
          information
        </h4>
        <ul>
          {Links.map((link) => (
            <li key={link.id} className="text-lg text-lightText tracking-wide">
              {link.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <h4 className="font-bold text-green text-xl tracking-wider">
          Subscribe to our Newsletter and join Amrutam Family today!
        </h4>

        <div className="flex items-center mt-10">
          <input
            type="text"
            placeholder="Enter Email"
            className="rounded-l-full w-56 h-[50px] bg-transparent border-[1px] border-green pl-4"
          />
          <button className="rounded-r-full h-[50px]  bg-black text-white text-lg px-6 py-2 border-[1px] border-green tracking-wider">
            {" "}
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer