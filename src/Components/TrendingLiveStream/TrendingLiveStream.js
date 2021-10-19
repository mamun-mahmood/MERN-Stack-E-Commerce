import React from "react";
import VideoPlayerCard from "./VideoPlayerCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export default function TrendingLiveStream() {
  return (
    <div className="bg-light">
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
      <div className="p_style" style={{display: 'flex', justifyContent: 'space-around', color: 'white', width: '25%', marginLeft: '37.5%',borderRadius: '10px', padding: '10px 0px', backgroundColor: '#326dcb', marginBottom: '15px'}}>
        <p className="m-0">Explore More Live Stream</p>
        <ArrowForwardIosIcon style={{backgroundColor: 'white', color: '#326dcb', borderRadius: '50%', padding: '0px 0px'}}/>
      </div>
    </div>
  );
}
