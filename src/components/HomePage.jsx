import React from 'react'
import Navbar from '../shared/Navbar'
import Nav from './Nav'

function HomePage() {
    return (
        <div>
            <Navbar/>
            <div className='body'>
            <Nav/>
            </div>
        </div>
    )
}

export default HomePage
