import React from 'react';

export const AutoPlay = () => {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide mx-auto" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src='./images/slides-1.jpg' className="d-block w-100" alt="first-slide" />
                </div>
                <div className="carousel-item">
                    <img src='./images/slides-2.jpg' className="d-block w-100" alt="second-slide" />
                </div>
                <div className="carousel-item">
                    <img src='./images/slides-3.jpg' className="d-block w-100" alt="third-slide" />
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}