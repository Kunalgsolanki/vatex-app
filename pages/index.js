import dynamic from 'next/dynamic';
import React from 'react'


const  Testmolio = dynamic(() => import('./Testmolio'));

const  Hero = dynamic(() => import('./Hero'));
const  Intro = dynamic(() => import('./Intro'));
const index = () => {
  return (
    <div>
        <Hero/>
        <Intro />
        
     <Testmolio/>
    </div>
  )
}

export default index
