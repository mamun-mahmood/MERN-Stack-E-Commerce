import React from "react";
import "./ProductCategory.css";
// import Image11 from "../../Resources/daiga-ellaby-uooMllXe6gE-unspl.png";
// import Image22 from "../../Resources/daiga-ellaby-uooMllXe6gE-unspl@2x.png";
import CarouImg from "../../Resources/carouImg.png";
import { Carousel } from "react-bootstrap";
import ContentImg55 from "../../Resources/carouimg55.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export default function ProductCategory() {
  return (
    <div className="bg-white pl-2 mt-5 pb-2">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="left_border"></div>
        <div className="right_border"></div>
      </div>
      <div className="trending_header">
        <p>product category</p>
      </div>
      <div className="container bg-light" style={{ borderRadius: "20px" }}>
        <div className="row">
          <div className="col-md-2 bg- p-2 ">
            <div className="left_section pt-5 h-100">
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
          <div
            className="col-md-4 "
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Carousel>
              <Carousel.Item>
                <img src={CarouImg} alt="image" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={CarouImg} alt="image" />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-md-3 h-100">
            <div className="container-fluid">
              <div
                className="row hide_scrollBar mt-2"
                style={{ overflowY: "scroll" }}
              >
                <div className="col-md-6 mb-4 bg-light p-1 round">
                  <div>
                    <img src={ContentImg55} alt="image" />
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
                    <img src={ContentImg55} alt="image" />
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
                    <img src={ContentImg55} alt="image" />
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
                    <img src={ContentImg55} alt="image" />
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
                    <img src={ContentImg55} alt="image" />
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
                    <img src={ContentImg55} alt="image" />
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
                    <img src={ContentImg55} alt="image" />
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
                    <img src={ContentImg55} alt="image" />
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
            <div className="right_section pt-5 pb-2 h-100">
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
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div
          className="p_style mt-3 box_shadow"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#326dcb",
            width: "209px",
            height: "54px",
            borderRadius: "30px",
            backgroundColor: "white",
            marginBottom: "15px",
          }}
        >
          <p className="m-0 ml-5" style={{ fontWeight: "600" }}>
            Source Now
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "54px",
              height: "54px",
              backgroundColor: "#326dcb",
              borderRadius: "50%",
              padding: "0px 0px",
            }}
          >
            <ArrowForwardIosIcon
              className=""
              style={{
                color: "white",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
