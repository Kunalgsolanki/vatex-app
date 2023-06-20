/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const Vision = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div role="status" className="flex items-center justify-center h-screen">
      <div className="max-w-sm p-8 border border-gray-200 rounded shadow animate-pulse">
        <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded"></div>
        <div className="h-2.5 bg-gray-200 rounded-full mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full"></div>
        <div className="flex items-center mt-4 space-x-3">
          <svg
            className="w-14 h-14 text-gray-200"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            ></path>
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
      <section className="min-h-screen -z-50 relative flex flex-1 items-center justify-center overflow-hidden mt-20 border-b-2">
        {/* video - start */}
        <div>
          <Image
            src="/V.jpg"
            width={1200}
            height={1100}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            alt=""
          />
        </div>
        {/* video - end */}

        {/* overlay - start */}
        <div className="absolute inset-0 bg-opacity-50 bg-black"></div>
        {/* overlay - end */}

        {/* content - start */}
        <div className="relative z-10">
          <div className="gradient-text text-center font-extrabold text-4xl tracking-tighter">
            VISION
          </div>
          <h1 className="font-custom text-2xl font-bold max-w-3xl mx-auto px-4 mt-10 text-start sm:px-6">
            Considering the problems of space/rocket launches, i.e., pollution, we aim to provide solutions with our
            advanced green propulsion system. The Hybrid Propulsion System will make the launch service more accessible
            and affordable. Along with launch services, the key focus of the company is to research and develop newer
            systems and make the technology more reliable.
          </h1>
        </div>
        {/* content - end */}
      </section>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(45deg, #f8a000, #f54ea2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default Vision;
