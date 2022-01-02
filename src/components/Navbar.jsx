/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import {motion} from 'framer-motion/dist/framer-motion'

function Navbar() {
    const [hide,setHide]= useState(false)
    return (
        <nav  className='fixed'>
            {/* toggler */}
            <motion.div className="icon visible lg:invisible cursor-pointer p-2 m-4 ml-6 lg:ml-10 icon bg-gray-900 text-yellow-600"
                onClick={()=>setHide(!hide)}
                
            >
              { hide ?  <i className="fa fa-chevron-right"></i> :<i className="fa fa-chevron-left"></i>}
            </motion.div>
            {/* nav */}
            <motion.div
            animate={hide?{x:-200}:{x:0} }
             className='w-20 visible lg:invisible navbar bg-gray-900 text-center h-screen '>
                <a className='cursor-pointer text-2xl  p-2 text-center ' title='home'>
                    <i className="fa fa-home focus:text-gray-300 hover:text-gray-300 text-yellow-600 p-5"></i>
                </a>

                <a className='cursor-pointer text-2xl  p-2 text-center ' title='about me'>
                    <i className="fa fa-user focus:text-gray-300 hover:text-gray-300 text-yellow-600 p-5"></i>
                </a>

                <a className='cursor-pointer text-2xl  p-2 text-center ' title='my works'>
                    <i className="fa fa-suitcase focus:text-gray-300 hover:text-gray-300 text-yellow-600 p-5"></i>
                </a>

                <a className='cursor-pointer text-2xl  p-2 text-center ' title="email me">
                    <i className="fa fa-envelope focus:text-gray-300 hover:text-gray-300 text-yellow-600 p-5"></i>
                </a>
            </motion.div>

            <motion.div  className='w-20 invisibile lg:visible navbar bg-gray-900 text-center h-screen '>
                <a className='cursor-pointer text-2xl  p-2 text-center ' title='home'>
                    <i className="fa fa-home focus:text-gray-300 hover:text-gray-300 text-yellow-600 p-5"></i>
                </a>

                <a className='cursor-pointer text-2xl  p-2 text-center ' title='about me'>
                    <i className="fa fa-user focus:text-gray-300 hover:text-gray-300 text-yellow-600 p-5"></i>
                </a>

                <a className='cursor-pointer text-2xl  p-2 text-center ' title='my works'>
                    <i className="fa fa-suitcase focus:text-gray-300 hover:text-gray-300 text-yellow-600 p-5"></i>
                </a>

                <a className='cursor-pointer text-2xl  p-2 text-center ' title="email me">
                    <i className="fa fa-envelope focus:text-gray-300 hover:text-gray-300 text-yellow-600 p-5"></i>
                </a>
            </motion.div>
           
        </nav>
    )
}

export default Navbar
