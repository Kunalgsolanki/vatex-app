/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";


const Vision = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

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

      <header className="bg-video  border-t-2 border-b-2 border-gray-800">

        {/*  earth video */}
        <div className="video-container">

          <video className="video" autoPlay loop muted>
            <source src="/V.webm" type="video/mp4" loading="lazy" />

          </video>
        </div>
        <div className="logo-container">
          {/*  reloaded text */}
          {loading ? (
            <div className="gradient-text text-center font-extrabold tracking-tighter text-3xl md:text-6xl">
              VARTIX AEROSPACE
            </div>
          ) : (

            <div className="relative z-10 mb-60">


              <section className="bg-transparent dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                  <div className="max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">
                    <motion.div
                className="gradient-text text-center mt-20 font-extrabold tracking-tighter text-3xl md:text-6xl"
                initial={{ opacity: 0, y: -20 }} // Initial animation properties
                animate={{ opacity: 1, y: 0 }} // Animation properties to transition to
                transition={{ duration: 0.5, delay: 0.3 }} // Transition duration and delay
              >
                      <div className="gradient-text text-start mt-20  font-extrabold tracking-tighter text-7xl ">
                        VISION
                      </div>
                      </motion.div>
                    </h2>
                    <motion.div
                className="text-container"
                initial={{ opacity: 0, y: -20 }} // Initial animation properties
                animate={{ opacity: 1, y: 0 }} // Animation properties to transition to
                transition={{ duration: 1, delay: 1 }} // Transition duration and delay
              >
                    <p className=" text-white sm:text-xl font-semibold dark:text-gray-400">                     Considering the problems of space/rocket launches, such as pollution, we aim to provide a solution with our advanced green propulsion.</p>
                    <p className="  font-semibold text-white sm:text-xl dark:text-gray-400">  To bring the knowledge of Rocket Science and the concept of DIY in rocketry field so that it can be accessed by space enthusiasts more easily. </p>
                    <p className="  font-semibold text-white sm:text-xl dark:text-gray-400"> To improve the current technology and to make it. more reliable for the future development </p>

                    </motion.div>
                  </div>
                </div>
              </section>
            </div>


          )}
        </div>
      </header>
    </>
  );
};

export default Vision;
