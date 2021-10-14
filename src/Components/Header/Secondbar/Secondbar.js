import React from "react";
import "./Secondbar.css";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
export default function Secondbar() {
  return (
    <div className="second_bar">
      <div className="second_bar_left">
        <MenuOutlinedIcon />
        <p>Categories</p>
      </div>
      <p>SAVE MORE ON APP</p>
      <p>AFFILIATE PROGRAME</p>
      <div className="dropdown">
        <p className="dropbtn">SELL ON IMPONEXPO <ArrowDropDownOutlinedIcon />
        </p>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <p>CUSTOMER CARE</p>
      <p>TRACK ORDER</p>
      <div className="dropdown">
        <p className="dropbtn">
          HELP<ArrowDropDownOutlinedIcon />
        </p>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <p>LOGIN/SIGNUP</p>
    </div>
  );
}
