import React from "react";
import "./Footer.css";
import PaymentImg from "../../Resources/SeekPngcom_visa-icon-png_98874.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import QR from "../../Resources/QR.png";
import ImpoNexpoLogo from "../../Resources/imponexpo.jpg";
import Appstore from "../../Resources/get itappstore.png";
import Playstore from "../../Resources/getItOnGooglepaly.png";

export default function Footer() {
  return (
    <div className="bg-light p-1">
      <div
        className="mt-5"
        style={{
          overflowY: "scroll",
          backgroundColor: "#1d5dc7",
          maxHeight: "65vh",
        }}
      >
        <div
          className="footer_top"
          style={{ textAlign: "center", color: "white", padding: "10px" }}
        >
          <p>
            Yes! Send me exclusive offers, unique gift ideas, and personalized
            tips for shopping and selling on ImpoNexpo
          </p>
          <form action="">
            <input
              className="search_field bg-light pl-4"
              placeholder="Enter your email"
              type="text"
            />
            {/* <button>Subscribe</button> */}
          </form>
        </div>
        <div
          style={{
            borderBottom: "1px solid white",
            width: "70%",
            marginLeft: "15%",
            marginTop: "10px",
          }}
        ></div>
        <div className="footer_mid container mt-4 text-white pb-3">
          <div className="row">
            <div className="footer_element_container col-md-6 col-12 col-lg-3">
              <h5>Customer Care</h5>
              <p>Help Center</p>
              <p>How to Buy</p>
              <p>Group Import</p>
              <p>Return & Refund</p>
              <p>ImpoNexpo Shop</p>
              <p>Contact Us</p>
              <p>Purchase Protection</p>
              <p>Others</p>
            </div>
            <div className="footer_element_container col-md-6 col-12 col-lg-3">
              <h5>ImpoNexpo</h5>
              <p>About Us</p>
              <p>Digtal Payments</p>
              <p>ImpoNexpo Care</p>
              <p>ImpoNexpo Blog</p>
              <p>Trems & Conditions</p>
              <p>Privacy Policy</p>
              <p>Online Shopping App</p>
              <p>Online Grocery Shopping</p>
            </div>
            <div className="footer_element_container col-md-6 col-12 col-lg-3">
              <h5>Services </h5>
              <p>Graphics Design</p>
              <p>Digital Marketing</p>
              <p>Writing & Transtilation</p>
              <p>Video & Animation</p>
              <p>Music & Audio</p>
              <p>Programming & Tech</p>
              <p>Bussiness</p>
              <p>Data</p>
            </div>
            <div className="footer_element_container col-md-6 col-12 col-lg-3">
              <h5>Make Money With Us</h5>
              <p>Sell on ImpoNexpo</p>
              <p>Join Affliate Marketing</p>
              <p>Become a Service Seller</p>
              <p>Become a Product Seller</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom container mt-3">
        <div className="row">
          <div className="col-md-6 col-12 col-lg-3 mt-4">
            <h6>Payment Method</h6>
            <img className="w-100" src={PaymentImg} alt="" />
          </div>
          <div className="col-md-6 col-12 col-lg-3 mt-4 mb-3">
            <h6>Follow Us</h6>
            <div className="footer_bottom_element mt-3">
              <div className="footer_icon">
                <FacebookIcon />
              </div>
              <div className="footer_icon">
                <YouTubeIcon />
              </div>
              <div className="footer_icon">
                <PinterestIcon />
              </div>
              <div className="footer_icon">
                <InstagramIcon />
              </div>
            </div>
          </div>
          <div
            className="bg-light col-md-6 col-12 col-lg-3"
            style={{ textAlign: "center" }}
          >
            <div className="d-flex">
              <img className="w-50 p-1 h-75" src={QR} alt="" />
              <img className="w-50 p-1" src={ImpoNexpoLogo} alt="" />
            </div>
            <div className="">
              <p>
                <span style={{ color: "#1e5dc3", fontWeight: "700" }}>
                  ImpoNexpo
                </span>{" "}
                <span style={{ color: "#ff8000", fontWeight: "700" }}>
                  Download App
                </span>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12 col-lg-3 mt-5">
            <img className="w-50 footer_icon" src={Appstore} alt="" />
            <img className="w-50 footer_icon" src={Playstore} alt="" />
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center", color: "#1e5dc3", fontWeight: "600" }}>
        <p>1999-2021 ImpoNexpo.com. All rights reserved.</p>
      </div>
    </div>
  );
}
