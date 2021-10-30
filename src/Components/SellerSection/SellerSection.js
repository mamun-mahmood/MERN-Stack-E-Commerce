import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { useAuth } from "../AuthContext";

export default function SellerSection() {
  const [Sellerpage, setSellerPage] = React.useState("Homepage");
  const { currentUser } = useAuth();
  const sellerEmail = currentUser && currentUser.email;
  const [data, setData] = useState([{}]);
  console.log(currentUser.email);
  useEffect(() => {
    axios
      .get(`http://localhost:5001/seller_info/${sellerEmail}`)
      .then((res) => {
        setData(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, [sellerEmail]);
  const {
    // sellerName,
    // aboutSeller,
    // country,
    // location,
    // phoneNumber,
    // fbUrl,
    youtubeUrl,
    // whatsappNO,
    // website,
    shopName,
    // bussinestype,
    // mainProducts,
    // totalEployees,
    // totalRevenue,
    // yearEstablished,
    // certifications,
    // mainMarket,
    bannerImg,
    profileImg,
    // albumImg,
    // totalProducts,
    // timeStamp,
  } = data;
  return (
    <div className="container-fluid w-75 mt-3">
      <div className="seller_section_top bg-white round box_shadow pb-4">
        <div className="cover_photo_seller">
          <img
            className="w-100 round"
            style={{ height: "250px" }}
            src={bannerImg}
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
                <Avatar src={profileImg} sx={{ width: 80, height: 80, bgcolor: "green" }} />
              </div>
              <p style={{ textAlign: "center" }} className="m-0 mt-2">
                {shopName}
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
                <a target="_blank" href={`https://${youtubeUrl}`} ><p className="m-0">
                  <YouTube
                    sx={{ width: 40, height: 40 }}
                    className="box_shadow seller_right_icons round"
                  />
                </p></a>
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
                  <p
                    className="m-0 p_btn"
                    style={{
                      borderBottom: `${
                        Sellerpage === "About" ? "3px solid #326dcb" : "none"
                      }`,
                    }}
                    onClick={() => setSellerPage("About")}
                  >
                    About
                  </p>
                  <p
                    className="m-0 p_btn"
                    style={{
                      borderBottom: `${
                        Sellerpage === "Product" ? "3px solid #326dcb" : "none"
                      }`,
                    }}
                    onClick={() => setSellerPage("Product")}
                  >
                    Product
                  </p>
                  <p
                    className="m-0 p_btn"
                    style={{
                      borderBottom: `${
                        Sellerpage === "Homepage" ? "3px solid #326dcb" : "none"
                      }`,
                    }}
                    onClick={() => setSellerPage("Homepage")}
                  >
                    Homepage
                  </p>
                  <p
                    className="m-0 p_btn"
                    style={{
                      borderBottom: `${
                        Sellerpage === "LiveStreams"
                          ? "3px solid #326dcb"
                          : "none"
                      }`,
                    }}
                    onClick={() => setSellerPage("LiveStreams")}
                  >
                    Live Streams
                  </p>
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
        {Sellerpage === "About" && <SellerAbout data={data} />}
        {Sellerpage === "Product" && <SellerProductpage data={data} />}
        {Sellerpage === "Homepage" && <SellerHomepage data={data} />}
        {Sellerpage === "LiveStreams" && <SellerLiveStreams />}
      </div>
    </div>
  );
}
