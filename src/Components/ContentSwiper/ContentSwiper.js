import React from "react";
import Carousel from "react-elastic-carousel";
// import Item from "./Item";
// import "./styles.css";
export default function ContentSwiper(props) {
  const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 },
  ];
  const slideData = props.data.slideData;
  console.log(slideData);
  return (
    <div className="App">
      <Carousel breakPoints={breakPoints}>
        {slideData.map((slide) => (
          <div style={{width: '150px'}}>
            <img src={slide.item} alt="image" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
