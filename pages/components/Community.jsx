/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
import Image from 'next/image'

import React, { useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const animateComponentsOnScroll = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    }
  }, [controls, inView]);

  return {
    ref,
    animate: controls,
    initial: { opacity: 0, y: 100 },
  };
};

const Evennts = [


  {
    index: 0,
    name: "VARTIX ",
    image: "/one.jpeg",
    des: "VAETIX AEROSPACE "



  },
  {
    index: 1,
    name: "  Flyesky Rocketry Club",
    image: "/two.jpeg",
    des: "Workshpo on glider Making"


  },
  {
    index: 2,
    name: " New Beginning ",
    image: "/three.jpeg",
    des: "New Beginning"


  },
  {
    index: 3,
    name: "  Workshop ",
    image: "/four.jpeg",
    des: "Worshop"


  }
]


const Community = () => {
  const animationProps = animateComponentsOnScroll();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="text-black body-font lg:pt-20">
        <div className="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">

          <div className="flex flex-col w-full mb-2 text-left md:text-center ">
            <h1 className="mb-2 text-6xl font-bold tracking-tighter text-white lg:text-8xl md:text-7xl">
              <span> COMMUNITY </span>
              <br className="hidden lg:block"></br>

            </h1>
            <br></br>
            <p className="mx-auto  text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3">
              SUPPORTING GREAT CAUSES HERE ON EARTH{" "}
              <a href="https://nextjs.org/" className="underline">

              </a>{" "}

            </p>
          </div>
        </div>

        <div className="container flex flex-col items-center justify-center py-8 mx-auto rounded-lg md:p-1 p-3">
          {
            loading ? (<Skeleton
              width={900}
              height={900}
              className="object-cover object-center w-full mb-10 border-gray-200 dark:border-gray-800 g327 border rounded-lg shadow-md"
            />) : (<Image
              width={500}
              height={500}
              className="object-cover object-center w-full mb-10 border-gray-200 dark:border-gray-800 g327 border rounded-lg shadow-md"
              alt="hero"
              src="/main2.png"
            />)
          }

        </div>


        <section className="text-gray-600 body-font">

          <div className="container px-5 py-24 mx-auto flex flex-wrap">

            <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="flex-grow">
                  <h2 className="text-white text-2xl title-font font-medium mb-3">
                    JOIN VARTIX COMMUNITY
                  </h2>
                 
                </div>
              </div>
              <a href="https://chat.whatsapp.com/D9uBbmNl5ru894bM93scVH">
              <button className="bg-green-500 hover:bg-white-700 text-white font-bold py-2 px-4 rounded-full"
              
              >
             
                Click Here to join Vartix community
              </button>
              </a>




            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <div className="text-center mb-20">
              <h2 className="sm:text-5xl font-medium title-font text-white mb-4">
                Events
              </h2>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                Here is our some events
              </p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-white inline-flex"></div>
              </div>
              <div className="container px-5 py-16 mx-auto">
                <div className="flex flex-wrap -m-4">
                  {

                    Evennts.map((event, index) => (


  

                      <div className="p-4 lg:w-1/4 md:w-2/8" key={index}>

<motion.div className="animate-component" {...animationProps}>
  {
    loading? (
      <div role="status" className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
      <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
          <svg className="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
      </div>
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      <div className="flex items-center mt-4 space-x-3">
          <svg className="text-gray-200 w-14 h-14 dark:text-gray-700" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
          <div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
              <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
      </div>
      <span className="sr-only">Loading...</span>
  </div>
  
           
    ):(
      <div className="h-full w-full flex flex-col items-center text-center">
                          <Image width={600}
                            height={400}
                            alt="team"
                            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                            src={event.image}
                            key={index}
                          />
                          <div className="w-full">
                            <h2 className="title-font font-medium text-lg text-white">
                              {event.name}
                            </h2>
                            <h3 className="text-gray-500 mb-3">{event.des}</h3>

                            <span className="inline-flex">
                              <a className="text-gray-500">
                                <svg
                                  fillRule="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  stroke-width="2"
                                  className="w-5 h-5"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                              </a>
                              <a className="ml-2 text-white">
                                <svg
                                  fillRule="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  stroke-width="2"
                                  className="w-5 h-5"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                              </a>
                              <a className="ml-2 text-gray-500">
                                <svg
                                  fillRule="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  stroke-width="2"
                                  className="w-5 h-5"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                </svg>
                              </a>
                            </span>
                          </div>
                        </div>
    )
  }
                        

 </motion.div>

                      </div>

                    ))
                  }


                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Community
