import React from "react";
import "./CheckoutPage.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function CheckoutPage() {
  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            <div className="container">
              <div className="row">
                <div className="col-md-12 bg-white round box_shadow">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "5px",
                      color: "grey",
                    }}
                  >
                    <p>Items</p>
                    <p>Price</p>
                    <p>Quantity</p>
                  </div>
                </div>
                <div className="col-md-12 bg-white mt-2 round box_shadow p-0">
                  <div
                    className="bg-light pl-2 pr-2 mt-1"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p style={{ fontWeight: "600" }}>Package 1 of 1</p>
                    <p>
                      Shipped by{" "}
                      <span style={{ fontWeight: "600" }}>
                        Nike Flagship Store
                      </span>
                    </p>
                  </div>
                  <div className="p-2">
                    <div
                      className="round pl-2 mt-2 bg-light"
                      style={{ border: "1px solid blue", width: "200px" }}
                    >
                      <p>
                        <span style={{ fontWeight: "600", fontSize: "18px" }}>
                          $5
                        </span>{" "}
                        <br />
                        Home Deilvery <br /> Est. Arival 25-30 Sep
                      </p>
                    </div>
                    <div
                      className="mt-2"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className="d-flex w-100">
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
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </p>
                          <p>Product Catagory</p>
                        </div>
                      </div>
                      <div className="w-100">
                        <p
                          className="text-primary"
                          style={{ fontWeight: "580" }}
                        >
                          $210
                        </p>
                      </div>
                      <div>
                        <p>
                          Q: <span style={{ fontWeight: "580" }}>1</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 round rigt_side_section box_shadow bg-white p-2">
            <h6 className="mt-2">Shipping & Billing</h6>
            <div className="delivery_address ">
              <p>
                <LocationOnIcon />
              </p>
              <p>America, San Fransisco - Soomona Anpa, Block 15</p>
              <p className="p_style">Edit</p>
            </div>
            <div
              className="delivery_address"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div style={{ display: "flex" }}>
                <p style={{ color: "grey" }}>
                  <CallIcon />
                </p>
                <p className="pl-1">+41 5873 1425</p>
              </div>
              <p className="p_style">Edit</p>
            </div>
            <div
              className="delivery_address"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div style={{ display: "flex" }}>
                <p style={{ color: "grey" }}>
                  <EmailIcon />
                </p>
                <p className="pl-2">example@email.com</p>
              </div>
              <p className="p_style">Edit</p>
            </div>
            <div
              className="pt-2"
              style={{
                color: "grey",
                borderBottom: "1px solid rgb(221, 220, 220)",
              }}
            >
              <p style={{ fontWeight: "550" }}>Order Summary</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>Subtotal</p>
                <p style={{ fontWeight: "600", color: "black" }}>$25</p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>Shipping Fee</p>
                <p style={{ fontWeight: "600", color: "black" }}>$5</p>
              </div>
            </div>
            <div
              className="pt-2"
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid rgb(221, 220, 220)",
              }}
            >
              <p>Total</p>
              <p style={{ fontWeight: "600", color: "black" }}>$30</p>
            </div>
            <Link to="/payment_page">
              <Button
                className="mb-4"
                fullWidth
                style={{
                  backgroundColor: "#346ccd",
                  textTransform: "capitalize",
                  color: "white",
                }}
              >
                Proceed to Pay
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
