import React from "react";
import ReactPlayer from "react-player";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ChatIcon from "@mui/icons-material/Chat";
import { Avatar, Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddBoxIcon from "@mui/icons-material/AddBox";

export default function VideoPlayerCard() {
  return (
    <div className="col-md-4 col-12 col-lg-3 mb-4 round bg-white p-2">
      <div className="bg-light p-1 box_shadow round">
        <div className="p-1">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="d-flex">
              <Avatar />
              <div className=" ml-2 text-white">
                <p className="m-0 text-dark">Mamun Mahmood</p>
                <small className="m-0 text-secondary">1.4k Followers</small>
              </div>
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <AddBoxIcon className="icon_white" style={{color: 'red'}} />
                <small>Follow</small>
              </div>
            </div>
          </div>
        </div>
        <ReactPlayer
          controls={true}
          pip={true}
          className="w-100"
          url="https://youtu.be/6tyCQ2Tp2SQ"
        />
        <p
          style={{
            position: "absolute",
            top: "68px",
            right: "13px",
            zIndex: "1",
            color: "white",
            backgroundColor: "red",
            padding: "0px 5px",
            borderRadius: "15px",
          }}
        >
          Live
        </p>
        <div
          style={{
            position: "absolute",
            top: "80px",
            right: "0px",
            zIndex: "1",
            backgroundColor: "#1b1b1b",
            width: "30px",
            marginLeft: "auto",
            textAlign: "center",
            paddingTop: "11px",
            borderRadius: "20px",
            marginTop: "9%",
            marginRight: "15px",
          }}
        >
          <p className="icon_white" style={{ paddingTop: "5px" }}>
            <FavoriteBorderIcon />
          </p>
          <p className="icon_white">
            <ChatIcon />
          </p>
          <p className="icon_white" style={{ paddingBottom: "2px" }}>
            <ShareIcon />
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <small className="text-primary">#Chanels</small>
          <small style={{ display: "flex", alignItems: "center" }}>
            <VisibilityIcon style={{ color: "green" }} />{" "}
            <span style={{ marginTop: "3px" }}>1.2k Watching</span>
          </small>
        </div>
        <p className="m-0 p-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
          recusandae!
        </p>
        <p
          className="m-0 p-1"
          style={{
            color: "#fe842f",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          $4.50 - $6-5
        </p>
        <Button
          fullWidth
          style={{ backgroundColor: "#326dcb", color: "white" }}
        >
          Invite People
        </Button>
      </div>
    </div>
  );
}
