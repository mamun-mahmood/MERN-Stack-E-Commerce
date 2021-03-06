import React from "react";
import { Avatar, Rating } from "@mui/material";

export default function TestimonialCard() {
  return (
    <div className="bg-light testimonial mr-2 mb-1" style={{ height: "300px", borderRadius: '20px', boxShadow: '1px 1px 1px 1px rgba(0,0,0,0.71)' }}>
      <div
        className="p-2 pb-0 mb-2 testimonial_top"
        style={{
          textAlign: "center",
          backgroundColor: "#1d5dc7",
          height: "67%",
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
        }}
      >
        <h6 style={{ color: "white", fontSize: "20px" }}>Testimonial</h6>
        <div style={{height: '62%'}}>
          <p style={{ color: "white" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            culpa fugit, quos quas quisquam illum, nulla alias tempora tenetur Lorem, ipsum dolor.
          </p>
        </div>
        <p
          className="m-0"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Avatar sx={{ width: 70, height: 70, bgcolor: "red" }}>MM</Avatar>
        </p>
      </div>
      <div className="pb-2 mt-4" style={{ textAlign: "center" }}>
        <p className="m-0">David Roxario</p>
        <p>
          <Rating value={5} />
        </p>
      </div>
    </div>
  );
}
