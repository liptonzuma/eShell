/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Nav() {
    return (
        <div className='mt-5 w-3/12 bg-gray-200 fixed top-10 z-2 pb-10'>
            <nav className='nav-wrapper'>
                <ul className='nav text-lg text-gray-600'>
                    <li><a href=""><i className="fa fa-home pr-3"></i> Home</a></li>
                    <li><a href=""><i className="fa fa-laptop pr-3"></i> Brands</a></li>
                    <li><a href=""><i className="fa fa-handshake-o pr-3"></i> Hot deals</a></li>
                    <li><a href=""><i className="fa fa-list-alt pr-3"></i> Category</a></li>
                    <li><a href=""><i className="fa fa-bookmark-o pr-3"></i> Wishlist</a></li>
                    <li><a href=""><i className="fa fa-user-o pr-3"></i> Account</a></li>
                    <li><a href=""><i className="fa fa-comments-o pr-3"></i> Contact us</a></li>
                    <li><a href=""><i className="fa fa-anchor pr-3"></i> Support</a></li>
                    <li><a href=""><i className="fa fa-info-circle pr-3"></i> About us</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
