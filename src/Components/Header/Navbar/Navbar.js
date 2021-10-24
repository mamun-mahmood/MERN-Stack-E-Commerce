import React from "react";
import "./Navbar.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CompanyLogo from "../../../Resources/companyLogo.png";
import { Link } from "react-router-dom";
import Select from "react-select";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import MenuItem from "@mui/material/MenuItem";
import SelectDD from "@mui/material/Select";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MyNavLink = styled(NavLink)`
  &.${(props) => props.activeClassName} {
    color: rgba(50, 109, 203);
    border-bottom: 3px solid rgba(50, 109, 203);
  }
`;

const customStyles = {
  control: (base, state) => ({
    ...base,
    fontSize: 16,
    border: "none",
    border: state.isFocused ? 0 : 0,
    boxShadow: state.isFocused ? 0 : 0,
    cursor: "text",
    borderRadius: "5px",
    marginLeft: "5px",
    backgroundColor: "white",
    textAlign: "center",
  }),

  option: (styles, { isFocused }) => {
    return {
      ...styles,
      cursor: "pointer",
      backgroundColor: isFocused ? "white" : "white",
      color: isFocused ? "rgba(255, 80, 86)" : "black",
    };
  },

  input: (styles) => ({
    ...styles,
    color: "black",
  }),

  menu: (styles) => ({
    ...styles,
    marginTop: 7,
    boxShadow: "none",
    borderRadius: 0,
  }),

  singleValue: (styles) => ({
    ...styles,
    color: "black",
  }),
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "black",
      fontSize: "11px",
    };
  },
};
export default function NavbarContainer() {
  const aquaticCreatures = [
    { label: "Electronics", value: "Electronics" },
    { label: "Smartphone", value: "Smartphone" },
    { label: "Watch", value: "Watch" },
    { label: "Headphone", value: "Headphone" },
    { label: "Shirts", value: "Shirts" },
    { label: "Toys", value: "Toys" },
  ];
  const [age, setAge] = React.useState("All");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <div className="bg-white w-100 p-5" style={{zIndex: '8', position: 'fixed', top: '0'}}></div>
      <div className="navbar_container container-fluid bg-white pl-2 pr-2">
        <Link to="/">
          <img className="navLogo" src={CompanyLogo} alt="image" />
        </Link>
        <div className="search_field">
          <SelectDD
            className="ml-2"
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={age}
            onChange={handleChange}
            style={{ color: "white" }}
          >
            <MenuItem value="All">ALL</MenuItem>
            <MenuItem value={10}>Product</MenuItem>
            <MenuItem value={20}>Services</MenuItem>
            <MenuItem value={30}>Learning</MenuItem>
          </SelectDD>
          <div style={{ width: "70%" }}>
            <Select
              styles={customStyles}
              placeholder="ImpoNexpo your Products/Services here"
              options={aquaticCreatures}
              components={{
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null,
              }}
            />
          </div>

          <div className="pl-2 pr-2">
            <p>
              <CameraAltIcon
                className="search_icon"
                style={{
                  width: "25px",
                  height: "35px",
                  color: "white",
                }}
              />
            </p>
          </div>
          <div className="pl-1 pr-2 " style={{ borderLeft: "1px solid grey" }}>
            <p>
              <SearchOutlinedIcon
                className="search_icon"
                style={{
                  marginTop: "2px",
                  width: "30px",
                  height: "35px",
                  color: "white",
                }}
              />
            </p>
          </div>
        </div>
        <div className="nav_right_items">
          <MailOutlineIcon className="nav_icons" />
          <p className="nav_text">
            <MyNavLink
              to="/my_inbox"
              style={{ textDecoration: "none", color: "black" }}
              activeClassName="anyClassNameWillWork"
            >
              My Inbox
            </MyNavLink>
          </p>
        </div>
        <div className="nav_right_items">
          <DashboardCustomizeIcon className="nav_icons" />
          <p className="nav_text">
            <MyNavLink
              to="/my_orders"
              style={{ textDecoration: "none", color: "black" }}
              activeClassName="anyClassNameWillWork"
            >
              My Order
            </MyNavLink>
          </p>
        </div>
        <div className="nav_right_items">
          <AddShoppingCartIcon className="nav_icons" />
          <p className="nav_text">
            <MyNavLink
              to="/my_cart"
              style={{ textDecoration: "none", color: "black" }}
              activeClassName="anyClassNameWillWork"
            >
              My Cart
            </MyNavLink>
          </p>
        </div>
        <div className="nav_right_items">
          <NotificationsIcon className="nav_icons" />
          <p className="nav_text">
            <MyNavLink
              to="/notification"
              style={{ textDecoration: "none", color: "black" }}
              activeClassName="anyClassNameWillWork"
            >
              Notification
            </MyNavLink>
          </p>
        </div>
        <div className="nav_right_items">
          <Avatar className="avatar" />
          <p className="nav_text">
            <MyNavLink
              to="/signInuserPage"
              style={{ textDecoration: "none", color: "black" }}
              activeClassName="anyClassNameWillWork"
            >
              Login/Signup
            </MyNavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
