/* eslint-disable jsx-a11y/anchor-is-valid */
import React ,{ useState }from 'react'
import cart from '../assets/icons/shopping-cart.png'
import wishlist from '../assets/icons/wishlist.png'
import search from '../assets/icons/search.png'
import {motion} from 'framer-motion/dist/framer-motion'

function Navbar() {
    const [open,setOpen]= useState(false)
    return (
    <div>
        <nav 
        className='items-center bg-gray-900 flex justify-between py-4 px-4 text-white'>
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
                    <img className='w-9'  src={search} alt="shopping cart"/>
                </div>
                <form className='form'>
                <input spellCheck='true'
                 autoComplete='true' 
                 placeholder='search laptop name' 
                 className='border p-1 rounded text-black text-gray-600'

                 />
                <a
                className="p-2 bg-red-600 rounded cursor-pointer">
                    search 
                </a>
                </form>
            </div>
            {/* icons */}
            <div className='flex flex-row justify-around px-3'>
                
                {/* shopping cart */}
                <div className='cart relative ml'>
                    <img className='md:w-8 w-5 mt-1'  src={wishlist} alt="shopping cart"/>
                    <p className='absolute top-1 left-5 text-center badge rounded-full text-sm md:px-2 px-1 bg-red-500 text-white'>
                        {10}
                    </p>
                </div>
                {/* wishlist */}
            <div className='cart relative ml-10'>
                    <img className='md:w-9 w-6'  src={cart} alt="shopping cart"/>
                    <p className='absolute top-0 left-5 text-center badge rounded-full text-sm md:px-2 px-1 bg-red-500 text-white'>
                        {10}
                    </p>
            </div>
            </div>
            
        </nav>
        <motion.div 
            animate={open?{y:0,opacity:1}:{y:-100,opacity:0}}
        className='flex justify-center mt-5'>
        <form className=' shadow'>
                <input spellCheck='true'
                 autoComplete='true' 
                 placeholder='search laptop name' 
                 className='text-gray-600 border p-1 rounded text-black'

                 />
                <a
                className="text-white p-2 bg-red-600 rounded cursor-pointer">
                    <i className="fa fa-search"></i>
                </a>
                </form>
        </motion.div>
        </div>
    )
}

export default Navbar
