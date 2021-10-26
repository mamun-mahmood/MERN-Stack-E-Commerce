import React from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ProductCardMinimal from "../ProductCardMinimal/ProductCardMinimal";
import Thumbnail1 from "../../Resources/headphone.jpg";
export default function SellerProductpage() {
  const [age, setAge] = React.useState("EU");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="container">
              <div className="row">
                <div className="col-md-12 bg-white p-0 round">
                  <div className="border_bottom">
                    <div
                      className="bg-secondary pl-2 pt-2 box_shadow text-white"
                      style={{
                        display: "flex",
                      }}
                    >
                      <p className="m-0">
                        <FilterAltIcon />
                      </p>
                      <p className="m-0 ml-2">Filters</p>
                    </div>
                    <div className="m-1 p-3 border_bottom">
                      <p className="m-0 mb-2">Related Category</p>
                      <p className="m-0 category_left_btn">
                        Men's Formal Shoes
                      </p>
                      <p className="m-0 category_left_btn">Sandals</p>
                      <p className="m-0 category_left_btn">Men's Sneakers</p>
                      <p className="m-0 category_left_btn">Boys Formal Shoes</p>
                      <p className="m-0 category_left_btn">Loafers</p>
                      <p className="m-0 p_style">View More</p>
                    </div>
                    <div className="m-1 p-3 border_bottom">
                      <p className="m-0 mb-2">Brands</p>
                      <div className="d-flex">
                        <input
                          style={{ marginTop: "6px", width: "40px" }}
                          type="checkbox"
                        />
                        <p className="m-0 ml-2">Nike</p>
                      </div>
                      <div className="d-flex">
                        <input
                          style={{ marginTop: "6px", width: "40px" }}
                          type="checkbox"
                        />
                        <p className="m-0 ml-2">Adidas</p>
                      </div>
                      <div className="d-flex">
                        <input
                          style={{ marginTop: "6px", width: "40px" }}
                          type="checkbox"
                        />
                        <p className="m-0 ml-2">Jordan</p>
                      </div>
                      <div className="d-flex">
                        <input
                          style={{ marginTop: "6px", width: "40px" }}
                          type="checkbox"
                        />
                        <p className="m-0 ml-2">Reebok</p>
                      </div>
                    </div>
                    <div className="m-1 p-3 border_bottom">
                      <p className="m-0 mb-2">Location</p>
                      <p className="m-0 category_left_btn">USA</p>
                      <p className="m-0 category_left_btn">UK</p>
                      <p className="m-0 category_left_btn">China</p>
                      <p className="m-0 category_left_btn">Spain</p>
                      <p className="m-0 category_left_btn">Ukrain</p>
                      <p className="m-0 p_style">View More</p>
                    </div>
                    <div className="m-1 p-3 border_bottom">
                      <p className="m-0 mb-2">Price Range</p>
                      <p className="m-0 category_left_btn">USA</p>
                    </div>
                    <div className="m-1 p-3 border_bottom">
                      <p className="m-0 mb-2">Size</p>
                      <FormControl fullWidth>
                        <Select
                          variant="filled"
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          label="Age"
                          onChange={handleChange}
                        >
                          <MenuItem value={"EU"}>EU</MenuItem>
                          <MenuItem value={"UK"}>UK</MenuItem>
                          <MenuItem value={"USA"}>USA</MenuItem>
                        </Select>
                      </FormControl>
                      <div className="d-flex mt-2">
                        <input
                          style={{ marginTop: "6px", width: "40px" }}
                          type="checkbox"
                        />
                        <p className="m-0 ml-2">38</p>
                      </div>
                      <div className="d-flex">
                        <input
                          style={{ marginTop: "6px", width: "40px" }}
                          type="checkbox"
                        />
                        <p className="m-0 ml-2">39</p>
                      </div>
                      <div className="d-flex">
                        <input
                          style={{ marginTop: "6px", width: "40px" }}
                          type="checkbox"
                        />
                        <p className="m-0 ml-2">40</p>
                      </div>
                      <div className="d-flex">
                        <input
                          style={{ marginTop: "6px", width: "40px" }}
                          type="checkbox"
                        />
                        <p className="m-0 ml-2">41</p>
                      </div>
                    </div>
                    <div className="m-1 p-3 border_bottom">
                      <p className="m-0 mb-2">Colors</p>
                      <div className="d-flex">
                        <input
                          style={{ marginTop: "6px", width: "40px" }}
                          type="checkbox"
                        />
                        <p className="m-0 ml-2">Blue</p>
                      </div>
                      <div className="d-flex">
                        <input
                          style={{ marginTop: "6px", width: "40px" }}
                          type="checkbox"
                        />
                        <p className="m-0 ml-2">Brown</p>
                      </div>
                      <div className="d-flex">
                        <input
                          style={{ marginTop: "6px", width: "40px" }}
                          type="checkbox"
                        />
                        <p className="m-0 ml-2">Black</p>
                      </div>
                      <div className="d-flex">
                        <input
                          style={{ marginTop: "6px", width: "40px" }}
                          type="checkbox"
                        />
                        <p className="m-0 ml-2">Grey</p>
                      </div>
                    </div>
                    <div className="m-1 p-3">
                      <p className="m-0 mb-2">Warranty Type</p>
                      <div className="d-flex">
                        <input
                          style={{ marginTop: "6px", width: "40px" }}
                          type="checkbox"
                        />
                        <p className="m-0 ml-2">Brand Warranty</p>
                      </div>
                      <div className="d-flex">
                        <input
                          style={{ marginTop: "6px", width: "40px" }}
                          type="checkbox"
                        />
                        <p className="m-0 ml-2">No Warranty</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <h6
              style={{
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "580",
              }}
            >
              Products on <span style={{ color: "orange" }}>Sale</span>
            </h6>
            <div className="container">
              <div className="row">
                <div className="col-md-12 bg-white p-4">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4">
                        <ProductCardMinimal Thumbnail1={Thumbnail1} />
                      </div>
                      <div className="col-md-4">
                        <ProductCardMinimal Thumbnail1={Thumbnail1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
