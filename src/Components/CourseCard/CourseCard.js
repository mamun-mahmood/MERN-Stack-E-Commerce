import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ChatIcon from "@mui/icons-material/Chat";
import Course from "../../Resources/course.png"
export default function CourseCard() {
  return (
    <div className="box_shadow m-4" style={{borderRadius: '25px'}}>
      <img className="w-100" style={{borderTopRightRadius: '25px', borderTopLeftRadius: '25px'}} src={Course} alt="cover-img" />
      <h5 className="pl-2 pr-2 mt-1"
        style={{
          color: "#1d5dc7",
          fontSize: "16px",
          fontWeight: "600",
        }}
      >
        Unlocking Your Potential: 5 Exercise to Build Creative Confidence
      </h5>
      <p className="pl-2 m-0 text-secondary" style={{borderBottom: '1px solid grey'}}>Grapics Design - By Emma Watson</p>
      <div>
        <div
        className="mt-2"
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <p
            className=""
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <FavoriteBorderIcon />
            Like
          </p>
          <p
            className=""
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <ChatIcon />
            Comment
          </p>
          <p
            className=""
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <ShareIcon />
            Share
          </p>
        </div>
      </div>
    </div>
  );
}
