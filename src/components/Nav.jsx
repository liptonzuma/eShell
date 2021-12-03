/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Nav() {
    return (
        <div className='mt-5 w-2/12 md:w-3/12 bg-gray-200 fixed top-10 z-2 h-50 pb-0 mt-0'>
            <nav className='nav-wrapper'>
                <ul className='nav1 nav text-lg text-gray-600 pt-4 invisible md:visible'>
                    <li><a href=""><i className="fa fa-home pr-3"></i> Home</a></li>
                    <li><a href="">
                    <details>
                        <summary><i className="fa fa-list-alt pr-3"></i>Brands</summary>
                        <p className='pl-12 py-2 text-gray-400 hover:text-gray-600 text-base text-gray-400 focus:text-gray-600'>Hp</p>
                        <p className='pl-12 py-2 text-gray-400 hover:text-gray-600 text-base text-gray-400 focus:text-gray-600 '>Dell</p>
                        <p className='pl-12 py-2 text-gray-400 hover:text-gray-600 text-base text-gray-400 focus:text-gray-600 '>Macbook</p>
                        <p className='pl-12 py-2 text-gray-400 hover:text-gray-600 text-base text-gray-400 focus:text-gray-600 '>Sony</p>
                        <p className='pl-12 py-2 text-gray-400 hover:text-gray-600 text-base text-gray-400 focus:text-gray-600 '>Lenovo</p>
                        <p className='pl-12 py-2 text-gray-400 hover:text-gray-600 text-base text-gray-400 focus:text-gray-600 '>Toshiba</p>
                        <p className='pl-12 py-2 text-gray-400 hover:text-gray-600 text-base text-gray-400 focus:text-gray-600 '>Samsung</p>
                    </details>
                    </a></li>
                    <li><a href=""><i className="fa fa-handshake-o pr-3"></i> Hot deals</a></li>
                    <li><a href="">
                    <details>
                        <summary><i className="fa fa-list-alt pr-3"></i> Category</summary>
                        <p className='pl-12 py-2 text-gray-400 hover:text-gray-600 text-base text-gray-400 focus:text-gray-600'>Fresh in box</p>
                        <p className='pl-12 py-2 text-gray-400 hover:text-gray-600 text-base text-gray-400 focus:text-gray-600 '>Next user</p>
                    </details>
                    </a></li>
                    <li><a href=""><i className="fa fa-bookmark-o pr-3"></i> Wishlist</a></li>
                    <li><a href=""><i className="fa fa-user-o pr-3"></i> Account</a></li>
                    <li><a href=""><i className="fa fa-comments-o pr-3"></i> Contact us</a></li>
                    <li><a href=""><i className="fa fa-anchor pr-3"></i> Support</a></li>
                    <hr className='h-0.5 bg-gray-300 mb-2'/>
                    <li><a href=""><i className="fa fa-info-circle pr-3"></i> About us</a></li>
                </ul>
                <ul className='nav text-lg text-gray-600 pt-4 visible md:invisible text-center text-xl'>
                    <li><a href=""title='Home'><i className="fa fa-home pr-3"></i></a></li>
                    <li><a href=""title='Brands'><i className="fa fa-laptop pr-3"></i></a></li>
                    <li><a href="" title='Hot Deals'><i className="fa fa-handshake-o pr-3"></i></a></li>
                    <li><a href="" title='Category'><i className="fa fa-list-alt pr-3"></i></a></li>
                    <li><a href="" title='Wishlist'><i className="fa fa-bookmark-o pr-3"></i></a></li>
                    <li><a href="" title='Account'><i className="fa fa-user-o pr-3"></i></a></li>
                    <li><a href="" title='Contact us'><i className="fa fa-comments-o pr-3"></i> </a></li>
                    <li><a href="" title='Support'><i className="fa fa-anchor pr-3"></i></a></li>
                    <hr className='h-0.5 bg-gray-300 mb-2'/>
                    <li><a href="" title='About us'><i className="fa fa-info-circle pr-3"></i></a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
