import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,

  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import Image from "next/image";

const Navbar = () => {
  const [sideMenu, setSideMenu] = useState(false);
  const handleSideMenu = () => {
    setSideMenu(!sideMenu);
  };
  return (
    <div className="fixed w-full bg-black h-20 z-[100] shadow-lg top-0 left-0 right-0">
      <div className="flex items-center justify-between rounded-lg w-full h-full p-6">
        <div className="md:flex-1">
          <Image
           src="/logo.png"
           height={50}
           width={50}
           alt={""}
          
          />
        </div>
        <div className="text-3xl md:flex-1 md:mr-10">
          <ul className="items-center text-white  justify-between hidden md:flex">
            <Link href="/">
              <li className="text-white ">Home</li>
            </Link>
            <Link href="/components/About">
              <li className= " text-white ">About</li>
            </Link>
            <Link href="/components/Service">
              <li className="text-white ">Services</li>
            </Link>
            <Link href="/components/Internship">
              <li className="text-white ">Internship</li>
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
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-3xl text-white  ">Home</li>
              </Link>
              <Link href="/components/About">
                <li className="py-4 text-3xl text-white ">About</li>
              </Link>
              <Link href="/components/Service">
                <li className="py-4 text-3xl text-white ">Services</li>
              </Link>
              <Link href="/components/Internship">
                <li className="py-4 text-3xl text-white ">Internship</li>
              </Link>
            </ul>
            <div className="pt-20">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Lets Connect
              </p>
              <div className="flex items-center justify-between my-3 w-full sm:w-[80%]">
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                  <FaLinkedinIn />
                </div>
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                  <FaGithub />
                </div>
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                  <AiOutlineMail />
                </div>
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                  <BsPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;