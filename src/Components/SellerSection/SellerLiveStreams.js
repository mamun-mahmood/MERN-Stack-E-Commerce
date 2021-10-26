import React from "react";
import ReactPlayer from "react-player";
import VideoPlayerCard from "../TrendingLiveStream/VideoPlayerCard";

export default function SellerLiveStreams() {
  return (
    <div>
      <div className="container bg-white p-5">
        <h4
          style={{ color: "#326dcb", fontWeight: "600", paddingBottom: "5px" }}
        >
          Nike Shoes is Live Now
        </h4>
        <ReactPlayer
          controls={true}
          pip={true}
          className="w-100"
          url="https://youtu.be/6tyCQ2Tp2SQ"
        />
      </div>
      <div className="mt-4 container">
        <p
          className="m-0 pb-3"
          style={{ fontWeight: "580", fontSize: "24px", color: "grey" }}
        >
          Recent Live stream from this store
        </p>
        <div className="container">
          <div className="row">
            <VideoPlayerCard/>
            <VideoPlayerCard/>
            <VideoPlayerCard/>
            <VideoPlayerCard/>
            <VideoPlayerCard/>
            <VideoPlayerCard/>
          </div>
        </div>
      </div>
    </div>
  );
}
