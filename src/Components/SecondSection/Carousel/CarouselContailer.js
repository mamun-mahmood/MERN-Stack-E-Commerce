import React from "react";
import { Carousel } from "react-bootstrap";
import "./CarouselContainer.css";
import {
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CImage,
} from "@coreui/react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CarouselContailer() {
  return (
    <div className="carousel_container">
      <CCarousel controls indicators>
        <CCarouselItem>
          <CImage
            className="d-block w-100 carousel_img"
            src="https://about.zination.com/wp-content/uploads/2018/05/ecommerce-banner11.png"
            alt="slide 1"
          />
          <CCarouselCaption>
            <h3 className="text-dark">This is a slide</h3>
            <button className="btn btn-outline-primary">Shop Now</button>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100 carousel_img"
            src="https://www.seekpng.com/png/detail/409-4097069_fw-1-e-commerce-banner-png.png"
            alt="slide 2"
          />
          <CCarouselCaption>
            <h3 className="text-dark">This is a slide</h3>
            <button className="btn btn-outline-primary">Shop Now</button>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100 carousel_img"
            src="https://kodedweb.co.uk/wp-content/uploads/2017/07/which-ecommerce-banner.jpg"
            alt="slide 3"
          />
          <CCarouselCaption>
            <h3 className="text-dark">This is a slide</h3>
            <button className="btn btn-outline-primary">Shop Now</button>
          </CCarouselCaption>
        </CCarouselItem>
      </CCarousel>
    </div>
  );
}
