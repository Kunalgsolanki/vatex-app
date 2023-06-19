/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */


import React from 'react'




const Hero = () => {
  const [loading, setLoading] =React. useState(true);
  const [imageError, setImageError] = React.useState(false);



  const handleImageError = () => {
    setImageError(true);
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  return (
   
    <>
    

    
    
    <header className="bg-video">

     






    
  
    

              <div className="video-container">
                <video className="video" autoPlay loop muted loading="lazy">
                  <source src="/word.mp4" type="video/mp4" />
                  {/* Add additional source elements for different video formats if needed */}
                </video>
              </div>
              <div className="logo-container">

                
                
             


  
              {loading ||  imageError ? (
                  <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                  VARTIX AEROSPACE
                </h1>
              ):(


<img
src="/logo.png"
alt="VATIEX AEROSPACE Logo"
className="logo-image justify-center"
loading="lazy"

/>
              )}
                
                
              </div>
             
            </header>

            
    </>
  )
}

export default Hero
