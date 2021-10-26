import React from "react";
import "./SellerSection.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { YouTube } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SellerAbout from "./SellerAbout";
import SellerProductpage from "./SellerProductpage";
import SellerHomepage from "./SellerHomepage";
import SellerLiveStreams from "./SellerLiveStreams";


export default function SellerSection() {
  const [Sellerpage, setSellerPage] = React.useState("Homepage");
  return (
    <div className="container-fluid w-75 mt-3">
      <div className="seller_section_top bg-white round box_shadow pb-4">
        <div className="cover_photo_seller">
          <img
            className="w-100 round"
            style={{ height: "250px" }}
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
        <div className="container-fluid mt-4" style={{}}>
          <div className="row">
            <div className="col-md-5">
              <div className="seller_section_left pr-md-5">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="seller_left_elemnt pr-2">
                    <p className="m-0">15</p>
                    <p className="m-0">Products</p>
                  </div>
                  <div className="seller_left_elemnt pr-2 pl-2">
                    <p className="m-0">50.6k</p>
                    <p className="m-0">Followers</p>
                  </div>
                  <div className="seller_left_elemnt pr-2 pl-2">
                    <p className="m-0">1st</p>
                    <p className="m-0">Level</p>
                  </div>
                  <div className="seller_left_elemnt pr-2 pl-2">
                    <p className="m-0">4.9</p>
                    <p className="m-0">Review</p>
                  </div>
                  <div
                    className="pl-2"
                    style={{ textAlign: "center", color: "grey" }}
                  >
                    <p className="m-0">15</p>
                    <p className="m-0">Counrty</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-2"
              style={{
                marginTop: "-70px",
              }}
            >
              <div
                className="seller_avatar"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Avatar sx={{ width: 80, height: 80, bgcolor: "green" }} />
              </div>
              <p style={{ textAlign: "center" }} className="m-0 mt-2">
                Company Name
              </p>
            </div>
            <div className="col-md-5">
              <div className="seller_section_right w-md-75 ml-md-5">
                <p className="m-0">
                  <LocationOnIcon
                    sx={{ width: 40, height: 40 }}
                    className="box_shadow seller_right_icons round"
                  />
                </p>
                <p className="m-0">
                  <CallIcon
                    sx={{ width: 40, height: 40 }}
                    className="box_shadow seller_right_icons round"
                  />
                </p>
                <p className="m-0">
                  <MailIcon
                    sx={{ width: 40, height: 40 }}
                    className="box_shadow seller_right_icons round"
                  />
                </p>
                <p className="m-0">
                  <InstagramIcon
                    sx={{ width: 40, height: 40 }}
                    className="box_shadow seller_right_icons round"
                  />
                </p>
                <p className="m-0">
                  <FacebookIcon
                    sx={{ width: 40, height: 40 }}
                    className="box_shadow seller_right_icons round"
                  />
                </p>
                <p className="m-0">
                  <WhatsAppIcon
                    sx={{ width: 40, height: 40 }}
                    className="box_shadow seller_right_icons round"
                  />
                </p>
                <p className="m-0">
                  <YouTube
                    sx={{ width: 40, height: 40 }}
                    className="box_shadow seller_right_icons round"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white mt-3 p-2">
        <div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 mt-2">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "grey",
                  }}
                >
                  <p className="m-0 p_btn" onClick={() => setSellerPage("About")}>About</p>
                  <p className="m-0 p_btn" onClick={() => setSellerPage("Product")}>Product</p>
                  <p className="m-0 p_btn" onClick={() => setSellerPage("Homepage")}>Homepage</p>
                  <p className="m-0 p_btn" onClick={() => setSellerPage("LiveStreams")}>Live Streams</p>
                  <p className="m-0 p_btn">Chat Now</p>
                </div>
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-4">
                <div
                  style={{
                    border: "2px solid grey",
                    borderRadius: "5px",
                    display: "flex",
                  }}
                >
                  <div style={{ width: "100%" }}>
                    <input
                      style={{
                        border: "none",
                        height: "100%",
                        width: "100%",
                        paddingLeft: "5px",
                      }}
                      type="text"
                      placeholder="Search in Store"
                    />
                  </div>
                  <p className="m-0 p-0">
                    <SearchIcon
                      className="store_search_btn"
                      style={{
                        color: "grey",
                      }}
                      sx={{ width: 35, height: "100%" }}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        {
          Sellerpage === "About" && <SellerAbout/>
        }
        {
          Sellerpage === "Product" && <SellerProductpage/>
        }
        {
          Sellerpage === "Homepage" && <SellerHomepage/>
        }
        {
          Sellerpage === "LiveStreams" && <SellerLiveStreams/>
        }
      </div>
    </div>
  );
}
