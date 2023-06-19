/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import dynamic from 'next/dynamic';
import { throttle } from 'lodash'; // Import the throttle function

import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/components/About', current: false },
  { name: 'Service', href: '#', current: false },
  { name: 'Internship', href: '/components/Internship', current: false },
];

const ComponentA = dynamic(() => import('./Hero'));
const Intro = dynamic(() => import('./Intro'));

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0); // State variable for scroll position

  const handleScroll = throttle(() => {
    const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
    setScrollPosition(currentPosition);
  }, 200); // Throttle the scroll event with a delay of 200 milliseconds

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Clean up the event listener when the component is unmounted
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <style>
        {`
        .bg-video {
          position: relative;
        }

        .video-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        .video {
          object-fit: cover;
          width: 100%; /* Adjust the video width as per your preference */
          height: 100%; /* Adjust the video height as per your preference */
        }

        .logo-container {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          z-index: 1;
          height: 100vh;
        }

        .logo-image {
          max-width: 50%;
          height: auto;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .logo-image {
            max-width: 100%;
          }
        }

        @media (max-width: 480px) {
          .logo-image {
            width: 100%;
          }
        }

        .skeleton-image {
          width: 50%; /* Adjust the width of the skeleton image */
          padding: 1rem; /* Adjust the padding around the skeleton image */
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .skeleton-image {
            width: 100%;
          }
        }
      `}
      </style>

      <div>
        <div>
          {/* screen video section */}
          <ComponentA />

          {/* navbar */}
          <nav className="sticky top-0 bg-black p-5 drop-shadow shadow-black-50">
            <div className="flex items-center justify-between">
              <div className="text-white text-4xl">Vartix</div>
              <Disclosure as="div" className="md:hidden">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white border-t-2 border-b-2">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                    <Transition
                      show={open}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Disclosure.Panel className="md:hidden bg-black mt-2 py-2 px-4 border-t-2 border-b-2">
                        <ul className="flex flex-col items-center space-y-2">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <a
                               
                                className="text-white text-lg font-medium hover:text-gray-200"
                              >
                                <Link  href={item.href} >
                                
                             
                                {item.name}
                                </Link>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
              <div className="hidden md:flex space-x-7 justify-center align-middle">
                {navigation.map((item) => (
                  <div
                    key={item.name}
                    className="text-white font-medium hover:text-gray-200 text-4xl"
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </div>
                ))}
              </div>
            </div>
          </nav>

          {/* components */}
          <Intro />

          {/* Rest of your components */}
        </div>
      </div>
    </>
  );
};

export default Header;
