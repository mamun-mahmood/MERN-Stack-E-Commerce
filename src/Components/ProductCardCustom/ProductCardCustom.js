import React from "react";
import "./ProductCardCustom.css";
import Thumbnail1 from "../../Resources/thumb1212.png";

export default function ProductCardCustom() {
  return (
    <div className="card_main p-2 bg-white">
      <img
        style={{ borderRadius: "10px" }}
        src="https://cdn.vox-cdn.com/thumbor/lRwetR_dg8WBLFIUPzY7l0QYCaI=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22411713/cfaulkner_20210326_4491_0006.jpg"
        alt=""
      />
      <div
        className="mr-2 p-1"
        style={{ display: "flex", justifyContent: "end" }}
      >
        <p className="m-0">$4.0-$6.5</p>
      </div>
      <div
        className=""
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <button
          className="btn btn-outline-primary"
        >
          Buy Now
        </button>
        <button
          className="btn"
          style={{ color: "white", backgroundColor: "#326dcb" }}
        >
          Group Buy
        </button>
      </div>
    </div>
  );
}
