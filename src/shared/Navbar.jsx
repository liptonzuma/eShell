/* eslint-disable jsx-a11y/anchor-is-valid */
import React ,{ useState }from 'react'
import cart from '../assets/icons/shopping-cart.png'
import search from '../assets/icons/search.png'
import {motion} from 'framer-motion/dist/framer-motion'

function Navbar() {
    const [open,setOpen]= useState(false)
    const performSearch=()=>{
    // To do
    }
    return (
    <div>
        <nav 
        className='z-20 fixed top-0 left-0 w-screen items-center bg-gray-900 flex justify-between py-4 px-4 text-white'>
            {/* logo */}
            <div className='logo-wrapper'>
                {/* logo icon */}
                <a href="/" 
                className='text-2xl font-black logo'>
                    teck<span className='text-red-500'>i</span>
                </a>
            </div>
            {/* Search box */}
            <div className='input-wrapper'>
                  {/* search  */}
                  <div 
                  onClick={()=>setOpen(!open)}
                  className='cart search cursor-pointer'>
                    <img className='w-7'  src={search} alt="shopping cart"/>
                </div>
                <form className='form'>
                <input
                 autoComplete='true' 
                 placeholder='search laptop name or brand name' 
                 className='border p-1 rounded text-black text-gray-600'

                 />
                <a
                // Add the function
                onClick={performSearch}
                className="p-2 bg-red-600 rounded cursor-pointer">
                    search 
                </a>
                </form>
            </div>
            {/* icons */}
            <div className='flex flex-row justify-around px-3'>
                {/* cart */}
            <div className='cart relative ml-10 cursor-pointer'>
                    <img className='md:w-9 w-6'  src={cart} alt="shopping cart"/>
                    <p className='absolute top-0 left-5 text-center badge rounded-full text-sm md:px-2 px-1 bg-red-500 text-white'>
                        {10}
                    </p>
            </div>
            </div>
            
        </nav>
        <motion.div 
            animate={open?{y:0,opacity:1}:{y:-100,opacity:0}}
        className='flex justify-center relative z-50 mt-20'>
        <form className='form2 shadow'>
                <input
                 autoComplete='true' 
                 placeholder='search laptop name or brand name' 
                 className='text-gray-600 border p-1 rounded text-black'

                 />
                <a
                onClick={performSearch}
                className="text-white p-2 bg-red-600 rounded cursor-pointer">
                    <i className="fa fa-search"></i>
                </a>
                </form>
        </motion.div>
        </div>
    )
}

export default Navbar
