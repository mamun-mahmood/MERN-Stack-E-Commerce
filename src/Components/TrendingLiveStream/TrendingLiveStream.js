import React from "react";
import VideoPlayerCard from "./VideoPlayerCard";

export default function TrendingLiveStream() {
  return (
    <div className="bg-light">
      <div className="trending_header">
        <p>trending on imponexpo Livestream</p>
      </div>
      <div className="container-fluid" style={{width: '90%'}}>
        <div className="row">
          <VideoPlayerCard/>
          <VideoPlayerCard/>
          <VideoPlayerCard/>
          <VideoPlayerCard/>
          <VideoPlayerCard/>
          <VideoPlayerCard/>
          <VideoPlayerCard/>
          <VideoPlayerCard/>
        </div>
      </div>
    </div>
  );
}
