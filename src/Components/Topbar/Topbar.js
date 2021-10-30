import { Select } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import India from "../../Resources/india-pngrepo-com.png"
import China from "../../Resources/china-pngrepo-com.png"
import UK from "../../Resources/united-kingdom-pngrepo-com.png"
export default function Topbar() {
  const [age, setAge] = React.useState("English");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="topbar_contaier">
      <div
        className="topbar pt-2 mb-1"
        style={{
          backgroundColor: 'rgba(50, 109, 203)',
          zIndex: "11",
          display: "flex",
          justifyContent: "space-around",
          color: "white",
          alignItems: "center",
        }}
      >
        <p>Dropshipping</p>
        <p>Trader Shows</p>
        <p>Help</p>
        <Link to="/seller_section" style={{ color: "white" }}>
          <div>
            <p style={{ textDecoration: "none" }}>For Seller</p>
          </div>
        </Link>
        <p>Make Money On Globahub</p>
        <div>
          <Select
            className="ml-2"
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={age}
            onChange={handleChange}
            style={{ color: "white", height: "40px", marginTop: "-5px" }}
          >
            <MenuItem value="English"><img width={30} className="mr-1" src={UK} alt="" /><span className="mt-2">English</span></MenuItem>
            <MenuItem value={20}><img width={30} className="mr-1" src={China} alt="" /><span className="mt-2">Chinese</span></MenuItem>
            <MenuItem value={30}><img width={30} className="mr-1" src={India} alt="" /><span className="mt-2">Hindi</span></MenuItem>
          </Select>
        </div>
      </div>
    </div>
  );
}
