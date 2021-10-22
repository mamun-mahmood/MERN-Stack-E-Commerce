import React from "react";
import "./FlashSell.css";
import HomeRepairServiceOutlinedIcon from "@mui/icons-material/HomeRepairServiceOutlined";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import ChromeReaderModeOutlinedIcon from "@mui/icons-material/ChromeReaderModeOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import FlashSaleCard from "./FlashSaleCard";
import headphone from "../../Resources/headphone.jpg";
import charger from "../../Resources/charger.jpg";
import sofa from "../../Resources/sofa.jpg";
import Carousel from "react-elastic-carousel";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 3 },
  { width: 750, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
  { width: 1600, itemsToShow: 5 },
];
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
    // document.getElementById("days").innerText = days;
    // document.getElementById("hours").innerText = hours;
    // document.getElementById("minutes").innerText = minutes;
    // document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
      clearInterval(x);
      date++;
      document.getElementById("days").innerText = 0;
      document.getElementById("hours").innerText = 0;
      document.getElementById("minutes").innerText = 0;
      document.getElementById("seconds").innerText = 0;
      document.getElementById("expired").innerText = "EXPIRED";
    }
  }, 1000);
  return (
    <div className="flash_sell rounded mb-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="topheader_items">
              <p><ProductionQuantityLimitsOutlinedIcon style={{ color: "red", width: '50px', height: '50px'}} /></p>
              <p>ImpoNexpo Product</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="topheader_items">
              <p><HomeRepairServiceOutlinedIcon style={{ color: "blue",width: '50px', height: '50px' }} /></p>
              <p>ImpoNexpo Services</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="topheader_items">
              <p><ChromeReaderModeOutlinedIcon style={{ color: "green",width: '50px', height: '50px' }} /></p>
              <p>ImpoNexpo Learning</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="topheader_items">
              <p><LiveTvOutlinedIcon style={{ color: "purple",width: '50px', height: '50px' }} /></p>
              <p>ImpoNexpo TV Chanel</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flash_sale_section rounded container">
        <div className="mt-5">
          <h4>FLASH SALE</h4>
        </div>
        <div className="row bg-white">
          <div className="col-12">
            <p>
              <span style={{ color: "orange" }}>On Sale Now </span>
              <span id="expired">Ending In</span>{" "}
              <span
                id="days"
                style={{
                  backgroundColor: "#f86909",
                  padding: "6px",
                  borderRadius: "5px",
                }}
              >
                00
              </span>
              :
              <span
                id="hours"
                style={{
                  backgroundColor: "#f86909",
                  padding: "6px",
                  borderRadius: "5px",
                }}
              >
                00
              </span>
              :
              <span
                id="minutes"
                style={{
                  backgroundColor: "#f86909",
                  padding: "6px",
                  borderRadius: "5px",
                }}
              >
                00
              </span>
              :
              <span
                id="seconds"
                style={{
                  backgroundColor: "#f86909",
                  padding: "6px",
                  borderRadius: "5px",
                }}
              >
                00
              </span>
            </p>
            <div className="flash_sale_container">
              <div className="container-fluid">
                <div className="">
                  <Carousel breakPoints={breakPoints}>
                    <FlashSaleCard sofa={sofa} />
                    <FlashSaleCard sofa={charger} />
                    <FlashSaleCard sofa={headphone} />
                    <FlashSaleCard sofa={sofa} />
                    <FlashSaleCard sofa={charger} />
                    <FlashSaleCard sofa={headphone} />
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
