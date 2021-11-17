import React from "react";
import LearnImg from "../../Resources/learn.png";
import Book from "../../Resources/book-pngrepo-com.png";
import Monitor from "../../Resources/monitor-pngrepo-com.png";
import Guard from "../../Resources/people-safe-pngrepo-com.png";
export default function LearningPage() {
  return (
    <div>
      <div className="bg-white">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="mt-5 ml-5">
                <div style={{ color: "rgba(50, 109, 203)" }}>
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
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div
              className="bg-white round box_shadow w-75"
              style={{
                textAlign: "center",
                border: "1px solid rgba(50, 109, 203)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img className="w-25 mt-4 mb-2" src={Book} alt="icon" />
              </div>
              <p>Learn from Scratch</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
                vitae.
              </p>
              <button className="mb-2">Start Now!</button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-white">
              <img className="w-25" src={Book} alt="icon" />
              <p>Learn from Scratch</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
                vitae.
              </p>
              <button className="mb-1">Start Now!</button>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
}
