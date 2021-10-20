import React from "react";
import { Link } from "react-router-dom";

export default function OrderDetails() {
  return (
    <div className="container">
      <div className="row">
        <div className=" col-md-2 col-12 w-100 bg-white p-0 round p-2">
          <div className="border_bottom">
            <p className="bg-secondary pl-2 box_shadow m-1 text-white">Hello</p>
            <p className="bg-light m-1 pl-2">Manage My Account</p>
          </div>
          <div className="bg-light  pb-2">
          <Link to="my_profile"><p className="pl-3 box_shadow m-1 p_style">My Profile</p></Link>
            <p className="pl-3 box_shadow m-1 p_style">Addres Book</p>
            <p className="pl-3 box_shadow m-1 p_style">Vouchers</p>
          </div>
          <div className="bg-light">
            <Link to="/my_orders">
              <p className="p_style border_bottom m-0 mt-2 pl-3">My Orders</p>
            </Link>
            <p className="p_style pl-3 m-0">My Returns</p>
            <p className="p_style border_bottom pb-2 pl-3">My Cancellations</p>
          </div>
          <div className="pb-1">
            <p className="bg-light pl-3 m-1 p_style">My Reviews</p>
            <p className="bg-light pl-3 m-1 p_style">My Followed Store</p>
            <p className="bg-light pl-3 m-1 p_style">Sell on ImpoNexpo</p>
          </div>
        </div>
        <div className="col-md-9 ml-md-3 p-0 mt-2">
          <p className="pl-2 text-dark" style={{ fontWeight: "560" }}>
            Order Details
          </p>
          <div>
            <div
              className="bg-white pl-md-3   border_bottom mb-2"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>
                <p className="m-0">
                  Order <span className="p_style">#201548769</span>
                </p>
                <small>Placed on 07 Aug 17:20</small>
              </div>
            </div>
            <div
              className="bg-white pl-3 pb-2 border_bottom mb-2"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>
                <p className="m-0">Package 1</p>
                <small>
                  Sold by <span className="p_style">Nike Flagship Store</span>
                </small>
              </div>
              <div>
                <p className="p_style pt-2 mr-3">Chat Now</p>
              </div>
            </div>
            <div className="bg-white pl-2 pr-2" style={{ color: "grey" }}>
              <div
                className="w-100 mt-1"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div className="d-flex mt-2">
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
                <div className="mt-4 text-dark mr-3">
                  <p>$200</p>
                </div>
                <div className="mt-4">
                  <p
                    className="text-dark"
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
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="bg-white p-2 mt-2">
                  <p className="m-0">Shipping Address</p>
                  <small>
                    Name: <span className="p_style">Mamun Mahmood</span>
                  </small>
                  <br />
                  <small>
                    Home: Bangladesh, Dhaka - 1208, Dhanmondi Block-15/A
                  </small>
                  <br />
                  <small>Phone: +8801799464821</small>
                </div>
                <div className="bg-white p-2 mt-2">
                  <p className="m-0">Billing Address</p>
                  <small>
                    Name: <span className="p_style">Mamun Mahmood</span>
                  </small>
                  <br />
                  <small>
                    Home: Bangladesh, Dhaka - 1208, Dhanmondi Block-15/A
                  </small>
                  <br />
                  <small>Phone: +8801799464821</small>
                </div>
              </div>
              <div className="col-md-4">
                <div className="bg-white mt-2 p-2">
                  <p>Total Summary</p>
                </div>
                <div className="bg-white mt-2 p-2">
                  <div className="border_bottom">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>Sub Total </p>
                      <p>$200</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>Shipping</p>
                      <p>$5</p>
                    </div>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p>Total</p>
                    <p>$25</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
