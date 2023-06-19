/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */


import React from 'react'







const Hero = () => {
  




  return (
   
    <>
    

    
    
    <header className="bg-video">

     






    
    
    

              <div className="video-container">

              

           
              
                    <video className="video" autoPlay loop muted  >
                  <source src="/word1.mp4" type="video/mp4" />
                  {/* Add additional source elements for different video formats if needed */}
                </video>
                
                
              </div>
              <div className="logo-container">

                
                
             


  
              

<img
src="/logo.png"
alt="VATIEX AEROSPACE Logo"
className="logo-image justify-center"

/>
                
                
              </div>
             
            </header>

            
    </>
  )
}

export default Hero
