/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'

function Content() {
    return (
        <nav className='flex justify-center'>
            <ul className='main-nav flex justify-around gap-10 text-gray-500 py-2 font-medium text-base md:text-lg'>
                <li><a href="">Home</a></li>
                <li><a href="">Brands</a></li>
                <li><a href="">Category</a></li>
                <li><a href="">Hot Deals</a></li>
                <li><a href="">Contact us</a></li>
            </ul>
        </nav>
    )
}

export default Content
