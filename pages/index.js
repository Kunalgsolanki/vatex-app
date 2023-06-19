import dynamic from 'next/dynamic';
import React from 'react'
import Header from './Hedaer';

const  Testmolio = dynamic(() => import('./Testmolio'));
const index = () => {
  return (
    <div>
      <Header/>
     <Testmolio/>
    </div>
  )
}

export default index
