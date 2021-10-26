import React from "react";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import ShareIcon from "@mui/icons-material/Share";
// import ChatIcon from "@mui/icons-material/Chat";
import { Avatar, Rating } from "@mui/material";
import { Link } from "react-router-dom";
// import AddBoxIcon from "@mui/icons-material/AddBox";
// import SaveIcon from "@mui/icons-material/Save";

export default function ProductCardMinimal({ Thumbnail1 }) {
  return (
    <div
      className="card_main_minimal p-2 mr-1 ml-1 bg-white"
      style={{ boxShadow: "2px 2px 6px 0px rgba(0,0,0,0.79)" }}
    >
      <div>
        <div style={{ position: "relative" }}>
          <img
            className="box_shadow round"
            src={Thumbnail1}
            style={{ width: "100%", maxHeight: "50%" }}
            alt=""
          />
          <div
            style={{
              float: "right",
              position: "absolute",
              backgroundColor: "#fe842f",
              right: "0px",
              top: "0px",
              marginLeft: "auto",
              textAlign: "center",
              borderRadius: "50%",
              marginTop: "-20px",
              marginRight: "-20px",
              padding: '5px 0px'
            }}
          >
            <p className="m-0 p-2" style={{ fontSize: "14px", color: 'white', fontWeight: '600'}}>
              -50%
            </p>
            {/* <p className="icon_white">
              <ChatIcon />
            </p>
            <p className="icon_white" style={{ paddingBottom: "2px" }}>
              <ShareIcon />
            </p>
            <p className="icon_white" style={{ paddingBottom: "2px" }}>
              <SaveIcon />
            </p> */}
          </div>
        </div>
        <div>
          <div
            style={{
              color: "white",
            }}
          >
            <div className="ml-1">
              <Link
                to="/product_details"
                style={{ textDecoration: "none", color: "black" }}
              >
                <p
                  className="m-0"
                  style={{ height: "50px", overflow: "hidden" }}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Lorem ipsum dolor sit amet.
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p
            className="m-0 pl-1"
            style={{
              color: "#fe842f",
              fontWeight: "600",
            }}
          >
            $4.50 - $6-5
          </p>
          <s className="m-0 pr-1 text-dark">$12</s>
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <Rating name="read-only" value={4} readOnly />
          <p className="m-0 mb-1 mt-1" style={{ fontSize: "15px" }}>
            (10)
          </p>
        </div>
        <div
          className=""
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <button
            className="btn"
            style={{
              fontSize: "12px",
              width: "81px",
              color: "white",
              backgroundColor: "white",
              border: "2px solid #326dcb",
              color: "#326dcb",
            }}
          >
            Min Order
          </button>
          <button
            className="btn"
            style={{
              fontSize: "10px",
              width: "81px",
              color: "white",
              backgroundColor: "#326dcb",
            }}
          >
            Group Import
          </button>
        </div>
      </div>
    </div>
  );
}
