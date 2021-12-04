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
        >
           {images.map((image,i)=><div key={i}>
               <img className='w-full' src={image} alt="thumbnail" />
           </div>)}
        </Carousel>
    )
}