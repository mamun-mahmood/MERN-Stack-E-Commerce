import React from "react";
import LearnImg from "../../Resources/learn.png";
import Book from "../../Resources/book-pngrepo-com.png";
import Monitor from "../../Resources/monitor-pngrepo-com.png";
import Guard from "../../Resources/people-safe-pngrepo-com.png";
import SearchIcon from "@mui/icons-material/Search";
import Carousel from "react-elastic-carousel";
import CourseCard from "../CourseCard/CourseCard";

export default function LearningPage() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 750, itemsToShow: 3 },
    { width: 1100, itemsToShow: 4 },
    { width: 1600, itemsToShow: 5 },
  ];
  return (
    <div>
      <div className="bg-white">
        <div className="container-fluid">
          <div className="row pb-5">
            <div className="col-md-6">
              <div className="mt-5 ml-5">
                <div style={{ color: "#1d5dc7" }}>
                  <p style={{ fontSize: "32px" }}>
                    READY TO LEARN <br /> THE SKILLS <br />{" "}
                    <span style={{ fontWeight: "800" }}>OF THE FUTURE</span>
                  </p>
                  <p className="w-75 text-dark">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dignissimos, minima!
                  </p>
                </div>
                <div
                  className="round"
                  style={{
                    padding: "2px",
                    border: "1px solid #fe842f",
                    width: "150px",
                  }}
                >
                  <button
                    className="round"
                    style={{
                      width: "100%",
                      fontSize: "10px",
                      height: "30px",
                      backgroundColor: "#fe842f",
                      color: "white",
                      border: "none",
                    }}
                  >
                    START NOW
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img src={LearnImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 pb-4">
        <div className="row">
          <div className="col-md-4">
            <div
              className="bg-white round box_shadow w-75"
              style={{
                textAlign: "center",
                border: "1px solid #142656",
                background:
                  "linear-gradient(0deg, rgba(29,93,199,0.2) 0%, rgba(247,247,247,1) 27%)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img className="w-25 mt-4 mb-2" src={Book} alt="icon" />
              </div>
              <p style={{ color: "#142656", fontWeight: "800" }}>
                Learn from Scratch
              </p>
              <p
                style={{
                  color: "#142656",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
                vitae.
              </p>
              <p
                className="mb-2 p_style"
                style={{ fontWeight: "600", color: "#142656" }}
              >
                Start Now!
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="bg-white round box_shadow w-75"
              style={{
                textAlign: "center",
                border: "1px solid #142656",
                background:
                  "linear-gradient(0deg, rgba(29,93,199,0.2) 0%, rgba(247,247,247,1) 27%)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img className="w-25 mt-4 mb-2" src={Monitor} alt="icon" />
              </div>
              <p style={{ color: "#142656", fontWeight: "800" }}>
                Boundless Revision Classes
              </p>
              <p
                style={{
                  color: "#142656",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
                vitae.
              </p>
              <p
                className="mb-2 p_style"
                style={{ fontWeight: "600", color: "#142656" }}
              >
                Start Now!
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="bg-white round box_shadow w-75"
              style={{
                textAlign: "center",
                border: "1px solid #142656",
                background:
                  "linear-gradient(0deg, rgba(29,93,199,0.2) 0%, rgba(247,247,247,1) 27%)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img className="w-25 mt-4 mb-2" src={Guard} alt="icon" />
              </div>
              <p style={{ color: "#142656", fontWeight: "800" }}>
                Dedicated Client Maneger
              </p>
              <p
                style={{
                  color: "#142656",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
                vitae.
              </p>
              <p
                className="mb-2 p_style"
                style={{ fontWeight: "600", color: "#142656" }}
              >
                Start Now!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5
                style={{
                  color: "#1d5dc7",
                  fontSize: "24px",
                  fontWeight: "600",
                  marginTop: "5px",
                }}
              >
                Discover Lifelong Learning
              </h5>
            </div>
            <div className="col-md-6">
              <div>
                <div
                  style={{
                    display: "flex",
                    border: "2px solid grey",
                    borderRadius: "20px",
                    padding: "5px",
                  }}
                >
                  <input
                    className="ml-3"
                    style={{ width: "100%", border: "none", outline: "none" }}
                    type="text"
                    placeholder="Search Your Course"
                  />
                  <p className="m-0 mr-2">
                    <SearchIcon
                      style={{
                        color: "gery",
                        width: "30px",
                        height: "30px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "15px",
            borderBottom: "1px solid grey",
          }}
        >
          <p className="m-0 p_style">All Categories</p>
          <p className="m-0 p_style">Animation</p>
          <p className="m-0 p_style">Design</p>
          <p className="m-0 p_style">Development</p>
          <p className="m-0 p_style">Lifestyle</p>
          <p className="m-0 p_style">Photo & Film</p>
          <p className="m-0 p_style">Business</p>
          <p className="m-0 p_style">Writing</p>
        </div>
        <div className="container mt-5">
            <Carousel breakPoints={breakPoints}>
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </Carousel>
        </div>
      </div>
    </div>
  );
}
