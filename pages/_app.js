import '@/styles/globals.css';

import { ThemeProvider } from "@material-tailwind/react";

import Footer from './Footer';




export default function App({ Component, pageProps }) {
  return (
    <>
     
     <ThemeProvider>

      
    <Component {...pageProps} />
    </ThemeProvider>

   <Footer/>
    
   
    </>
  );
}
