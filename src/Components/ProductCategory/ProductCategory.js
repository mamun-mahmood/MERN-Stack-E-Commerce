import React from "react";
import "./ProductCategory.css";
// import Image11 from "../../Resources/daiga-ellaby-uooMllXe6gE-unspl.png";
// import Image22 from "../../Resources/daiga-ellaby-uooMllXe6gE-unspl@2x.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ProductCategoryTemp from "./ProductCategoryTemp";
import ProductCategoryTemp2 from "./ProductCategoryTemp2";
export default function ProductCategory() {
  return (
    <div className="bg-white pl-2 mt-5 pb-2">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="left_border"></div>
        <div className="right_border"></div>
      </div>
      <div className="trending_header">
        <p>product category</p>
      </div>
      <div>
        <ProductCategoryTemp/>
        <ProductCategoryTemp2/>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <div
          className="p_style mt-3 box_shadow"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "white",
            width: "335px",
            height: "54px",
            borderRadius: "30px",
            backgroundColor: "#326dcb",
            marginBottom: "15px",
          }}
        >
          <p className="m-0 ml-5" style={{ fontWeight: "600", fontSize: '15px'}}>
            Explore More Proudct Category
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "54px",
              height: "54px",
              backgroundColor: "white",
              borderRadius: "50%",
              padding: "0px 0px",
            }}
          >
            <ArrowForwardIosIcon
              className=""
              style={{
                color: "#326dcb",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
