import React from 'react'
import Navbar from './Navbar'

function Home() {
    return (
        <div>
            <Navbar/>
            {/* Content */}
            <div className='w-screen h-screen bg-yellow-600 main'>
                {/* Text content */}
                <h1 className='text-gray-200 big'>
                    hello
                </h1>
            
            </div>
        </div>
    )
}

export default Home
