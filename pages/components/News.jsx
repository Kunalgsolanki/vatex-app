/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';
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
 const Works =[

	{
		image:"/n7.jpeg",
		 des :"Signed MOU between Vasad's SVIT and MG Motor India"

	} ,
	{
		image:"/k.jpeg",
		 des :"1st prize to SVIT's team Vertix Aero Space project at 5th Mega Exhibition Maker Fest at MSU's Faculty of Technology."

	},
	{
		image:"/n1.jpeg",
		 des :"SVIT's team project won the first prize"

	},
	{
		image:"/n4.jpeg",
		 des :"Won the first price in maker Event"

	}
 ]

const News = () => {
	const [loading, setLoading] = useState(true);
	const animationProps = animateComponentsOnScroll();
	
useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <React.Fragment>



<section className="dark:bg-gray-800 dark:text-gray-100 mt-20">

	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
		{loading ? (
          


<div role="status" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500">
    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
        <svg className="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
    </div>
    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
   
</div>


          ) : (
			<Image src="/n6.jpeg" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" width={400} height={400} />
		  )
		  }
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">5th Mega Exhibition Max at MSU's Faculty of Technology</h3>
				<span className="text-xs dark:text-gray-400">Januarey 31, 2023</span>
				<p>First prize to SVIT's team"Ratiksha Aerospace Project" at the fest.</p>
			</div>
		</a>
	
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

			{
				Works.map((work , index)=>(
					
					<motion.div className="animate-component" {...animationProps} key={index}>
  
<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
    {
		loading?(
			<div role="status" className="object-cover w-full rounded h-44 dark:bg-gray-500">
			<div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
				<svg className="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
			</div>
			<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
			<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
			<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
			<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
		   
		</div>	
		):(
			
			<Image role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500"  key={index} src={work.image} width={200} height={200} />
		)
	}
				<div className="p-6 space-y-2" key={index}>
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{work.des}</h3>
				
					
				</div>
			</a>
			</motion.div>
				))
			}
			
		
		</div>
		
	</div>
</section>

    </React.Fragment>
  )
}

export default News
