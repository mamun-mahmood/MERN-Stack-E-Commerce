import { Select } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";

export default function Topbar() {
  const [age, setAge] = React.useState("English");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <div
        className="topbar bg-dark pt-2 mb-1"
        style={{
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
            <p style={{ textDecoration: "none" }}>For Buyers</p>
          </div>
        </Link>
        <p>Make Money On Globalhub</p>
        <div>
          <Select
            className="ml-2"
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={age}
            onChange={handleChange}
            style={{ color: "white", height: "40px", marginTop: "-5px" }}
          >
            <MenuItem value="English">English</MenuItem>
            <MenuItem value={20}>Chinese</MenuItem>
            <MenuItem value={30}>Hindi</MenuItem>
          </Select>
        </div>
      </div>
    </div>
  );
}
