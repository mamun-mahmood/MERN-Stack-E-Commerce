import React from "react";
import './ProductCard2.css'
export default function ProductCar2() {
  return (
    <div>
      <div className="container page-wrapper">
        <div className="page-inner">
          <div className="row">
            <div className="el-wrapper">
              <div className="box-up">
                <img
                  className="img"
                  src="https://static.nike.com/a/images/w_960,c_limit,f_auto/eztjfgupmyeql2l85rax/air-jordan-1-banned.jpg"
                  alt="image"
                />
                <div className="img-info">
                  <div className="info-inner">
                    <span className="p-name">Air Jordan Retro High OG</span>
                    <span className="p-company">Nike</span>
                  </div>
                </div>
              </div>

              <div className="box-down">
                <div className="h-bg">
                  <div className="h-bg-inner"></div>
                </div>

                <a className="cart" href="">
                  <span className="price">$120</span>
                  <span className="add-to-cart">
                    <span className="txt">Buy Now</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
