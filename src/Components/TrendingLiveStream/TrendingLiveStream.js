import React from "react";
import VideoPlayerCard from "./VideoPlayerCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export default function TrendingLiveStream() {
  return (
    <div className="bg-white mt-5 pb-2">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="left_border"></div>
        <div className="right_border"></div>
      </div>
      <div className="trending_header">
        <p>trending on imponexpo Livestream</p>
      </div>
      <div className="container-fluid" style={{ width: "90%" }}>
        <div className="row">
          <VideoPlayerCard />
          <VideoPlayerCard />
          <VideoPlayerCard />
          <VideoPlayerCard />
          <VideoPlayerCard />
          <VideoPlayerCard />
        </div>
      </div>
      <div
        className="p_style mt-3 box_shadow"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
          width: "335px",
          height: "54px",
          marginLeft: "37.5%",
          borderRadius: "30px",
          backgroundColor: "#326dcb",
          marginBottom: "15px",
        }}
      >
        <p className="m-0 ml-5" style={{ fontWeight: "600" }}>
          Explore More Livestream
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: "54px",
            height: "54px",
            backgroundColor: "white",
            borderRadius: "50%",
            padding: "0px 0px",
          }}
        >
          <ArrowForwardIosIcon
            className=""
            style={{
              color: "#326dcb",
            }}
          />
        </div>
      </div>
    </div>
  );
}
