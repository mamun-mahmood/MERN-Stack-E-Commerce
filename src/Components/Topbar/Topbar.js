import React from "react";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div>
      <div
        className="topbar bg-dark pt-2 mb-1"
        style={{
          zIndex: "9",
          display: "flex",
          justifyContent: "space-around",
          color: "white",
          alignItems: "center",
        }}
      >
        <p>Dropshipping</p>
        <p>Trader Shows</p>
        <p>Help</p>
        <p>For Buyers</p>
        <Link to="/seller_section" style={{ color: "white" }}>
          <div>
            <p style={{ textDecoration: "none" }}>For Buyers</p>
          </div>
        </Link>
        <p>Make Money On Globalhub</p>
      </div>
    </div>
  );
}
