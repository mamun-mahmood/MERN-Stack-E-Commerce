import React from "react";
import "./TrendingProducts.css";
import ProductCardCustom from "../ProductCardCustom/ProductCardCustom";
import Carousel from "react-elastic-carousel";
import Thumbnail1 from "../../Resources/thumb1212.png";
export default function TrendingProducts() {
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
        <p>trending products on imponexpo</p>
      </div>
      <div
        className="trending_products"
        style={{ width: "70%", marginLeft: "15%" }}
      >
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
