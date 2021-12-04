import React from 'react'
import Navbar from '../shared/Navbar'
import CarouselSlider from './CarouselSlider'
import Content from './Content'

function HomePage() {
    return (
        <div>
            <Navbar/>
            <Content/>
            <CarouselSlider/>
        </div>
    )
}

export default HomePage
