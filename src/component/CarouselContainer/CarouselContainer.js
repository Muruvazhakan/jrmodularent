import React, { useEffect } from 'react';
import './CarouselContainer.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const CarouselContainer = (props) => {

    useEffect(() => {
        console.log(props.imgs);
    })
    return (
        <div className="img-container">
        <Carousel infiniteLoop stopOnHover autoPlay centerMode
        thumbWidth="200px" >
            {props.imgs.map(imageUrl => (

                <div>                 
                    <img className="img-style d-block w-100" src={imageUrl.src} />
                </div>
            ))}
        </Carousel>
        </div>
    )
}

export default CarouselContainer;