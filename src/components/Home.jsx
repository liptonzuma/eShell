import React from 'react'
import Navbar from './Navbar'
import me from '../assets/me.png'

function Home() {
    return (
        <div>
            <Navbar/>
            {/* Content */}
            <div className='w-screen h-screen bg-gray-800 main'>
                {/* Text content */}
                <h1 className='text-gray-200 big bg-gray-800'>
                    I<span className='text-yellow-600'>'</span>m Solomon
                </h1>
            
            </div>
        </div>
    )
}

export default Home
