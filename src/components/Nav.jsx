/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Nav() {
    return (
        <div>
            <nav className=' flex justify-center'>
                <ul className='w-2/4 text-gray-700 text-lg font-medium flex items-center justify-around'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Brands</a></li>
                    <li><a href="#">Hot Deals</a></li>
                    <li><a href="#">Category</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
