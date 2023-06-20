/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React, { useState, useEffect } from 'react';



const  Intro = () => {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (

    loading ? (

     
      <div role="status" className="flex items-center justify-center h-screen">
      <div className="max-w-sm p-8 border border-gray-200 rounded shadow animate-pulse">
        <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded"></div>
        <div className="h-2.5 bg-gray-200 rounded-full mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full"></div>
        <div className="flex items-center mt-4 space-x-3">
          <svg className="w-14 h-14 text-gray-200" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
          </svg>
          <div>
            <div className="h-2.5 bg-gray-200 rounded-full w-32 mb-2"></div>
            <div className="w-48 h-2 bg-gray-200 rounded-full"></div>
          </div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>



    
    ) : (

      <div>
        {/* components */}
        <section className="min-h-screen -z-50 relative flex flex-1 items-center  justify-center overflow-hidden  mt-20 border-t-2 border-b-2">
              {/* video - start */}
              <div  >
                <Image width={1200 } height={1100} src="/P.jpeg"  className="absolute inset-0 w-full h-full object-cover" 
                 loading='lazy'
                 alt={""}
                />
              </div>
              {/* video - end */}

              {/* overlay - start */}
              <div className="absolute inset-0 bg-opacity-50 bg-black"></div>
              {/* overlay - end */}

              {/* content - start */}
              <div className="relative z-10">
                <h1 className="font-custom text-4xl font-bold">THE SKY IS NOT THE LIMIT , ITS JUST THE BEGINNING.</h1>
              </div>
              {/* content - end */}

             
            </section>
    </div>
    )


    
  );
};

export default Intro;
