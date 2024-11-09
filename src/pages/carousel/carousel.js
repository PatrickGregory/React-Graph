import React from 'react';
import { Carousel } from 'react-bootstrap';

export const AutoPlay = () => {
    return (
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="./images/slides-1.jpg" class="d-block w-100" alt="carousel-1" />
                </div>
                <div class="carousel-item">
                    <img src="./images/slides-2.jpg" class="d-block w-100" alt="carousel-2" />
                </div>
                <div class="carousel-item">
                    <img src="./images/slides-3.jpg" class="d-block w-100" alt="carousel-3" />
                </div>
            </div>
        </div>
    )
}

export const Fade = () => {
    return (
        <div id="carouselExampleFade" class="carousel slide carousel-fade">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="./images/slides-1.jpg" class="d-block w-100" alt="carousel 1"/>
                </div>
                <div class="carousel-item">
                    <img src="./images/slides-2.jpg" class="d-block w-100" alt="carousel 2"/>
                </div>
                <div class="carousel-item">
                    <img src="./images/slides-3.jpg" class="d-block w-100" alt="carousel 3"/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden" aria-hidden="true">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden" aria-hidden="true">Next</span>
            </button>
        </div>
    );
}
export const Indicators = () => {
    return (
        <Carousel indicatorLabels={" "}>
            <Carousel.Item interval={1000}>
                <img src='./images/slides-1.jpg' className='h-100 w-100' alt='carousel 1' />    
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img src='./images/slides-2.jpg' className='h-100 w-100' alt='carousel 2' />
            </Carousel.Item>
            <Carousel.Item>
                <img src='./images/slides-3.jpg' className='h-100 w-100' alt='carousel 3' />
            </Carousel.Item>
        </Carousel>
    );
}
export const Captions = () => {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img src='./images/slides-1.jpg' className='h-100 w-100' alt='carousel 1' />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img src='./images/slides-2.jpg' className='h-100 w-100' alt='carousel 2' />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src='./images/slides-3.jpg' className='h-100 w-100' alt='carousel 3' />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
export const Controlled = () => {
    return (
        <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="./images/slides-1.jpg" class="d-block w-100" alt="carousels" />
                </div>
                <div class="carousel-item">
                    <img src="./images/slides-2.jpg" class="d-block w-100" alt="carousels" />
                </div>
                <div class="carousel-item">
                    <img src="./images/slides-3.jpg" class="d-block w-100" alt="carousels" />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}