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
            src="https://cdn3.mageplaza.com/media/general/MImGnKu.png"
            alt="First slide"
          />
          <Carousel.Caption>
            
            {/* <button className="btn btn-outline-primary">Shop Now</button> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel_img"
            src="https://www.mconnectmedia.com/blog/wp-content/uploads/2017/11/holiday-saving-offer-1-800x400.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            
            {/* <button className="btn btn-primary">Shop Now</button> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
