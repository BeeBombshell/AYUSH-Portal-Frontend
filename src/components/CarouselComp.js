import React from "react";
import "./carouselComp.css";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import Carousel from 'react-bootstrap/Carousel';

const CarouselComp = () => {
    return (
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={img1}
            height={500}
            width={500}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={img2}
            height={500}
            width={500}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}


export default CarouselComp