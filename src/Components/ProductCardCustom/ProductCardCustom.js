import React from "react";
import "./ProductCardCustom.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ChatIcon from "@mui/icons-material/Chat";
import { Avatar } from "@mui/material";

export default function ProductCardCustom({Thumbnail1}) {
  console.log(Thumbnail1);
  return (
    <div className="card_main p-2 mr-3 bg-white" style={{boxShadow: '2px 2px 6px 0px rgba(0,0,0,0.79)'}}>
      <div
        className="card_top"
        style={{
          backgroundImage: `url(${Thumbnail1})`,
        }}
      >
        <div
          style={{
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
        <div style={{ overflow: "hidden" }}>
          <div
            style={{
              marginLeft: '14px',
              color: "white",
            }}
          >
            <div className="d-flex">
              <Avatar />
              <p className="m-0 mt-2 ml-2 text-white">Mamun Mahmood</p>
            </div>
            <div className="ml-1">
              <p className="m-0">
                __ Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                lorem20
              </p>
              <p className="0">#sneakers #supersneaker #run</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mr-2 p-1"
        style={{ display: "flex", justifyContent: "end" }}
      >
        <p className="m-0 text-dark" style={{ fontWeight: "560" }}>
          $4.0-$6.5
        </p>
      </div>
      <div
        className=""
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <button className="btn" style={{backgroundColor: '#fe842f', color: 'white'}}>Order Now</button>
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
