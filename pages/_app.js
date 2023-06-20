import '@/styles/globals.css';

import { ThemeProvider } from "@material-tailwind/react";
import Navbar from "./Hedaer"
import Footer from './Footer';




export default function App({ Component, pageProps }) {
  return (
    <>

    
     <Navbar/>
     <ThemeProvider>


      
    <Component {...pageProps} />
    </ThemeProvider>

   <Footer/>
    
   
    </>
  );
}
