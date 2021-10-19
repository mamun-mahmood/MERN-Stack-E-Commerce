import React from "react";
import Banner55 from "../../Resources/banner55.png";
import Banner66 from "../../Resources/banner66.png";

export default function BottomBanner() {
  return (
    <div className="bg-white">
      <div className="container pt-4 pb-2">
        <div className="row ">
          <div className="col-md-6 mb-3">
            <img src={Banner55} alt="" />
          </div>
          <div className="col-md-6 mb-3">
            <img src={Banner66} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}