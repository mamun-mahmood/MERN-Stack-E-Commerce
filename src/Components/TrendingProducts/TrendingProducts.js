import React from "react";
import "./TrendingProducts.css";
import ProductCard from "./ProductCard";
export default function TrendingProducts() {
  return (
    <div>
      <div className="trending_header">
        <p>trending products on imponexpo</p>
      </div>
      <div className="trending_products container">
        <div className="row">
          <div className="col-md-6 col-12  col-lg-3 mb-4">
            <ProductCard />
          </div>
          <div className="col-md-6 col-12  col-lg-3 mb-4">
            <ProductCard />
          </div>
          <div className="col-md-6 col-12  col-lg-3 mb-4">
            <ProductCard />
          </div>
          <div className="col-md-6 col-12  col-lg-3 mb-4">
            <ProductCard />
          </div>
          <div className="col-md-6 col-12  col-lg-3 mb-4">
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
}
