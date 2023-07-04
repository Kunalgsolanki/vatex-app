import '../styles/globals.css';
import localFont from 'next/font/local'

import { ThemeProvider } from "@material-tailwind/react";
import Navbar from "./Hedaer"
import Footer from './Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const myFont = localFont({ src: './ArtifaktElement-Regular.ttf' })

const variants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: { duration: 0.5 },
  },
};


export default function App({ Component, pageProps }) {
  const router = useRouter();
  
 
  return (
    <>
    

<ThemeProvider>
<main className={myFont.className}>
     <Navbar/>

 
     <AnimatePresence >
     <motion.div
        key={router.route}
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants}
      >
       
        <Component {...pageProps} />
        
    
  

    
    </motion.div>
    </AnimatePresence>
   <Footer/>
   </main>
   </ThemeProvider>
    
   
    </>
  );
}
