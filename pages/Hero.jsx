/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */

import React, { useState, useEffect } from 'react';
import Image from 'next/image'







const Hero = () => {



  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (

    <>
 <style>
        {`
        .bg-video {
          position: relative;
        }

        .video-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        .video {
          object-fit: cover;
          width: 100%; /* Adjust the video width as per your preference */
          height: 100%; /* Adjust the video height as per your preference */
        }

        .logo-container {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          z-index: 1;
          height: 100vh;
        }

        .logo-image {
          max-width: 50%;
          height: auto;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .logo-image {
            max-width: 100%;
          }
        }

        @media (max-width: 480px) {
          .logo-image {
            width: 100%;
          }
        }

        .skeleton-image {
          width: 50%; /* Adjust the width of the skeleton image */
          padding: 1rem; /* Adjust the padding around the skeleton image */
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .skeleton-image {
            width: 100%;
          }
        }
      `}
      </style>



      <header className="bg-video top-28 border-t-2 border-b-2">












        <div className="video-container">





          <video className="video" autoPlay loop muted  >
            <source src="/word1.mp4" type="video/mp4" />
            {/* Add additional source elements for different video formats if needed */}
          </video>


        </div>
        <div className="logo-container">


    
   {
    loading? (

      <div
      className="gradient-text text-center font-extrabold tracking-tighter text-8xl"
    >
       VARTIX AEROSPACE
    </div>
    ):(
      <Image
      height={800}
      width={800}
      src="/logo.png"
      alt="VARTIX AEROSPACE Logo"
      className="logo-image justify-center"
      loading='lazy'


    />
      
    )
  
   }

         


        </div>

      </header>


    </>
  )
}

export default Hero
