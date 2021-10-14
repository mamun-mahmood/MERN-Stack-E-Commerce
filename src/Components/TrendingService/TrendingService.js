import React from "react";
import "./TrendingService.css";
import ProductCard from '../TrendingProducts/ProductCard'
export default function TrendingService() {
  return (
    <div>
      <div className="trending_header">
        <p>trending services on imponexpo</p>
      </div>
      <div className="trending_products container">
        <div className="row">
          <div className="col-md-6 col-6 col-lg-3 mb-4">
            <ProductCard />
          </div>
          <div className="col-md-6 col-6 col-lg-3 mb-4">
            <ProductCard />
          </div>
          <div className="col-md-6 col-6 col-lg-3 mb-4">
            <ProductCard />
          </div>
          <div className="col-md-6 col-6 col-lg-3 mb-4">
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
}
