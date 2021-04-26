import React, { useState } from "react";
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function RecipeCarousel() {
    const [item1, setItem1] = useState(`https://www.edamam.com/web-img/1a7/1a7e8a7208e149b15e3d1ee51d77e7aa.jpg`)
    const [item2, setItem2] = useState(`https://www.edamam.com/web-img/1a7/1a7e8a7208e149b15e3d1ee51d77e7aa.jpg`)
    const [item3, setItem3] = useState(`https://www.edamam.com/web-img/1a7/1a7e8a7208e149b15e3d1ee51d77e7aa.jpg`)


    return (

        <div class="carousel-wrapper">

            <Carousel>

                <div>
                    <img src={item1}/>                                       
                    <h2>Item 1</h2>
                </div>
                
                <div>
                <img src={item2}/>
                <h2>Item 2</h2>
                </div>

                <div>
                <img src={item3}/>
                <h2>Item 3</h2>
                </div>

            </Carousel>

        </div>

    );
    
}
