/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Navbar() {
    return (
        <nav className='w-20 navbar bg-gray-900 text-center h-screen fixed '>
            <a className='cursor-pointer text-2xl  p-2 text-center ' title='home'>
                <i className="fa fa-home hover:text-gray-300 text-yellow-600 p-5"></i>
            </a>

            <a className='cursor-pointer text-2xl  p-2 text-center ' title='about me'>
                <i className="fa fa-user hover:text-gray-300 text-yellow-600 p-5"></i>
            </a>

            <a className='cursor-pointer text-2xl  p-2 text-center ' title='my works'>
                <i className="fa fa-suitcase hover:text-gray-300 text-yellow-600 p-5"></i>
            </a>

            <a className='cursor-pointer text-2xl  p-2 text-center ' title="email me">
                <i className="fa fa-envelope hover:text-gray-300 text-yellow-600 p-5"></i>
            </a>

           
        </nav>
    )
}

export default Navbar
