import React from "react";
import "./Secondbar.css";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MyNavLink = styled(NavLink)`
  &.${(props) => props.activeClassName} {
    color: rgba(50, 109, 203);
    border-bottom: 3px solid rgba(50, 109, 203);
  }
`;

export default function Secondbar() {
  return (
    <div className="second_bar container-fluid pl-5 mt-4">
      <div className="second_bar_left pl-2">
        <MenuOutlinedIcon />
        <p>Categories</p>
      </div>
      <p>SAVE MORE ON APP</p>
      <p>AFFILIATE PROGRAME</p>
      <div className="dropdown">
        <div style={{ display: "flex", alignItems: "center" }}>
          <p className="dropbtn">SELL ON IMPONEXPO</p>
          <p>
            {" "}
            <ArrowDropDownOutlinedIcon />
          </p>
        </div>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <p>CUSTOMER CARE</p>
      <Link to="/order_track" style={{ color: "black" }}>
        <div>
          <p style={{ textDecoration: "none" }}>TRACK ORDER</p>
        </div>
      </Link>
      <div className="dropdown">
        <div style={{ display: "flex", alignItems: "center" }}>
          <p className="dropbtn">HELP</p>
          <p>
            <ArrowDropDownOutlinedIcon />
          </p>
        </div>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      
    </div>
  );
}
