/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import Umang from "./Images/Umang.jpeg"
import Vatsal from "./Images/Vatsal.jpeg"
import Keyur from "./Images/Keyur.jpeg"
import Hiral from "./Images/Hiral.jpeg"
import Dirgh from "./Images/Dirgh.jpeg"
import Nayan from "./Images/Nayan.jpeg"
import Khusi from "./Images/Khusi.jpeg"
import Nancy from "./Images/Nancy.jpeg"
import Bhumi from "./Images/Bhumi.jpeg"
import { motion } from 'framer-motion';
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5
    }
  }
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}





const Team = () => {
  return (
    <div>

      <div className="container my-24 mx-auto md:px-6">

        <section className="mb-32 text-center">
          <h2 className="mb-12 text-3xl font-bold">
            Meet the <u className="text-primary dark:text-primary-400">team</u>
          </h2>

          <div className="lg:gap-xl-12 grid gap-x-6 mt-5 md:grid-cols-2 lg:grid-cols-4">
            {/*  Umang */}

            
            <motion.div
    variants={container}
    initial="hidden"
    animate="show"
  >
            <div className="mb-12 md:mb-0">

          
              <Image className="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 " width={1000} height={1000} src={Umang} alt="avatar" />
              
              <h5 className="mb-4 text-lg font-bold">UMANG SUDANI</h5>
              <p className="mb-6">FOUNDER AND CEO</p>
            
              <ul className="mx-auto flex list-inside justify-center">
               
              <motion.li variants={item} >
                <a href="https://www.linkedin.com/in/umang-sudani-73b2a819b" className="px-2">

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 text-primary dark:text-primary-400">
                    <path fill="currentColor"
                      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
                </motion.li>
              </ul>
              
            </div>
            </motion.div>
           
            {/*  vatsal */}
            <div className="mb-12 lg:mb-0">
              <Image className="mx-auto mb-6 rounded-full shadow-lg dark:shadow-black/20 " width={3000} height={3000} src={Vatsal} alt="avatar1" />
              <h5 className="mb-4 text-lg font-bold">VATSAL </h5>
              <p className="mb-6">EMPLOYEE</p>
              <ul className="mx-auto flex list-inside justify-center">
               
               
                <a href="#!" className="px-2">

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 text-primary dark:text-primary-400">
                    <path fill="currentColor"
                      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </ul>
            </div>
            {/*  Keyur */}
            <div className="mb-12 md:mb-0">
              <Image className="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 " width={1000} height={1000} src={Keyur} alt="avatar" />
              <h5 className="mb-4 text-lg font-bold">KEYUR</h5>
              <p className="mb-6">EMPLOYEE</p>
              <ul className="mx-auto flex list-inside justify-center">
               
               
                <a href="https://www.linkedin.com/in/keyur-devganiya" className="px-2">

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 text-primary dark:text-primary-400">
                    <path fill="currentColor"
                      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </ul>
            </div>

            {/*  Hiral */}
            <div className="mb-12 md:mb-0">
              <Image className="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 " width={1000} height={1000} src={Hiral} alt="avatar" />
              <h5 className="mb-4 text-lg font-bold">HIRAL VORA </h5>
              <p className="mb-6">EMPLOYEE</p>
              <ul className="mx-auto flex list-inside justify-center">
               
                <a href="https://www.linkedin.com/in/vorahiral02" className="px-2">

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 text-primary dark:text-primary-400">
                    <path fill="currentColor"
                      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
             
              </ul>
            </div>
          </div>
         

         
          <div className="lg:gap-xl-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
            {/*  Dirgh */}
            <div className="mb-12 lg:mb-0">
              <Image className="mx-auto mb-6 rounded-full shadow-lg dark:shadow-black/20 " width={3000} height={3000} src={Dirgh} alt="avatar" />
              <h5 className="mb-4 text-lg font-bold">DIRGH</h5>
              <p className="mb-6">EMPOYEE</p>
              <ul className="mx-auto flex list-inside justify-center">
                
                
                <a href="https://www.linkedin.com/in/dirgh-bhatt-1888a81ab/" className="px-2">

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 text-primary dark:text-primary-400">
                    <path fill="currentColor"
                      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </ul>
            </div>
            {/*  Nayan */}
            <div className="mb-12 lg:mb-0">
              <Image className="mx-auto mb-6 rounded-full shadow-lg dark:shadow-black/20 " width={3000} height={3000} src={Nayan} alt="avatar1" />
              <h5 className="mb-4 text-lg font-bold">NAYAN </h5>
              <p className="mb-6">EMPLOYEE</p>
              <ul className="mx-auto flex list-inside justify-center">
                
                <a href="https://www.linkedin.com/in/nayan-sandpa-139632202/" className="px-2">

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 text-primary dark:text-primary-400">
                    <path fill="currentColor"
                      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </ul>
            </div>
            {/* Khusi */}
            <div className="mb-12 md:mb-0">
              <Image className="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 " width={1000} height={1000} src={Khusi} alt="avatar" />
              <h5 className="mb-4 text-lg font-bold">KHUSI SHAH</h5>
              <p className="mb-6">EMPLOYEE</p>
              <ul className="mx-auto flex list-inside justify-center">
                
                <a href="https://www.linkedin.com/in/khushi-shah-970a52203" className="px-2">

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 text-primary dark:text-primary-400">
                    <path fill="currentColor"
                      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </ul>
            </div>
            {/*  Nancy */}
            <div className="mb-12 md:mb-0">
              <Image className="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 " width={1000} height={1000} src={Nancy} alt="avatar" />
              <h5 className="mb-4 text-lg font-bold">NANCY </h5>
              <p className="mb-6">EMPLOYEE</p>
              <ul className="mx-auto flex list-inside justify-center">
                <a href="#!" className="px-2">

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    className="h-4 w-4 text-primary dark:text-primary-400">
                    <path fill="currentColor"
                      d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z" />
                  </svg>
                </a>
                <a href="#!" className="px-2">

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 text-primary dark:text-primary-400">
                    <path fill="currentColor"
                      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
                <a href="#!" className="px-2">

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    className="h-4 w-4 text-primary dark:text-primary-400">
                    <path fill="currentColor"
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </ul>
            </div>
            {/*  Bhumi shah  */}
            <div className="mb-12 lg:mb-0 mt-7">
              <Image className="mx-auto mb-6 rounded-full shadow-lg dark:shadow-black/20 " width={3000} height={3000} src={Bhumi} alt="avatar" />
              <h5 className="mb-4 text-lg font-bold">BHUMI SHAH</h5>
              <p className="mb-6">EMPLOYEE</p>
              <ul className="mx-auto flex list-inside justify-center">


                <a href="https://www.linkedin.com/in/bhumi-shah-1a79b51b1
" className="px-2">

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 text-primary dark:text-primary-400">
                    <path fill="currentColor"
                      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </ul>
            </div>
          </div>

        </section>

      </div>

    </div>
  )
}

export default Team
