import React from "react";
import "./CarouselContainer.css";
import { Carousel } from "react-bootstrap";
export default function CarouselContailer() {
  return (
    <div className="carousel_container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel_img"
            src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/eehabecsfly0wy1pxxve/air-max-270-older-shoe-9KTdjGPz.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <button className="btn btn-outline-primary">Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel_img"
            src="https://photos.queens.cz/queens/2021-04/large/nike-air-max-zephyr-111362_1.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="btn btn-outline-primary">Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
