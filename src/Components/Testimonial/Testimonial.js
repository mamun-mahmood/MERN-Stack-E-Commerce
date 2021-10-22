import React from "react";
import Carousel from "react-elastic-carousel";
import TestimonialCard from "./TestimonialCard";

export default function Testimonial() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
    { width: 1600, itemsToShow: 5 },
  ];
  return (
    <div className="mt-5 bg-white section_border_top">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="left_border"></div>
        <div className="right_border"></div>
      </div>
      <div className="container-fluid">
        <div className="trending_header">
          <p>Testimonial</p>
        </div>
        <Carousel breakPoints={breakPoints}>
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
