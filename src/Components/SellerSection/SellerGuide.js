import React from "react";
import banner from "../../Resources/animations-e-commerce-1024x525.png";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { TimelineOppositeContent } from "@mui/lab";
import step1 from "../../Resources/undraw_empty_cart_co35.png";
import step2 from "../../Resources/undraw_Order_confirmed_re_g0if.png";
import step3 from "../../Resources/undraw_stepping_up_g6oo.png";
import { Link } from "react-router-dom";
export default function SellerGuide() {
  const steps = [
    "Select master blaster campaign settings",
    "Create an ad group",
    "Create an ad",
  ];
  return (
    <div className="mt-3">
      <div style={{ backgroundColor: "rgba(50, 109, 203, 0.9)" }}>
        <div
          style={{
            width: "60%",
            marginLeft: "20%",
            textAlign: "center",
            backgroundImage: `url(${banner})`,
            backgroundSize: "100% 100%",
            padding: "50px 0px",
            backgroundRepeat: "no-repeat",
            color: "white",
          }}
        >
          <p className="pb-5" style={{ fontWeight: "580", fontSize: "21px" }}>
            START YOUR ONLINE BUSSINESS WITH US IN 3 STEPS!
          </p>
          <p
            className="mt-5 text-white"
            style={{ fontSize: "18px", paddingTop: "50px", fontSize: "20px" }}
          >
            Become a part of digital economy in the world with ImpoNexpo
          </p>
          <Link to="/seller_dashboard">
            <button className="btn btn-outline-white">Start Selling</button>
          </Link>
        </div>
      </div>
      <div className="container mt-4" style={{ textAlign: "center" }}>
        <div>
          <p style={{ fontSize: "22px", color: "rgba(50, 109, 203)" }}>
            Become a succesful seller in 3 Easy Steps
          </p>
          <div>
            <div className="bg-white">
              <Timeline
                position="alternate"
                style={{ color: "rgba(50, 109, 203)" }}
              >
                <TimelineItem>
                  <TimelineOppositeContent>
                    <div className="mt-5" style={{ textAlign: "center" }}>
                      Register and List Your Product
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <ul style={{ textAlign: "start" }}>
                          <li>Lorem ipsum dolor sit amet.</li>
                          <li>Lorem ipsum dolor sit amet.</li>
                          <li>Lorem ipsum dolor sit amet.</li>
                          <li>Lorem ipsum dolor sit amet.</li>
                        </ul>
                      </div>
                    </div>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot
                      variant="outlined"
                      sx={{ width: "60px", height: "60px", fontSize: "18px" }}
                    >
                      Step 1
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <img src={step1} alt="" />
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <div className="mt-5" style={{ textAlign: "center" }}>
                      Receive order and sell across the wrold
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <ul style={{ textAlign: "start" }}>
                          <li>Lorem ipsum dolor sit amet.</li>
                          <li>Lorem ipsum dolor sit amet.</li>
                          <li>Lorem ipsum dolor sit amet.</li>
                          <li>Lorem ipsum dolor sit amet.</li>
                        </ul>
                      </div>
                    </div>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot
                      variant="outlined"
                      color="primary"
                      sx={{ width: "60px", height: "60px", fontSize: "18px" }}
                    >
                      Step 2
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <img src={step2} alt="" />
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <div className="mt-5" style={{ textAlign: "center" }}>
                      Get Payment and Grow Your Business
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <ul style={{ textAlign: "start" }}>
                          <li>Lorem ipsum dolor sit amet.</li>
                          <li>Lorem ipsum dolor sit amet.</li>
                          <li>Lorem ipsum dolor sit amet.</li>
                          <li>Lorem ipsum dolor sit amet.</li>
                        </ul>
                      </div>
                    </div>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot
                      variant="outlined"
                      color="secondary"
                      sx={{ width: "60px", height: "60px", fontSize: "18px" }}
                    >
                      Step 3
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <img src={step3} alt="" />
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    {/* Get Payment and Grow Your Business
                    <ul>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                    </ul> */}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <p className="m-0">So what are you wating for?</p>
                    <Link to="/seller_dashboard">
                      <button
                        className="btn btn-outline-white"
                        style={{
                          backgroundColor: "rgba(50, 109, 203)",
                          color: "white",
                        }}
                      >
                        Start Selling
                      </button>
                    </Link>
                  </TimelineSeparator>
                  <TimelineContent>
                    {/* <img src={step3} alt="" /> */}
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
