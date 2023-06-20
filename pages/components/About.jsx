/* eslint-disable @next/next/no-img-element */
import React from "react";
import Team from "./Team";
import Image from "next/image";

const About = () => {
  return (
    <div>
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
            background-color: rgba(51, 51, 51, 0.3);
            position: absolute;
            top: 0;
            z-index: 5;
          }
          .header {
            width: 100%;
            height: 500px;
            opacity: 0.8;
            background-color: rgb(0, 4, 6);
            background-image: url("https://cdn.pixabay.com/photo/2014/12/27/16/38/planet-581239_1280.jpg");
            background-size: cover;
            background-position: bottom;
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
          bout .left h1 {
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
            .about .left, .about .right, .mission .left, .mission .right {
              width: 100%;
              text-align: center;
              padding: 0;
            }
            .about .left hr, .mission .right hr {
              width: 35%;
             
            }
            .about .left p, .mission .right p {
              width: 80%;
             
            }
          }
          `,
        }}
      />
      <nav>
        <div className="container">
          <h1>About Us</h1>
        </div>
      </nav>
      <div className="header border-t-2 border-b-2">
        <div className="container">
          <h1>Welcome to Our Website</h1>
        </div>
      </div>
      <section className="bg-black dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <Image
            className="w-full dark:hidden"
            src="/s.jpg"
            width={800}
            height={800}
            loading="lazy"
            alt="dashboard image"
          />

          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">
              {" "}
              About Us
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              VartiX Aerospace is Orbital vehicle service providing company and it aims to challenge the long driven problem of space transportation which is the environmental outlook. Also we aim to fill the gap that is generated due to high costing of rocket service and affordability of new upcoming start-ups in India by providing low cost service using reusable technique and in house manufacturing capacity. But we are not just restricted to space. We also provide 3D printing solutions and space education for making youth of India more aware about this exciting industry.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-black dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"> OUR VISION</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Considering the problems of space/rocket launches ie. pollution, we aim to provide solutions with our advance green propulsion system. The Hybrid Propulsion System will make the launch service more accessible and affordable. Along with launch services the key focus of the company is to research and develop newer systems and make the technology more reliable.
              </p>

          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            < Image src="/M.jpeg"
              loading="lazy"
              width={800}
              height={800} alt={"mockup"} />
          </div>
        </div>
      </section>
      <div classNameName="team">
        <Team />
      </div>
    </div>
  );
};

export default About;
