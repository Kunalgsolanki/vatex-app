/* eslint-disable react/jsx-key */
import React from 'react'
import Image from 'next/image'

import Umang from "./Images/Umang.jpeg"
import Vatsal from "./Images/Vatsal.jpeg"
import Keyur from "./Images/Keyur.jpeg"
import Hiral from "./Images/Hiral.jpeg"
import Dirgh from "./Images/Dirgh.jpeg"
import Nayan from "./Images/Nayan.jpeg"
import Khusi from "./Images/Khusi.jpeg"
import Nancy from "./Images/Nancy.jpeg"
import Bhumi from "./Images/Bhumi.jpeg"

//  add new employ data here  

const Employee =[
    
    {
        name : "UMANG SUDANI", 
        images : Umang, 
        possession:"FOUNDER AND CEO",
        linkdin :"https://www.linkedin.com/in/umang-sudani-73b2a819b", 


    },
    {
        name : "VATSAL", 
        images : Vatsal, 
        possession:"EMPLOYEE",
        linkdin :"", 


    },
    {
        name : "BHUMI SHAH", 
        images :  Bhumi, 
        possession:"EMPLOYEE",
        linkdin :"https://www.linkedin.com/in/bhumi-shah-1a79b51b1", 


    },
    {
        name : "KEYUR", 
        images : Keyur, 
        possession:"EMPLOYEE",
        linkdin :"https://www.linkedin.com/in/keyur-devganiya", 


    },
    {
        name : "HIRAL VORA", 
        images :  Hiral, 
        possession:"EMPLOYEE",
        linkdin :"https://www.linkedin.com/in/vorahiral02", 


    },
    {
        name : "DIRGH", 
        images : Dirgh, 
        possession:"EMPLOYEE",
        linkdin :"https://www.linkedin.com/in/dirgh-bhatt-1888a81ab/", 


    },
    {
        name : "NAYAN", 
        images : Nayan, 
        possession:"EMPLOYEE",
        linkdin :"https://www.linkedin.com/in/nayan-sandpa-139632202/", 


    },
    {
        name : "KHUSI SHAH", 
        images : Khusi, 
        possession:"EMPLOYEE",
        linkdin :"https://www.linkedin.com/in/khushi-shah-970a52203", 


    },
    {
        name : "NANCY PAREKH", 
        images : Nancy, 
        possession:"EMPLOYEE",
        linkdin :"https://www.linkedin.com/in/nancy-parekh-920364259", 


    }

]



const Team2 = () => {
  return (
    <div className="container my-24 mx-auto md:px-6">
              <section className="mb-32 text-center">
              <h2 className="mb-12 text-3xl font-bold">
            Meet the <u className="text-primary dark:text-primary-400">team</u>
          </h2>

          <div className="lg:gap-xl-12 grid gap-x-6 mt-5 md:grid-cols-2 lg:grid-cols-4">

      {
        Employee.map((employ , index)=>(
            <div className="mb-12 md:mb-0">


            <Image className="mx-auto mb-6 mt-10 rounded-lg shadow-lg dark:shadow-black/20 " width={1000} height={1000} src={employ.images} id={index} alt="avatar" />

            <h5 className="mb-4 text-lg font-bold" id={index}>{employ.name}</h5>
            <p className="mb-6" id={index}> { employ.possession}</p>

            <ul className="mx-auto flex list-inside justify-center">

            
                <a href={employ.linkdin} id={index} className="px-2">

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 text-primary dark:text-primary-400">
                    <path fill="currentColor"
                      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
             
            </ul>

          </div>
    
        ) )
      }

          </div>


              </section>
    </div>
  )
}

export default Team2
