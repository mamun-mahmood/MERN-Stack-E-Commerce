import React from "react";
import "./FlashSell.css";
import HomeRepairServiceOutlinedIcon from "@mui/icons-material/HomeRepairServiceOutlined";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import ChromeReaderModeOutlinedIcon from "@mui/icons-material/ChromeReaderModeOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";

export default function FlashSell() {
  let date = 5;
  const countDownDate = new Date(`Dec ${date}, 2021 15:37:25`).getTime();

  // Update the count down every 1 second
  const x = setInterval(function () {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"

    // // document.getElementById("hours").value = hours;
    // // document.getElementById("minutes").innerText = minutes;
    // // document.getElementById("seconds").innerText = seconds;

    // if (distance < 0) {
    //   clearInterval(x);
    //   date++;
    //   //   document.getElementById("hours").innerText = 0;
    //   //   document.getElementById("minutes").innerText = 0;
    //   //   document.getElementById("seconds").innerText = 0;
    //   //   document.getElementById("expired").innerText = 'EXPIRED';
    // }
  }, 1000);
  return (
    <div className="flash_sell rounded mb-5" style={{width: '80%', marginLeft: '10%'}}>
      <div className="top_header container-fluid mt-3">
        <div className="row">
          <div className="topheader_items col-lg-3 col-md-6">
            <ProductionQuantityLimitsOutlinedIcon style={{ color: "red" }} />
            <p>ImpoNexpo Product</p>
          </div>
          <div className="topheader_items d-flex col-lg-3 col-md-6">
            <HomeRepairServiceOutlinedIcon style={{ color: "blue" }} />
            <p>ImpoNexpo Services</p>
          </div>
          <div className="topheader_items d-flex col-lg-3 col-md-6">
            <ChromeReaderModeOutlinedIcon style={{ color: "green" }} />
            <p>ImpoNexpo Learning</p>
          </div>
          <div className="topheader_items d-flex col-lg-3 col-md-6">
            <LiveTvOutlinedIcon style={{ color: "purple" }} />
            <p>ImpoNexpo TV Chanel</p>
          </div>
        </div>
      </div>
      <div className="flash_sale_section rounded container-fluid">
        <div className="mt-5">
          <h4>FLASH SALE</h4>
        </div>
        <div className="row bg-white">
          <div className="col-12">
            <p className="" id="demo">
              <span style={{ color: "orange" }}>On Sale Now </span>
              <span id="expired">Ending In</span>{" "}
              {/* <span
                id="days"
                style={{
                  backgroundColor: "#f86909",
                  padding: "6px",
                  borderRadius: "5px",
                }}
              ></span>
              : */}
              <span
                id="hours"
                style={{
                  backgroundColor: "#f86909",
                  padding: "6px",
                  borderRadius: "5px",
                }}
              >00</span>
              :
              <span
                id="minutes"
                style={{
                  backgroundColor: "#f86909",
                  padding: "6px",
                  borderRadius: "5px",
                }}
              >00</span>
              :
              <span
                id="seconds"
                style={{
                  backgroundColor: "#f86909",
                  padding: "6px",
                  borderRadius: "5px",
                }}
              >00</span>
            </p>
            <div className="flash_sale_container">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 col-12 ml-md-5 mt-5">
                    <h5 className="text-white">Products and shipping savings</h5>
                    <h6 className="text-white">On time delivery guarantee</h6>
                    <button
                      className="mt-4 ml-5 btn btn-white"
                      style={{ borderRadius: "20px", color: "#f86909" }}
                    >
                      View more
                    </button>
                  </div>
                  <div
                    className=" col-md-3 col-12 bg-white m-1 flash_sale-right"
                    style={{ borderRadius: "10px" }}
                  >
                    <div className="">
                      <h6 style={{ height: "40%" }}>Shopping Discount</h6>
                      <p>On Time delivery guarantee</p>
                    </div>
                    <div className="d-flex h-100">
                      <img
                        className="w-50 p-1 "
                        style={{ height: "60%", borderRadius: "10px" }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ9Rp2Thfsyy3D-9xE4g99ydb09tkhAY5cPw&usqp=CAU"
                        alt=""
                      />
                      <img
                        className="w-50  p-1"
                        style={{ height: "60%", borderRadius: "10px" }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9fQyO9VxL2x20qV5Gd55gsht95ZabPL9Tqw&usqp=CAU"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className=" col-md-3 col-12 bg-white m-1 flash_sale-right"
                    style={{ borderRadius: "10px" }}
                  >
                    <div className="">
                      <h6 style={{ height: "40%" }}>Shopping Discount</h6>
                      <p>On Time delivery guarantee</p>
                    </div>
                    <div className="d-flex h-100">
                      <img
                        className="w-50 p-1 "
                        style={{ height: "60%", borderRadius: "10px" }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ9Rp2Thfsyy3D-9xE4g99ydb09tkhAY5cPw&usqp=CAU"
                        alt=""
                      />
                      <img
                        className="w-50  p-1"
                        style={{ height: "60%", borderRadius: "10px" }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9fQyO9VxL2x20qV5Gd55gsht95ZabPL9Tqw&usqp=CAU"
                        alt=""
                      />
                    </div>
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
