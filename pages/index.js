/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect  } from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';
import Head from 'next/head'

const  Hero1 = dynamic(() => import('./Hero'));


const  Intro2 = dynamic(() => import('./Intro'));
const  Vision2 = dynamic(() => import('./Vision'));
const  Missions = dynamic(() => import('./Testmolio'));
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

const Hero = () => {
  const animationProps = animateComponentsOnScroll();

  return (
    <motion.div className="animate-component" {...animationProps}>
    <Hero1/>
    </motion.div>
  );
};

const Intro = () => {
  const animationProps = animateComponentsOnScroll();

  return (
    <motion.div className="animate-component" {...animationProps}>
      <Intro2 />
    </motion.div>
  );
};

const Vision = () => {
  const animationProps = animateComponentsOnScroll();

  return (
    <motion.div className="animate-component" {...animationProps}>
      <Vision2/>
    </motion.div>
  );
};

const Testmolio = () => {
  const animationProps = animateComponentsOnScroll();

  return (
    <motion.div className="animate-component" {...animationProps}>
     <Missions/>
    </motion.div>
  );
};


const Index = () => {
  return (
    <React.Fragment>
  
  <Head>
        <title> VARTIX AEROSPACE</title>
        <meta name="description" content="
        
        Welcome to VartiX Aerospace Pvt. Ltd: Revolutionizing Space Exploration

        Are you looking for a reliable and cost-efficient solution in the space and defense industry? Look no further! VartiX Aerospace Pvt. Ltd is your trusted partner in revolutionizing the way we explore and utilize space. Inspired by the Sanskrit names 'Vartis,' meaning orbit, and 'Antrix,' meaning space, our company is driven by a passion for all things celestial.
        
        At VartiX Aerospace, we are a team of dedicated space enthusiasts who have taken on the challenge of pushing the boundaries of technology to provide the space sector with cutting-edge solutions. We specialize in a wide range of services, including the development of launch vehicles, propulsion systems, and advanced technologies.
        
        Our mission is clear: to provide the most reliable and cost-efficient solutions to propel the space industry forward. We understand the critical nature of the space and defense field, and our team of experts works tirelessly to deliver innovative solutions that meet and exceed industry standards.
        
        Why choose VartiX Aerospace? Here are some key reasons:
        
        1. Advanced Technology: Our team leverages the latest advancements in technology to design and develop state-of-the-art solutions. We stay at the forefront of technological innovation to ensure that our clients receive the most cutting-edge products and services.
        
        2. Reliability: We understand the importance of reliability in the space and defense sector. That's why we meticulously test and validate our products to ensure they perform flawlessly under the most demanding conditions. You can trust VartiX Aerospace to deliver reliable solutions that meet your specific requirements.
        
        3. Cost Efficiency: We believe that the benefits of space exploration should be accessible to all. VartiX Aerospace is committed to providing cost-efficient solutions that make space exploration more affordable. We optimize our processes and leverage our expertise to deliver high-quality products without compromising on affordability.
        
        4. Customization: We recognize that every project has unique requirements. Our team works closely with clients to understand their specific needs and tailors solutions accordingly. Whether you need a customized launch vehicle or a specialized propulsion system, VartiX Aerospace has the expertise to deliver precisely what you need.
        
        5. Industry Expertise: With years of experience in the space and defense industry, our team possesses unparalleled expertise. We have successfully completed numerous projects and collaborations, earning a reputation for excellence and professionalism. When you choose VartiX Aerospace, you're partnering with a team that knows the ins and outs of the industry.
        
        Join us in shaping the future of space exploration. Contact VartiX Aerospace Pvt. Ltd today to discuss your requirements and discover how our reliable and cost-efficient solutions can elevate your space ventures. Together, let's reach for the stars and unlock the endless possibilities of the cosmos.
        
        " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/v2.png" />
      </Head>

<div>
      <Hero />
      <Intro />
      <Vision />
      <Testmolio  />
    
    </div>
    </React.Fragment>
  );
};

export default Index;
