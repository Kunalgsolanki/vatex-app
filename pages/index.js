/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect  } from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';
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
    <div>
      <Hero />
      <Intro />
      <Vision />
      <Testmolio />
    </div>
  );
};

export default Index;
