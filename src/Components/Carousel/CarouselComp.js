import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";


const CarouselComp = () => {
    return (
        <div>
            <Carousel controls={true} className="carousel">
                {/* <Carousel.Item className="w-full">
                    <img
                        className="flex justify-center items-center img-fluid"
                        src="Images/shrisatya9.jpg"
                        alt="First slide"
                    />
                </Carousel.Item> */}
                <Carousel.Item className="w-full">
                    <img
                        className="flex justify-center items-center img-fluid"
                        src="Images/slider-01.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                {/* <Carousel.Item>
                    <img
                        className="flex justify-center items-center img-fluid"
                        src="Images/shrisatya2.png"
                        alt="Second slide"
                    />
                </Carousel.Item> */}
                <Carousel.Item>
                    <img
                        className="flex justify-center items-center img-fluid"
                        src="Images/slider-02.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                { /*<Carousel.Item>
                    <img
                        className="flex justify-center items-center img-fluid"
                        src="Images/shrisatya1.png"
                        alt="Fourth slide"
                    />
                </Carousel.Item>*/}
                <Carousel.Item>
                    <img
                        className="flex justify-center items-center img-fluid"
                        src="Images/satya 1.png"
                        alt="Fifth slide"
                    />
                </Carousel.Item>
                {/* <Carousel.Item>
                    <img
                        className="flex justify-center items-center img-fluid"
                        src="Images/6.jpg"
                        alt="Sixth slide"
                    />
                </Carousel.Item> */}
                
            </Carousel>
        </div>
    );
};

export default CarouselComp;
