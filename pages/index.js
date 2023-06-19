import dynamic from 'next/dynamic';
import React from 'react'


const  Testmolio = dynamic(() => import('./Testmolio'));

const  Navabr = dynamic(() => import('./Hedaer'));
const index = () => {
  return (
    <div>
       <Navabr/>
     <Testmolio/>
    </div>
  )
}

export default index
