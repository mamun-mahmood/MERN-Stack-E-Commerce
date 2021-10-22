import React from "react";
import "./ProductCardCustom.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ChatIcon from "@mui/icons-material/Chat";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import AddBoxIcon from "@mui/icons-material/AddBox";

export default function ProductCardCustom({ Thumbnail1 }) {
  return (
    <div
      className="card_main p-2 mr-1 ml-1 bg-white"
      style={{ boxShadow: "2px 2px 6px 0px rgba(0,0,0,0.79)" }}
    >
      <div>
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
              <small className="m-0 text-secondary">@username</small>
            </div>
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <AddBoxIcon className="icon_white" style={{ color: "red" }} />
              <small>Follow</small>
            </div>
            <small className="m-0 text-secondary">1.4k Followers</small>
          </div>
        </div>
        <div  style={{position: 'relative'}}
        >
          <img
            src={Thumbnail1}
            style={{ width: "100%", maxHeight: "50%" }}
            alt=""
          />
          <div
            style={{
              float: 'right',
              position: 'absolute',
              backgroundColor: "#1b1b1b",
              right: '0px',
              top: '0px',
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
                <p className="m-0" style={{height: '50px', overflow: 'hidden'}}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Lorem ipsum dolor sit amet.
                </p>
              </Link>
              <p className="m-0" style={{ color: "black" }}>
                <span className="p_style">#sneakers</span> <span className="p_style">#supersneaker</span> <span className="p_style">#run</span>
              </p>
            </div>
          </div>
          
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p
            className="m-0 pl-3"
            style={{
              color: "#fe842f",
              fontWeight: "600",
            }}
          >
            $4.50 - $6-5
          </p>
          <small className="m-0 pr-3">Min order: 20</small>
        </div>
        <div
          className=""
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <button
            className="btn"
            style={{fontSize: '10px', width: '81px',backgroundColor: "#fe842f", color: "white" }}
          >
            Order Now
          </button>
          <button
            className="btn"
            style={{fontSize: '10px', width: '81px', color: "white", backgroundColor: "#326dcb" }}
          >
            Group Import
          </button>
          <button
            className="btn"
            style={{
              fontSize: '10px',
              width: '81px',
              color: "white",
              backgroundColor: "white",
              border: "2px solid grey",
              color: "grey",
            }}
          >
            Chat Now
          </button>
        </div>
      </div>
    </div>
  );
}
