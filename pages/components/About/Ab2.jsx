import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';

const Ab2 = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url("https://fonts.googleapis.com/css?family=Roboto");
            p {
              color: rgb(245, 240, 240);
            }
            p {
              color: white;
            }
            body {
              margin: 0;
              padding: 0;
              font-family: "Roboto", sans-serif;
              position: relative;
              background-color: black;
            }
            nav {
              width: 100%;
              height: 100px;
              position: absolute;
              top: 0;
              z-index: 5;
            }
            .header {
              width: 100%;
              height: 500px;
              opacity: 0.8;
              margin-top: 50px;
              background-image: url("https://cdn.pixabay.com/photo/2014/12/27/16/38/planet-581239_1280.jpg");
              background-size: cover;
              background-position: bottom 90px;
            }
            .container {
              width: 100%;
            }
            .container h1 {
              font-size: 50px;
            }
            .about {
              padding: 5% 0;
              width: 100%;
              height: auto;
              background-color: #070707;
            }
            .about .left {
              padding: 2% 0;
              float: left;
              width: 50%;
              display: inline-block;
            }
            .about .right {
              width: 50%;
              display: inline-block;
            }
            .about .left h1 {
              text-align: center;
              color: #f9f2f2;
              margin: 0 0 10px 0;
            }
            .about .left hr {
              width: 20%;
              border-top: 2px solid #fcf9f9;
              border-bottom: none;
            }
            .about .left p {
              font-size: 1rem;
              margin: 40px auto;
              width: 80%;
            }
            .mission {
              padding: 5% 0;
              width: 100%;
              height: auto;
              background-color: #070707;
            }
            .mission .right {
              padding: 2% 0;
              width: 50%;
              display: inline-block;
            }
            .mission .left {
              float: left;
              width: 50%;
              display: inline-block;
            }
            .mission .left img {
              width: 100%;
            }
            .mission .right h1 {
              text-align: center;
              color: #efe7e7;
              margin: 0 0 20px 0;
            }
            .mission .right hr {
              width: 35%;
              border-top: 2px solid #efeaea;
              border-bottom: none;
            }
            .mission .right p {
              font-size: 1rem;
              margin: 40px auto;
              width: 80%;
            }
            .team {
              width: 90%;
              margin: auto;
            }
            /* Media Queries */
            @media screen and (max-width: 768px) {
              .about .left,
              .about .right,
              .mission .left,
              .mission .right {
                width: 100%;
                text-align: center;
                padding: 0;
              }
              .about .left hr,
              .mission .right hr {
                width: 35%;
              }
              .about .left p,
              .mission .right p {
                width: 80%;
              }
              .header {
                width: 100%;
                height: 500px;
                opacity: 0.8;
                background-image: url("https://cdn.pixabay.com/photo/2014/12/27/16/38/planet-581239_1280.jpg");
                background-size: cover;
                background-position: bottom;
              }
            }
          `,
        }}
      ></style>
      <div>
        <section className="bg-black dark:bg-gray-900">
          <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            {loading ? (
              <div className="animate-pulse bg-gray-800 dark:bg-gray-700 h-96 w-full" />
            ) : (
              <Image
                className="w-full dark:hidden"
                src="/D.jpeg"
                width={500}
                height={500}
                loading="lazy"
                alt="dashboard image"
              />
            )}

            <div className="mt-4 md:mt-0">
              <h2
                className={`mb-4 text-4xl tracking-tight font-extrabold text-white ${
                  loading ? 'animate-pulse' : ''
                }`}
              >
                {loading ? 'Loading...' : 'About Us'}
              </h2>
              <p
                className={`mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400 ${
                  loading ? 'animate-pulse' : ''
                }`}
              >
                {loading ? 'Loading content...' : "Inspired by two Sanskrit names, 'Vartis' means orbit and 'Antrix' means space, our company VartiX Aerospace Pvt. Ltd is dedicated to work in the space and defence field. We are just bunch of space enthusiast who has taken upon the challenge of providing space sector with most reliable and cost efficient solution to different sectors like launch vehicles, propulsion and other with our advanced technology." }
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Ab2;
