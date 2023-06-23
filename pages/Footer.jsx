/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import React from 'react';
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

import { AiFillTwitterCircle } from "react-icons/ai";
import {
  

  AiOutlineMail,
} from "react-icons/ai";


const Footer = () => {
  return (
    <footer className="py-6  dark:bg-gray-800 dark:text-gray-50">
    <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50 max-w-screen-xl">
      <div className="grid grid-cols-12">
        <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
          <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 md:justify-start">
            <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
              <Image  src="/logo.png" width={400} height={400}  className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400" alt=''/>
            </div>
            <span className="self-center text-2xl font-semibold">VARTIX AEROSPECE</span>
          </a>
        </div>
       
      </div>
      <div className="grid justify-center pt-6 lg:justify-between">
        <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
          <span>©2023 All rights reserved</span>
          <a rel="noopener noreferrer" href="#">
            <span>Privacy policy</span>
          </a>
          <a rel="noopener noreferrer" href="#">
            <span>Terms of service</span>
          </a>
        </div>
        <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
        <div className="flex items-center justify-between my-3 w-full sm:w-[100%]">
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                 
                 
                 <a href="https://www.linkedin.com/company/vartixaerospace/"> <FaLinkedinIn /></a> 
                </div>
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
               
               <a href="https://www.instagram.com/vartixaerospace/"> <FaInstagram/></a>
                
                </div>
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                  <AiOutlineMail />
                </div>
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                  <a href="https://twitter.com/VartiXAerospace"> <AiFillTwitterCircle/></a>
                
                </div>
              </div>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
