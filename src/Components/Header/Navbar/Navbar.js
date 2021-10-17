import React from "react";
import "./Navbar.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CompanyLogo from '../../../Resources/companyLogo.png'
import { Link } from "react-router-dom";
export default function NavbarContainer() {
  return (
    <div className="navbar_container bg-light">
      <Link to="/"><img className="navLogo" src={CompanyLogo} alt="" /></Link>
      <form action="">
        {/* <SearchOutlinedIcon/> */}
        <input className="search_field" type="text" />
      </form>
      <div className="nav_right_items">
        <MailOutlineIcon className="nav_icons" />
        <p>My Inbox</p>
      </div>
      <div className="nav_right_items">
        <DashboardCustomizeIcon className="nav_icons" />
        <p style={{textDecoration: 'none'}}><Link to="my_orders">My Order</Link></p>
      </div>
      <div className="nav_right_items">
        <AddShoppingCartIcon className="nav_icons" />
        <p>My Cart</p>
      </div>
      <div className="nav_right_items">
        <NotificationsIcon className="nav_icons" />
        <p>Notification</p>
      </div>
      <div className="nav_right_items">
        <Avatar className="avatar" />
        <p>My Imponexpo</p>
      </div>
    </div>
  );
}
