import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SB() {
  return (
    <Menu as="div" className="relative inline-block text-left ">
      <div>
        <Menu.Button className="inline-flex w-full  text-max-w-screen-xl md:text-max-w-screen-xl justify-center gap-x-1.5 rounded-md bg-black  px-3 py-2 font-semibold text-white shadow-sm  hover:border-b-2 border-white">
       
        OPPORTUNITY
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute -right-15 z-10 mt-2 w-56 origin-top-right rounded-md bg-black text-3xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  ">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <div
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-white',
                    'block px-4   py-2 text-xl  md:text-max-w-screen-xl'
                  )}
                >
                     
                     <Link href="https://docs.google.com/forms/d/1cZ-RVK2Luc0YMzP1V1FC0QAUUtzSss3NkO6xANtUu88/viewform?pli=1&pli=1&edit_requested=true">
                  <div >
                  INTERNSHIP
                    </div>   
                    </Link>
                    
                   
                    
                </div>
              )}
            </Menu.Item>
            {/* <Menu.Item>
              {({ active }) => (
                <div
               
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-white',
                    'block px-4 py-2  text-xl md:text-xl'
                  )}
                >
                     <Link href="">
                   
                   <div className='md: text-xl '>
                   JOB
                    </div>  
                    </Link>
                 
                </div>
              )}
            </Menu.Item> */}
           
         
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
