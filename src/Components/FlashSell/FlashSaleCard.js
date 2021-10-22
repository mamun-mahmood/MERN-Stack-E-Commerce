import React from "react";

export default function FlashSaleCard({ sofa }) {
  return (
    <div className="">
      <div className="p-2">
        <div className="p-1 bg-light round blinking_border">
          <div
            className=""
            style={{
              height: "200px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img className="" style={{ maxHeight: "90%" }} src={sofa} alt="image" />
          </div>
          <p className="m-0 pl-2 pr-2">Lorem ipsum dolor sit amet.</p>
          <div
            className="pl-2 pr-2"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <p className="m-0" style={{ color: "#fe842f" }}>
              $15
            </p>
            <s>$23</s>
          </div>
        </div>
      </div>
    </div>
  );
}
