import { Button } from "@mui/material";
import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MyProfile.css";
export default function MyProfile() {
  return (
    <div className="container">
      <div className="row">
        <div className="left_section col-md-2 bg-white p-0 round">
          <div className="border_bottom">
            <p className="bg-secondary pl-2 box_shadow m-1 text-white">Hello</p>
            <p className="bg-light m-1 pl-2">Manage My Account</p>
          </div>
          <div className="bg-light  pb-2">
            <p className="pl-3 box_shadow m-1 p_style">My Profile</p>
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
        <div className="col-md-9 bg-white ml-md-4 p-5 box_shadow">
          <div>
            <form action="">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 mb-5">
                    <p className="m-0">Full Name</p>
                    <input
                      className="input_style"
                      placeholder="Max Carl"
                      type="text"
                    />
                  </div>
                  <div className="col-md-4 mb-5">
                    <p className="m-0">Email Address</p>
                    <input
                      className="input_style"
                      type="text"
                      placeholder="ma******@gmail.com"
                    />
                  </div>
                  <div className="col-md-4 mb-5">
                    <p className="m-0">Mobile</p>
                    <input
                      className="input_style"
                      placeholder="+41********68"
                      type="text"
                    />
                  </div>
                  <div className="col-md-6 mt-5">
                    <p className="m-0">Birthday</p>
                    <input
                      className="input_style"
                      placeholder="02/06/1991"
                      type="text"
                      disabled
                    />
                  </div>
                  <div className="col-md-6 mt-5">
                    <p className="m-0">Gender</p>
                    <div className="d-flex bg-white round">
                      <Dropdown style={{ color: "grey" }}>
                        <Dropdown.Toggle variant="white" id="dropdown-basic">
                          Select You Gender
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item>Male</Dropdown.Item>
                          <Dropdown.Item>Female</Dropdown.Item>
                          <Dropdown.Item>Prefere Not to Say</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <Button
            className="mt-5"
            fullWidth
            style={{
              backgroundColor: "#346ccd",
              textTransform: "capitalize",
              color: "white",
            }}
          >
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
