import React from "react";
import CarouImg from "../../Resources/burgess-milner-OYYE4g-I5ZQ-uns_bu.png";
import { Carousel } from "react-bootstrap";
import ContentImg22 from "../../Resources/jason-leung-jWU9FpLW7fI-unspla_bvt@2x.png";
import ContentImg55 from "../../Resources/carouimg55.png";
export default function ServiceCategory() {
  return (
    <div className="bg-white pl-2 mt-3 mb-2">
      <div className="trending_header mt-1">
        <p>service category</p>
      </div>
      <div className="container bg-light pb-2" style={{ borderRadius: "20px" }}>
        <div className="row">
          <div className="col-md-3 bg- p-2 ">
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
            className="col-md-5 mt-3"
            style={
              {
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
              }
            }
          >
            <div className="">
              <div className="row">
                <div className="col-md-12">
                  <Carousel>
                    <Carousel.Item>
                      <img src={CarouImg} alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={CarouImg} alt="" />
                    </Carousel.Item>
                  </Carousel>
                </div>
                <div className="col-md-5 ml-3 bg-white p-1 round mt-1 box_shadow">
                  <img src={ContentImg22} alt="" />
                  <p className="m-0" style={{
                    textAlign: 'center',
                    }}>Cookware</p>
                </div>
                <div className="col-md-5 ml-3 bg-white p-1 round mt-1 box_shadow">
                  <img src={ContentImg22} alt="" />
                  <p className="m-0" style={{
                    textAlign: 'center',
                    }}>Cookware</p>
                </div>
                <div className="col-md-5 ml-3 bg-white p-1 round mt-1 box_shadow">
                  <img src={ContentImg22} alt="" />
                  <p className="m-0" style={{
                    textAlign: 'center',
                    }}>Cookware</p>
                </div>
                <div className="col-md-5 ml-3 bg-white p-1 round mt-1 box_shadow">
                  <img src={ContentImg22} alt="" />
                  <p className="m-0" style={{
                    textAlign: 'center',
                    }}>Cookware</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 h-100">
            <div className="container-fluid">
              <div
                className="row hide_scrollBar mt-2"
                style={{ overflowY: "scroll" }}
              >
                <div className="col-md-5 ml-3 bg-white p-1 round mt-1 box_shadow">
                  <img src={ContentImg22} alt="" />
                  <p className="m-0" style={{
                    textAlign: 'center',
                    }}>Cookware</p>
                </div>
                <div className="col-md-5 ml-3 bg-white p-1 round mt-1 box_shadow">
                  <img src={ContentImg22} alt="" />
                  <p className="m-0" style={{
                    textAlign: 'center',
                    }}>Cookware</p>
                </div>
                <div className="col-md-5 ml-3 bg-white p-1 round mt-1 box_shadow">
                  <img src={ContentImg22} alt="" />
                  <p className="m-0" style={{
                    textAlign: 'center',
                    }}>Cookware</p>
                </div>
                <div className="col-md-5 ml-3 bg-white p-1 round mt-1 box_shadow">
                  <img src={ContentImg22} alt="" />
                  <p className="m-0" style={{
                    textAlign: 'center',
                    }}>Cookware</p>
                </div>
                <div className="col-md-5 ml-3 bg-white p-1 round mt-1 box_shadow">
                  <img src={ContentImg22} alt="" />
                  <p className="m-0" style={{
                    textAlign: 'center',
                    }}>Cookware</p>
                </div>
                <div className="col-md-5 ml-3 bg-white p-1 round mt-1 box_shadow">
                  <img src={ContentImg22} alt="" />
                  <p className="m-0" style={{
                    textAlign: 'center',
                    }}>Cookware</p>
                </div>
                <div className="col-md-5 ml-3 bg-white p-1 round mt-1 box_shadow">
                  <img src={ContentImg22} alt="" />
                  <p className="m-0" style={{
                    textAlign: 'center',
                    }}>Cookware</p>
                </div>
                <div className="col-md-5 ml-3 bg-white p-1 round mt-1 box_shadow">
                  <img src={ContentImg22} alt="" />
                  <p className="m-0" style={{
                    textAlign: 'center',
                    }}>Cookware</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
