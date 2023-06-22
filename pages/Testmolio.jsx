import React from "react";
//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ArrowLeftIcon,ArrowRightIcon } from '@heroicons/react/24/solid'
import Image from "next/image";

const Slideshow = () => {
	//Array of Images
	const images = [
		"/slide1.gif",
		"/slide2.gif",
		"/slide3.gif",
		"/slide4.gif",
	"/slide5.gif",
	];

	const  missions = [
		 {

		  name : "PRAVEG", 
		  images: "/slide1.gif"
		 },
		 {

			name : "PRAVEG 2.0", 
			images: "/slide2.gif"
		   }, 
		   {

			name : "PRAVEG 3.0", 
			images: "/slide3.gif"
		   },
		   {

			name : "Hot fire ", 
			images: "/slide5.gif"
		   },
	];
	
	

	//These are custom properties for zoom effect while slide-show
	const zoomInProperties = {
		scale: 1,
		duration: 5000,
		transitionDuration: 300,
		infinite: true,
		prevArrow: (
			<div className="ml-10 top-40 md:top-72">
				<ArrowLeftIcon className="h-8 w-8 text-white cursor-pointer" />
			</div>
		),
		nextArrow: (
				<div className="mr-10 top-40 md:top-72">
				   <ArrowRightIcon className="h-8 w-8 text-white cursor-pointer" />
			    </div>
		),
	};
	return (
		<div className="w-full h-screen border-b-2 border-t-2 border-gray-800">
			<Zoom {...zoomInProperties}>
				{missions.map((each, index ) => (
					<div key={index} className="flex justify-center md:items-center items-start w-screen h-screen relative">
						<Image
						  width={600}
						  height={600}
							className="w-screen"
							src={each.images}
							alt=""
							loading="lazy"
						/>
						
                        <h1 className="absolute md:top-60 top-24 inset-x-1/4 text-center z-10 md:text-6xl text-4xl bold text-white" key={index}>{each.name}</h1>
                        
					</div>
				))}
				
			</Zoom>
		</div>
	);
};

export default Slideshow;