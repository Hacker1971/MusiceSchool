import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../assets/carosel-01.jpg';
import img6 from '../../assets/carosel-06.jpg';
import img4 from '../../assets/carosel-04.jpg';


const Carosale = () => {
    return (
        <div className='h-{100vh}'>
           <Carousel>
            <div>
                <img  src={img1}/>
            </div>
           
            <div>
                <img  src={img6}/>
            </div>
            <div>
                <img  src={img4}/>
            </div>
           
            <div>
                <img  src={img6}/>
            </div>
           
            
        </Carousel>
        </div>
    );
};

export default Carosale;