/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import cart from '../assets/icons/shopping-cart.png'
import wishlist from '../assets/icons/wishlist.png'
import search from '../assets/icons/search.png'

function Navbar() {
    return (
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
                  <div className='cart search cursor-pointer'>
                    <img className='w-9'  src={search} alt="shopping cart"/>
                </div>
                <form className='form'>
                <input spellCheck='true'
                 autoComplete='true' 
                 placeholder='search laptop name' 
                 className='border p-1 rounded text-black'

                 />
                <a
                className="p-2 bg-red-600 rounded cursor-pointer">
                    search 
                </a>
                </form>
            </div>
            {/* icons */}
            <div className='flex flex-row justify-around'>
                
                {/* shopping cart */}
                <div className='cart relative'>
                    <img className='w-8'  src={wishlist} alt="shopping cart"/>
                    <p className='absolute top-0 left-5 text-center badge rounded-full text-sm px-2 bg-red-500 text-white'>
                        {10}
                    </p>
                </div>
                {/* wishlist */}
            <div className='cart relative ml-10'>
                    <img className='w-9'  src={cart} alt="shopping cart"/>
                    <p className='absolute top-0 left-5 text-center badge rounded-full text-sm px-2 bg-red-500 text-white'>
                        {10}
                    </p>
            </div>
            </div>
            
        </nav>
    )
}

export default Navbar
