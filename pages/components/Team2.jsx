/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState  , useEffect} from 'react';
import Image from 'next/image';

import Umang from './Images/Umang.jpeg';
import Vatsal from './Images/Vatsal.jpeg';
import Keyur from './Images/Keyur.jpeg';
import Hiral from './Images/Hiral.jpeg';
import Dirgh from './Images/Dirgh.jpeg';
import Nayan from './Images/Nayan.jpeg';
import Khusi from './Images/Khusi.jpeg';
import Nancy from './Images/Nancy.jpeg';
import Bhumi from './Images/Bhumi.jpeg';
import { motion } from 'framer-motion';

//  for animation 

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

//  add employ data here 
const Employee = [
  {
    name: 'UMANG SUDANI',
    image: Umang,
    possession: 'FOUNDER AND CEO',
    linkedin: 'https://www.linkedin.com/in/umang-sudani-73b2a819b',
  },
  {
    name: 'VATSAL PATEL',
    image: Vatsal,
    possession: 'EMPLOYEE',
    linkedin: '',
  },
  {
    name: 'BHUMI SHAH',
    image: Bhumi,
    possession: 'EMPLOYEE',
    linkedin: 'https://www.linkedin.com/in/bhumi-shah-1a79b51b1',
  },
  {
    name: 'KEYUR DEVGANIA',
    image: Keyur,
    possession: 'EMPLOYEE',
    linkedin: 'https://www.linkedin.com/in/keyur-devganiya',
  },
  {
    name: 'HIRAL VORA',
    image: Hiral,
    possession: 'EMPLOYEE',
    linkedin: 'https://www.linkedin.com/in/vorahiral02',
  },
  {
    name: 'DIRGH BHATT',
    image: Dirgh,
    possession: 'EMPLOYEE',
    linkedin: 'https://www.linkedin.com/in/dirgh-bhatt-1888a81ab/',
  },
  {
    name: 'NAYAN SANDPA',
    image: Nayan,
    possession: 'EMPLOYEE',
    linkedin: 'https://www.linkedin.com/in/nayan-sandpa-139632202/',
  },
  {
    name: 'KHUSI SHAH',
    image: Khusi,
    possession: 'EMPLOYEE',
    linkedin: 'https://www.linkedin.com/in/khushi-shah-970a52203',
  },
  {
    name: 'NANCY PAREKH',
    image: Nancy,
    possession: 'EMPLOYEE',
    linkedin: 'https://www.linkedin.com/in/nancy-parekh-920364259',
  },
];

const Team2 = () => {
  const [loading, setLoading] = useState(true);
  const animationProps = animateComponentsOnScroll();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  

  return (

    <>
    
    <motion.div className="animate-component" {...animationProps}>
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <h2 className="mb-12 text-3xl font-bold">
          Meet the <u className="text-white ">Team</u>
        </h2>

        <div className="lg:gap-xl-12 grid gap-x-6 mt-5 md:grid-cols-2 lg:grid-cols-4">
          {Employee.map((employ, index) => (
            <div className="mb-12 md:mb-0" key={index}>
              {loading ? (
                
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

              ) : (
                <Image
                  className="mx-auto mb-6 mt-10 rounded-lg shadow-lg dark:shadow-black/20"
                  width={1000}
                  height={1000}
                  src={employ.image}
                  alt="avatar"
                 
                />
              )}

              <h5 className="mb-4 text-lg font-bold">{employ.name}</h5>
              <p className="mb-6">{employ.possession}</p>

              <ul className="mx-auto flex list-inside justify-center">
                <a href={employ.linkedin} className="px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 text-primary dark:text-primary-400"
                  >
                    <path
                      fill="currentColor"
                      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                    />
                  </svg>
                </a>
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
    </motion.div>

    </>
  );
};

export default Team2;
