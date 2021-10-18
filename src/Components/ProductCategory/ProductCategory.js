import React from "react";
import "./ProductCategory.css";
// import Image11 from "../../Resources/daiga-ellaby-uooMllXe6gE-unspl.png";
// import Image22 from "../../Resources/daiga-ellaby-uooMllXe6gE-unspl@2x.png";
import CarouImg from "../../Resources/carouImg.png";
import { Carousel } from "react-bootstrap";

import ContentImg55 from "../../Resources/carouimg55.png";

export default function ProductCategory() {
  return (
    <div className="bg-white pl-2 mt-3">
        <div className="trending_header mt-1">
          <p>product category</p>
        </div>
      <div className="container bg-light" style={{borderRadius: '20px'}}>
        <div className="row">
          <div className="col-md-2 bg- p-2 ">
            <div
              className="left_section pt-5 h-100"
            >
              <div className="">
                <p
                  className="first_option ml-3 pl-3 pt-2 pb-2 bg-white"
                  style={{
                    borderTopLeftRadius: "15px",
                    borderBottomLeftRadius: "15px",
                    color: "black",
                    fontWeight: "600",
                  }}
                >
                  Home, House, Garden & Kitchen
                </p>
              </div>
              <div className="element_style">
                <p>Deals</p>
              </div>
              <div className="element_style">
                <p>Group Import</p>
              </div>
              <div className="element_style">
                <p>To Sales</p>
              </div>
              <div className="element_style">
                <p>Trendings</p>
              </div>
              <div className="element_style">
                <p>Top Products</p>
              </div>
              <div className="element_style">
                <p>To Sales</p>
              </div>
              <div className="element_style">
                <p>Top Products</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 " style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Carousel >
                <Carousel.Item>
                    <img  src={CarouImg} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img  src={CarouImg} alt="" />
                </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-md-3 h-100">
            <div className="container-fluid">
              <div className="row hide_scrollBar mt-2" style={{overflowY: 'scroll'}}>
                <div className="col-md-6 mb-4 bg-light p-1 round">
                  <div>
                    <img src={ContentImg55} alt="" />
                    <p
                      style={{
                        position: "absolute",
                        top: "78%",
                        fontWeight: "600",
                        color: "white",
                      }}
                    >
                      Cookware
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mb-4 bg-light p-1 round">
                  <div>
                    <img src={ContentImg55} alt="" />
                    <p
                      style={{
                        position: "absolute",
                        top: "78%",
                        fontWeight: "600",
                        color: "white",
                      }}
                    >
                      Cookware
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mb-4 bg-light p-1 round">
                  <div>
                    <img src={ContentImg55} alt="" />
                    <p
                      style={{
                        position: "absolute",
                        top: "78%",
                        fontWeight: "600",
                        color: "white",
                      }}
                    >
                      Cookware
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mb-4 bg-light p-1 round">
                  <div>
                    <img src={ContentImg55} alt="" />
                    <p
                      style={{
                        position: "absolute",
                        top: "78%",
                        fontWeight: "600",
                        color: "white",
                      }}
                    >
                      Cookware
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mb-4 bg-light p-1 round">
                  <div>
                    <img src={ContentImg55} alt="" />
                    <p
                      style={{
                        position: "absolute",
                        top: "78%",
                        fontWeight: "600",
                        color: "white",
                      }}
                    >
                      Cookware
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mb-4 bg-light p-1 round">
                  <div>
                    <img src={ContentImg55} alt="" />
                    <p
                      style={{
                        position: "absolute",
                        top: "78%",
                        fontWeight: "600",
                        color: "white",
                      }}
                    >
                      Cookware
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mb-4 bg-light p-1 round">
                  <div>
                    <img src={ContentImg55} alt="" />
                    <p
                      style={{
                        position: "absolute",
                        top: "78%",
                        fontWeight: "600",
                        color: "white",
                      }}
                    >
                      Cookware
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mb-4 bg-light p-1 round">
                  <div>
                    <img src={ContentImg55} alt="" />
                    <p
                      style={{
                        position: "absolute",
                        top: "78%",
                        fontWeight: "600",
                        color: "white",
                      }}
                    >
                      Cookware
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3  p-2">
            <div
              className="right_section pt-5 pb-2 h-100"
            >
              <div className="">
                <p
                  className="first_option ml-3 pl-3 pt-2 pb-2 bg-white"
                  style={{
                    borderTopLeftRadius: "15px",
                    borderBottomLeftRadius: "15px",
                    color: "black",
                    fontWeight: "600",
                  }}
                >
                  Home, House, Garden & Kitchen
                </p>
              </div>
              <div className="element_style">
                <p>Deals</p>
              </div>
              <div className="element_style">
                <p>Group Import</p>
              </div>
              <div className="element_style">
                <p>To Sales</p>
              </div>
              <div className="element_style">
                <p>Trendings</p>
              </div>
              <div className="element_style">
                <p>Top Products</p>
              </div>
              <div className="element_style">
                <p>Latest Products</p>
              </div>
              <div className="element_style">
                <p>Cheap Price</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
