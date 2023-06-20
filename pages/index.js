import dynamic from 'next/dynamic';



const  Testmolio = dynamic(() => import('./Testmolio'));

const  Hero = dynamic(() => import('./Hero'));
const  Intro = dynamic(() => import('./Intro'));
const  Vision = dynamic(() => import('./Vision'));
const index = () => {
  return (
    <div>
      
        <Hero/>
        <Intro />
  <Vision/>
        <div >
        <Testmolio />
        </div>
    
    </div>
  )
}

export default index
