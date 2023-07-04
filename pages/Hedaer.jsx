import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";


import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import Image from "next/image";
import SB from "./SB";



const Navbar = () => {
  const [sideMenu, setSideMenu] = useState(false);
  const handleSideMenu = () => {
    setSideMenu(!sideMenu);
  };
  return (
    <>
      <div className="fixed  w-full bg-black h-16   z-[100] shadow-lg top-0 left-0 right-0">
        <div className="flex items-center  justify-between rounded-lg w-full h-full p-6">
          <div className="md:flex-1">
            <Image
              src="/logo4.png"
              height={120}
              width={100}
              alt={""}
              className="rounded-full"
            />
          </div>
          <div className="text-max-w-screen-xl md:text-max-w-screen-xl  md:flex-1  md:mr-10">
            <ul className="items-center text-white  space-x-8 justify-between hidden md:flex">
              
              <Link href="/">
                <li className="text-white  hover:border-b-2 border-white ">HOME</li>
              </Link>
              <Link href="/components/About/About">
                <li className=" text-white hover:border-b-2 border-white ">ABOUT</li>
              </Link>
              <Link href="/components/Community">
                <li className=" text-white hover:border-b-2 border-white ">COMMUNITY</li>
              </Link>
              <Link href="/components/News">
                <li className=" text-white hover:border-b-2 border-white ">NEWS</li>
              </Link>
              <>
                <SB  />
              </>
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd0AHEPhX5PyPgTNvK0uE3katEzW75EI0EhVDf0oFifuzJ5zA/viewform">
                <li className=" text-white hover:border-b-2 border-white "> LAUNCH  WITH US</li>
              </Link>
            </ul>
            <div className="cursor-pointer md:hidden" onClick={handleSideMenu}>
              <AiOutlineMenu size={30} />
            </div>
          </div>
        </div>
        <div
          className={
            sideMenu
              ? "md:hidden fixed top-0 left-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          <div
            className={
              sideMenu
                ? "fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-black p-4 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }
          >
            <div className="flex items-center text-white justify-between">
              <div>
                <h2>VERTIX AEROSPACE</h2>
              </div>
              <div
                onClick={handleSideMenu}
                className="p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="my-4 border-b border-gray-300">
              <p className="w-[85%] md:w-[90%] py-4 mx-auto">
                Lets build something legendary together
              </p>
            </div>
            <div className="flex flex-col  text-white  py-4">
              <ul className="uppercase ">
                <Link href="/">
                  <li className="py-4  text-white  hover:border-b-2 ">Home</li>
                </Link>
                <Link href="/components/About/About">
                  <li className="py-4  text-white  hover:border-b-2">About</li>
                </Link>
                <Link href="/components/Community">
                <li className=" py-4 text-white hover:border-b-2 border-white ">COMMUNITY</li>
              </Link>
              <Link href="/components/News">
                <li className=" py-4 text-white hover:border-b-2 border-white ">NEWS</li>
              </Link>
                <SB />
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd0AHEPhX5PyPgTNvK0uE3katEzW75EI0EhVDf0oFifuzJ5zA/viewform">
                <li className=" py-4 text-white hover:border-b-2 border-white "> LAUNCH  WITH US</li>
              </Link>
              </ul>
              <div className="pt-20">
                <p className="uppercase tracking-widest text-[#5651e5]">
                   Connect
                </p>
                <div className="flex items-center justify-between my-3 w-full sm:w-[100%]">
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                 
                 
                 <a href="https://www.linkedin.com/company/vartixaerospace/"> <FaLinkedinIn /></a> 
                </div>
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
               
               <a href="https://www.instagram.com/vartixaerospace/"> <FaInstagram/></a>
                
                </div>
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                  <a href="mailto:vartixaerospace@gmail.com"> <AiOutlineMail /></a> 
                </div>
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                  <a href="https://twitter.com/VartiXAerospace"> <AiFillTwitterCircle/></a>
                
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;