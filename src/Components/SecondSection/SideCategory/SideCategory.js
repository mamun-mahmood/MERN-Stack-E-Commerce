import React from "react";
import "./SideCatagory.css";
import KeyboardArrowRightSharpIcon from '@mui/icons-material/KeyboardArrowRightSharp';

export default function SideCategory() {
  return (
    <div className="left_side_category bg-light pt-1 pb-1 hide_scrollBar p-2">
      <>
        {/* <DropdownButton
          key="end"
          drop="end"
          variant="secondary"
          title={` Drop `}
        >
          <div className="side_category_dropdown_item">
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </div>
        </DropdownButton> */}
        <div className="each_category">
          <p>Sports </p>
          <p><KeyboardArrowRightSharpIcon /></p>
        </div>
        <div className="each_category">
          <p>Men's Cloths </p>
          <p><KeyboardArrowRightSharpIcon /></p>
        </div>
        <div className="each_category">
          <p>Women's Cloths</p>
          <p><KeyboardArrowRightSharpIcon /></p>
        </div>
        <div className="each_category">
          <p>Jewlirey</p>
          <p><KeyboardArrowRightSharpIcon /></p>
        </div>
        <div className="each_category">
          <p>Furnitures</p>
          <p><KeyboardArrowRightSharpIcon /></p>
        </div>
        <div className="each_category">
          <p>Accsecories</p>
          <p><KeyboardArrowRightSharpIcon /></p>
        </div>
        <div className="each_category">
          <p>Makeups</p>
          <p><KeyboardArrowRightSharpIcon /></p>
        </div>
        <div className="each_category">
          <p>Car</p>
          <p><KeyboardArrowRightSharpIcon /></p>
        </div>
        <div className="each_category">
          <p>Cycles</p>
          <p><KeyboardArrowRightSharpIcon /></p>
        </div>
        <div className="each_category">
          <p>Electronics</p>
          <p><KeyboardArrowRightSharpIcon /></p>
        </div>
      </>
    </div>
  );
}
