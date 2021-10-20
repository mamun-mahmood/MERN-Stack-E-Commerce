import React from "react";
import "./OrderTrack.css";
export default function OrderTrack() {
  return (
    <div className="container">
      <div className="row">
        <div className=" col-md-3 col-12 w-100 bg-white p-0 round">
          <div className="border_bottom">
            <p className="bg-secondary pl-2 pt-1 box_shadow m-1 text-white">
              Order Details
            </p>
          </div>
          <div className="p-2">
            <div className="bg-light  pb-2">
              <div className="d-flex">
                <div>
                  <img
                    className="rounded p-1"
                    style={{
                      border: "1px solid grey",
                      width: "70px",
                      height: "70px",
                    }}
                    src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlrZSUyMHNob2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                    alt="image"
                  />
                </div>
                <div className="ml-2">
                  <p>Nike Air Max Zephyr 111362</p>
                  <p>Product Catagory</p>
                </div>
              </div>
            </div>
            <div className="bg-light">
              <div className="border_bottom space_between p-1">
                <p className="m-0">Order No</p>
                <p className="p_style m-0">#3241649674</p>
              </div>
              <div className="border_bottom space_between p-1">
                <p className="m-0">Qty</p>
                <p className="m-0">01</p>
              </div>
              <div className="border_bottom space_between p-1">
                <p className="m-0">Total Price</p>
                <p className="m-0">$210</p>
              </div>
              <div className="border_bottom space_between p-1">
                <p className="m-0">Tracking no.</p>
                <p className="p_style m-0">6546946657498749</p>
              </div>
              <div className="border_bottom space_between p-1">
                <p className="m-0">Order Status</p>
                <p
                  className="text-dark m-0"
                  style={{
                    fontWeight: "530",
                    backgroundColor: "#a2bcde",
                    padding: "0px 10px",
                    borderRadius: "12px",
                  }}
                >
                  In Progress
                </p>
              </div>
            </div>
            <div className="pb-1">
              <p className="bg-light pl-3 m-1 p_style">My Reviews</p>
              <p className="bg-light pl-3 m-1 p_style">My Followed Store</p>
              <p className="bg-light pl-3 m-1 p_style">Sell on ImpoNexpo</p>
            </div>
          </div>
        </div>
        <div className="col-md-9 mt-3 mt-md-0">
          <p className="m-0 text-primary">Track Your Order</p>
          <div className="bg-white">
            <p
              className="text-primary"
              style={{ fontWeight: "550", textAlign: "center" }}
            >
              In Warehouse <br />
              <span className="text-secondary">
                Your order is on the way with logistics company
              </span>
              <div>
                <section class="time-line-box">
                  <div class="swiper-container text-center">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <div class="timestamp">
                          <span class="date">12.07.2019</span>
                        </div>
                        <div class="status" style={{borderTop: '3px solid #455EFC'}}>
                          <span>Order Placed</span>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="timestamp">
                          <span class="date">12.07.2019</span>
                        </div>
                        <div class="status" style={{borderTop: '3px solid #455EFC'}}>
                          <span>In Warehouse</span>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="timestamp">
                          <span class="date">12.07.2019</span>
                        </div>
                        <div class="status" style={{borderTop: '3px solid white'}}>
                          <span>Ready To Shipped</span>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="timestamp">
                          <span class="date">12.07.2019</span>
                        </div>
                        <div class="status" style={{borderTop: '3px solid white'}}>
                          <span>In Transit</span>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="timestamp">
                          <span class="date">12.07.2019</span>
                        </div>
                        <div class="status" style={{borderTop: '3px solid white'}}>
                          <span>Deliverd</span>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-pagination"></div>
                  </div>
                </section>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
