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
import ModalContainer from "../../Messenger/ModalContainer";
import { useAuth } from "../../AuthContext";

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
    backgroundColor: "rgba(50, 109, 203)",
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
    color: "white",
  }),

  menu: (styles) => ({
    ...styles,
    marginTop: -1,
    boxShadow: "none",
    borderRadius: 0,
    backgroundColor: "rgba(50, 109, 203)",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  }),

  singleValue: (styles) => ({
    ...styles,
    color: "white",
  }),
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "white",
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
  const [modalShow, setModalShow] = React.useState(false);
  const {currentUser} = useAuth();
  return (
    <div>
      <div
        className="bg-white w-100"
        style={{ zIndex: "8", position: "fixed", top: "0" }}
      >
        <marquee
          className="p-3"
          width="100%"
          style={{ fontSize: "20px" }}
          direction="left"
        >
          Welcome to ImpoNexpo, we are a multivendor B2B Ecommerce Platfrom.
          Here you will find millions of product from thousands of companies
          accross the world. You can buy your desired products or services just
          right here. Read our privacy policy for more information.
        </marquee>
      </div>
      <div className="navbar_container container-fluid bg-white pl-2 pr-2">
        <Link to="/">
          <img className="navLogo" src={CompanyLogo} alt="image" />
        </Link>
        <div className="search_field">
          <SelectDD
            variant="standard"
            className="ml-3"
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={age}
            onChange={handleChange}
            disableUnderline
            style={{ color: "white", backgroundColor: "rgba(50, 109, 203)" }}
          >
            <MenuItem value="All">ALL</MenuItem>
            <MenuItem value="Product">Products</MenuItem>
            <MenuItem value="Service">Services</MenuItem>
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
          <p
            className="nav_text"
            onClick={() => setModalShow(true)}
            to=""
            onClick={() => setModalShow(true)}
            style={{ textDecoration: "none", color: "black" }}
            activeClassName="anyClassNameWillWork"
          >
            My Inbox
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
              {currentUser ? currentUser.email : "Login/Signup"}
            </MyNavLink>
          </p>
        </div>
      </div>
      <ModalContainer show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}
