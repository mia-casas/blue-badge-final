import React from "react";
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function RecipeCarousel() {
    return (
        <div class="carousel-wrapper">
            <Carousel>
                <div>
                    <h1>1</h1>
                </div>
                <div>
                    <h1>2</h1>
                </div>
                <div>
                    <h1>3</h1>
                </div>
            </Carousel>
        </div>
    );
}
