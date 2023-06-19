/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

import { Carousel, Typography, Button } from "@material-tailwind/react";
import { AiOutlineInstagram } from "react-icons/ai";

export default function Testmolio() {
    const [loading, setLoading] =React. useState(true);

      React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>

    <div className="border-t-2 border-b-2  ">

   

    

<div className="text-center  "> {/* Added a container to center the content */}
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
          Our Testmolioes
        </h1>
        <p className="text-lg font-normal text-white lg:text-xl dark:text-gray-400">
          Our Successful missions
        </p>
      </div>

     {loading ? (

      
<div role="status" className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700 ">
    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
        <svg className="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
    </div>
    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    <div className="flex items-center mt-4 space-x-3">
        <svg className="text-gray-200 w-14 h-14 dark:text-gray-700" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
        <div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
            <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
    </div>
    <span className="sr-only">Loading...</span>
</div>

     ):(

      <Carousel className="rounded-none  h-96">

<div className="relative h-80 sm:h-96">
  <img
    src="/slide2.jpg"
    alt="image 1"
    className="h-full w-full object-cover"
  />
  <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
    <div className="w-3/4 text-center md:w-2/4">
      <Typography
        variant="h1"
        color="white"
        className="mb-4 text-2xl md:text-4xl lg:text-5xl"
      >
        Praveg
      </Typography>
      <Typography
        variant="lead"
        color="white"
        className="mb-12 text-xl opacity-80"
      >
        Meet the engine which fired our red hot flame, PRAVEG meaning acceleration.
      </Typography>
      <div className="flex justify-center gap-2">
        <a href="https://www.instagram.com/p/ClgYFn4tuOd/">
          <AiOutlineInstagram size="60px" color="white" variant="text" />
        </a>
      </div>
    </div>
  </div>
</div>

{/* Slide 2 */}
<div className="relative h-80 sm:h-96">
  <img
    src="slide3.gif"
    alt="image 2"
    className="h-full w-full object-cover"
  />
  <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
    <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
      <Typography
        variant="h1"
        color="white"
        className="mb-4 text-2xl md:text-4xl lg:text-5xl"
      >
        Praveg 2.0
      </Typography>
      <Typography
        variant="lead"
        color="white"
        className="mb-12 text-xl opacity-80"
      >

        We are ready to boom on our journey to space. 
      </Typography>
      <div className="flex gap-2">
        <a href="https://www.instagram.com/p/CnlfmaUMRIt/">
          <AiOutlineInstagram size="60px" color="white" variant="text" />
        </a>
      </div>
    </div>
  </div>
</div>

{/* Slide 3 */}
<div className="relative h-80 sm:h-96">
  <img
    src="/slide5.gif"
    alt="image 3"
    className="h-full w-full object-cover"
  />
  <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
    <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
      <Typography
        variant="h1"
        color="white"
        className="mb-4 text-2xl md:text-4xl lg:text-5xl"
      >
        Red Flaming Hot 🔥
      </Typography>
      <Typography
        variant="lead"
        color="white"
        className="mb-12 text-xl opacity-80"
      >
        During the recent test of our Engine, the Throat section of Nozzle experienced high heat flux.
      </Typography>
      <div className="flex gap-2">
        <a href="https://www.instagram.com/p/CtUMYKVLrWK/">
          <AiOutlineInstagram size="60px" color="white" variant="text" />
        </a>
      </div>
    </div>
  </div>
</div>

{/* Slide 4 */}
<div className="relative h-80 sm:h-96">
  <img
    src="/slide4.gif"
    alt="image 4"
    className="h-full w-full text-2xl object-cover"
  />
  <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
    <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
      <Typography
        variant="h1"
        color="white"
        className="mb-4 text-3xl md:text-2xl lg:text-3xl"
      >
        Praveg 3.0
      </Typography>
      <Typography
        variant="lead"
        color="white"
        className="mb-12 text-xl opacity-80"
      >
        We have a 100% successful test on the third attempt for our 1.2 KN engine PRAVEG - 3.
       
      </Typography>
      <div className="flex gap-2">
        <a href="https://www.instagram.com/p/CqvWLgapTp7/">
          <AiOutlineInstagram size="60px" color="white" variant="text" />
        </a>
      </div>
    </div>
  </div>
</div>
</Carousel>

     )}


    
</div>
      
      
 
    </>
  );
}