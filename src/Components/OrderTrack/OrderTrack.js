import React from "react";
import "./OrderTrack.css";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

export default function OrderTrack() {
  const steps = ["Order Placed", "Processing", "Shipped", "Deliverd"];
  return (
    <div className="container mt-3">
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
        <div className="col-md-8 ml-5 mt-3 mt-md-0">
          <div className="bg-white">
            <p
              className="m-0 text-dark mt-3"
              style={{ textAlign: "center", fontSize: "20px" }}
            >
              Order Tracking
            </p>
            <div
              className="w-100"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div className="left_border_track"> </div>
              <div style={{ marginTop: "-2px" }}>
                <p
                  className="m-0 ml-3 "
                  style={{ color: "rgba(50, 109, 203)" }}
                >
                  In Warehouse
                </p>
                <small>You order is on the way</small>
              </div>
              <div className="left_border_track"> </div>
              <hr />
            </div>
            <div className="mt-5">
              <Box sx={{ width: "100%" }}>
                <Stepper activeStep={1} alternativeLabel>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </div>
            <div className="p-5" style={{display: 'flex', justifyContent: 'center'}}>
              <button className="btn" style={{backgroundColor: 'rgba(50, 109, 203)', color: 'white'}}>Customer Service</button>
            </div>
          </div>
          <div className="bg-white mt-5 p-2">
            <div>
              <div className="bg-white box_shadow">
                <p className="m-0">Thursday, 06/12/2022</p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <p className="m-0">05:44:40</p>
                </div>
                <div>
                  <p className="m-0">Delivered</p>
                </div>
                <div>
                  <p className="mo">At your doorstep</p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white box_shadow">
                <p className="m-0">Thursday, 06/12/2022</p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <p className="m-0">05:44:40</p>
                </div>
                <div>
                  <p className="m-0">Delivered</p>
                </div>
                <div>
                  <p className="mo">At your doorstep</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
