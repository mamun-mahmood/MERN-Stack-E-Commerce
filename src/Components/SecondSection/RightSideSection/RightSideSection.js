import React from "react";
import "./RightSideSection.css";

export default function RightSideSection() {
  return (
    <div className="right_side_section container mt-2">
      <h5 className="text-primary" style={{ textAlign: "center" }}>
        One request, Multiple Quotes
      </h5>
      <p>
        Lorem ipsum dolor, sit amdipisci est aliquid in ipsa ut quis enesciunt!
        Deserunt!
      </p>
      <form action="">
        <input
          style={{ borderRadius: "20px", padding: "10px", width: "300px" }}
          type="text"
          name=""
          id=""
          placeholder="What are you looking for?"
        />
        <div className="second_inputs mt-4 mb-4">
          <input type="text" name="" id="" placeholder="Quality" />
          <input type="text" name="" id="" placeholder="Price/Pieces" />
        </div>
        <button
          style={{
            borderRadius: "20px",
            backgroundColor: "rgb(29, 93, 200)",
            padding: "10px",
            color: "white",
            border: "none",
          }}
        >
          Request for Quotation
        </button>
      </form>
    </div>
  );
}
