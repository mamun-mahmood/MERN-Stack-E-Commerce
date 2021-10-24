import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MyOrderPage..css";
export default function MyOrderPage() {
  return (
    <div className="mt-3">
      <p style={{ textAlign: "center", color: "black", fontWeight: "600" }}>
        My Orders
      </p>
      <div className="container">
        <div className="row">
          <div className=" col-md-2 col-12 w-100 bg-white p-0 round p-2">
            <div className="border_bottom">
              <p className="bg-secondary pl-2 box_shadow m-1 text-white">
                Hello
              </p>
              <p className="bg-light m-1 pl-2">Manage My Account</p>
            </div>
            <div className="bg-light  pb-2">
              <Link to="my_profile"><p className="pl-3 box_shadow m-1 p_style">My Profile</p></Link>
              <p className="pl-3 box_shadow m-1 p_style">Addres Book</p>
              <p className="pl-3 box_shadow m-1 p_style">Vouchers</p>
            </div>
            <div className="bg-light">
              <p className="p_style border_bottom m-0 mt-2 pl-3">My Orders</p>
              <p className="p_style pl-3 m-0">My Returns</p>
              <p className="p_style border_bottom pb-2 pl-3">
                My Cancellations
              </p>
            </div>
            <div className="pb-1">
              <p className="bg-light pl-3 m-1 p_style">My Reviews</p>
              <p className="bg-light pl-3 m-1 p_style">My Followed Store</p>
              <p className="bg-light pl-3 m-1 p_style">Sell on ImpoNexpo</p>
            </div>
          </div>
          <div className="col-md-9 ml-md-3 p-0  mt-2">
            <div className="d-flex round border_bottom ">
              <p className="top_menu_options p_style">All</p>
              <p className="top_menu_options p_style">To Pay</p>
              <p className="top_menu_options p_style">To Ship</p>
              <p className="top_menu_options p_style">To Receive</p>
            </div>
            <div className="d-flex pl-2 p-1 mt-2 bg-white round">
              <p>Show:</p>
              <div className="pl-2">
                <Dropdown>
                  <Dropdown.Toggle variant="white" id="dropdown-basic">
                    Last 5 days
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>Last 15 days</Dropdown.Item>
                    <Dropdown.Item>Last 1 Month</Dropdown.Item>
                    <Dropdown.Item>Last 6 months</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div>
              <div
                className="bg-white mt-2 pl-2 pr-2"
                style={{ color: "grey" }}
              >
                <div
                  className="border_bottom mb-2"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <p className="m-0">
                      Order <span className="p_style">#201548769</span>
                    </p>
                    <small>Placed on 07 Aug 17:20</small>
                  </div>
                  <div>
                    <p className="p_style pt-2">Manage</p>
                  </div>
                </div>
                <div
                  className="w-100"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
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
                      <Link to="/order_details">
                        <p>
                        Nike Air Max Zephyr 111362
                        </p>
                      </Link>
                      <p>Product Catagory</p>
                    </div>
                  </div>
                  <div>
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
                  <div></div>
                </div>
              </div>
            </div>
            <div>
              <div
                className="bg-white mt-2 pl-2 pr-2"
                style={{ color: "grey" }}
              >
                <div
                  className="border_bottom mb-2"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <p className="m-0">
                      Order <span className="p_style">#454548749</span>
                    </p>
                    <small>Placed on 07 Aug 17:20</small>
                  </div>
                  <div>
                    <p className="p_style pt-2">Manage</p>
                  </div>
                </div>
                <div
                  className="w-100"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
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
                      <Link to="/order_details">
                        <p>
                          NikNike Air Max Zephyr 111362
                        </p>
                      </Link>
                      <p>Product Catagory</p>
                    </div>
                  </div>
                  <div>
                    <p
                      className="text-dark"
                      style={{
                        fontWeight: "530",
                        backgroundColor: "RGB(255, 100, 100)",
                        padding: "0px 10px",
                        borderRadius: "12px",
                      }}
                    >
                      Cancled
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
