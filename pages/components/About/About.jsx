/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
import React from "react";



import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Team from "../Team2";
import Ab2 from "./Ab2";


const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};
const animateComponentsOnScroll = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React. useEffect(() => {
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


const About = () => {
  const animationProps = animateComponentsOnScroll();
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
      />
      <nav>
        <div className="container">
         
        </div>
      </nav>
      <div className="header border-t-2 border-gray-900 -opacity-1 border-b-2">
        <div className="container">
          
        </div>
      </div>
     

      <motion.div className="animate-component" {...animationProps}>
      <Ab2/>
      </motion.div>
      
      <div className="team">
      
      
        
      <motion.div className="animate-component" {...animationProps}>
        <Team />
        </motion.div>
      </div>
    </div>

  );
};

export default About;
