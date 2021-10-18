import React from "react";
import "./TrendingService.css";
import Carousel from "react-elastic-carousel";
import ProductCardCustom from "../ProductCardCustom/ProductCardCustom";
import Thumbnail1 from "../../Resources/gym.png";
export default function TrendingService() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 750, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
    { width: 1600, itemsToShow: 5 },
  ];
  return (
    <div>
      <div className="trending_header">
        <p>trending services on imponexpo</p>
      </div>
      <div className="trending_products" style={{ width: "98%", marginLeft: "1%" }}>
        <Carousel breakPoints={breakPoints}>
          <div className="mb-4">
            <ProductCardCustom Thumbnail1={Thumbnail1} />
          </div>
          <div className="mb-4">
            <ProductCardCustom Thumbnail1={Thumbnail1} />
          </div>
          <div className="mb-4">
            <ProductCardCustom Thumbnail1={Thumbnail1} />
          </div>
          <div className="mb-4">
            <ProductCardCustom Thumbnail1={Thumbnail1} />
          </div>
          <div className="mb-4">
            <ProductCardCustom Thumbnail1={Thumbnail1} />
          </div>
          <div className="mb-4">
            <ProductCardCustom Thumbnail1={Thumbnail1} />
          </div>
          <div className="mb-4">
            <ProductCardCustom Thumbnail1={Thumbnail1} />
          </div>
          <div className="mb-4">
            <ProductCardCustom Thumbnail1={Thumbnail1} />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
