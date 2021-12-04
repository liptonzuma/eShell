import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import pc1 from '../assets/images/pc1.jpg'
import pc2 from '../assets/images/pc2.jpg'
import pc3 from '../assets/images/pc3.png'
import pc4 from '../assets/images/pc4.png'

const images = [
    pc1,pc2,pc3,pc4
]
export default function CarouselSlider(){
    return(
        <Carousel
        // showThumbs={false}
        showStatus={false}
        autoPlay={true}
        infiniteLoop={true}

        >
           {images.map((image,i)=><div className='relative carousel-item' key={i}>
               <img className='pt-20' src={image} alt="thumbnail" />
               <p className='absolute top-0 p-2 shadow bg-red-600 m-3 text-white'>New</p>
               <p className='text-left text-lg p-3 m-3 text-red-600 bg-gray-300  font-bold absolute bottom-24'>Price <span>$100</span></p>
           </div>)}
        </Carousel>
    )
}