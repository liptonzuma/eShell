import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import coder from '../assets/img/coder.svg';
import Navbar from './Navbar'

function Home() {
    return (
        <div>
            <Navbar/>
            {/* Content */}
            <div className='w-screen h-screen bg-yellow-600 main'>
                {/* Text content */}
               <motion.div className="textContent w-1/2 pl-32  pt-44">
                        <motion.h1 className="text-4xl font-black text-gray-800 header">
                            I'm 
                        </motion.h1>
                        <motion.h1 className="pt-6 pl-4 font-black text-3xl text-gray-200 name">
                            Solomon Boateng
                        </motion.h1>
               </motion.div>
               {/* Image container */}
               <motion.div className="w-1/2 ImageContainer">
                   <img 
                   className='w-5/6'
                    src={coder} alt="code monkey" />
               </motion.div>
            
            </div>
        </div>
    )
}

export default Home
