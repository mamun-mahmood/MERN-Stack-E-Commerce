import React from "react";
import Flag1 from "../../Resources/flag (1).png";
import Flag2 from "../../Resources/flag (2).png";
import Flag3 from "../../Resources/flag (3).png";
export default function SourceByRegion() {
  return (
    <div className="bg-white mt-5">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="left_border"></div>
        <div className="right_border"></div>
      </div>
      <div className="trending_header">
        <p>Source By Region</p>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-4 mb-3 col-md-2 col-lg-1 ml-5 bg-white d-flex box_shadow"
            style={{
              justifyContent: "space-around",
              alignItems: "center",
              borderRadius: "8px",
            }}
          >
            <img style={{ width: "60%" }} src={Flag1} alt="image" />
            <p className="m-0">England</p>
          </div>
          <div
            className="col-4 mb-3 col-md-2 col-lg-1 ml-5 bg-white d-flex box_shadow"
            style={{
              justifyContent: "space-around",
              alignItems: "center",
              borderRadius: "8px",
            }}
          >
            <img style={{ width: "60%" }} src={Flag2} alt="image" />
            <p className="m-0">England</p>
          </div>
          <div
            className="col-4 mb-3 col-md-2 col-lg-1 ml-5 bg-white d-flex box_shadow"
            style={{
              justifyContent: "space-around",
              alignItems: "center",
              borderRadius: "8px",
            }}
          >
            <img style={{ width: "60%" }} src={Flag3} alt="image" />
            <p className="m-0">England</p>
          </div>
          <div
            className="col-4 mb-3 col-md-2 col-lg-1 ml-5 bg-white d-flex box_shadow"
            style={{
              justifyContent: "space-around",
              alignItems: "center",
              borderRadius: "8px",
            }}
          >
            <img style={{ width: "60%" }} src={Flag1} alt="image" />
            <p className="m-0">England</p>
          </div>
          <div
            className="col-4 mb-3 col-md-2 col-lg-1 ml-5 bg-white d-flex box_shadow"
            style={{
              justifyContent: "space-around",
              alignItems: "center",
              borderRadius: "8px",
            }}
          >
            <img style={{ width: "60%" }} src={Flag2} alt="image" />
            <p className="m-0">England</p>
          </div>
          <div
            className="col-4 mb-3 col-md-2 col-lg-1 ml-5 bg-white d-flex box_shadow"
            style={{
              justifyContent: "space-around",
              alignItems: "center",
              borderRadius: "8px",
            }}
          >
            <img style={{ width: "60%" }} src={Flag3} alt="image" />
            <p className="m-0">England</p>
          </div>
          <div
            className="col-4 mb-3 col-md-2 col-lg-1 ml-5 bg-white d-flex box_shadow"
            style={{
              justifyContent: "space-around",
              alignItems: "center",
              borderRadius: "8px",
            }}
          >
            <img style={{ width: "60%" }} src={Flag1} alt="image" />
            <p className="m-0">England</p>
          </div>
          <div
            className="col-4 mb-3 col-md-2 col-lg-1 ml-5 bg-white d-flex box_shadow"
            style={{
              justifyContent: "space-around",
              alignItems: "center",
              borderRadius: "8px",
            }}
          >
            <img style={{ width: "60%" }} src={Flag2} alt="image" />
            <p className="m-0">England</p>
          </div>
          <div
            className="col-4 mb-3 col-md-2 col-lg-1 ml-5 bg-white d-flex box_shadow"
            style={{
              justifyContent: "space-around",
              alignItems: "center",
              borderRadius: "8px",
            }}
          >
            <img style={{ width: "60%" }} src={Flag3} alt="image" />
            <p className="m-0">England</p>
          </div>
        </div>
      </div>
    </div>
  );
}
