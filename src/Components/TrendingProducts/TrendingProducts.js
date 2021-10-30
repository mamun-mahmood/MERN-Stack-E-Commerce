import React, { useEffect, useState } from "react";
import "./TrendingProducts.css";
import ProductCardCustom from "../ProductCardCustom/ProductCardCustom";
import Carousel from "react-elastic-carousel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axios from "axios";

export default function TrendingProducts() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 750, itemsToShow: 3 },
    { width: 1100, itemsToShow: 4 },
    { width: 1600, itemsToShow: 5 },
  ];
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5001/allProducts")
      .then((res) => {
        setAllProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="bg-white mt-5" style={{ position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="left_border"></div>
        <div className="right_border"></div>
      </div>
      <div className="trending_header">
        <p>trending products on imponexpo</p>
      </div>
      <div
        className="trending_products"
        style={{ width: "98%", marginLeft: "1%" }}
      >
        <Carousel breakPoints={breakPoints}>
          {allProducts.map((pd) => (
            <div className="mb-4">
              <ProductCardCustom key={pd._id} data={pd} />
            </div>
          ))}
        </Carousel>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          className="p_style mt-3 box_shadow"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "white",
            width: "335px",
            height: "54px",
            borderRadius: "30px",
            backgroundColor: "#326dcb",
            marginBottom: "15px",
          }}
        >
          <p className="m-0 ml-5" style={{ fontWeight: "600" }}>
            Explore More Products
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "54px",
              height: "54px",
              backgroundColor: "white",
              borderRadius: "50%",
              padding: "0px 0px",
            }}
          >
            <ArrowForwardIosIcon
              className=""
              style={{
                color: "#326dcb",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
