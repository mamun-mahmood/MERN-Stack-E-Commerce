import React from "react";
import "./Midsecction.css";
import PaymentIcon from "../../Resources/payment-method-pngrepo-com.png";
import Handshake from "../../Resources/handshake-pngrepo-com.png";
import Logistics from "../../Resources/cart-logistics-delivery-pngrepo-com.png";
import CustomerService from "../../Resources/customer-service-pngrepo-com.png";
import Diamond from "../../Resources/diamond-pngrepo-com.png";
import Localization from "../../Resources/gps-geolocalization-pngrepo-com.png";
import Language from "../../Resources/translator-language-pngrepo-com.png";
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function Midsection() {
  return (
    <div className="mid_section">
      <div className="why_use ">
        <p>why use imponexpo</p>
      </div>
      <p className="mb-3 p-3" style={{ width: "50%", marginLeft: "25%" }}>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        cupiditate nulla culpa consequuntur est tempora laudantium reiciendis
        maiores praesentium autem rem perferendis exercitationem accusamus,
        obcaecati sapiente nostrum corporis atque ex?
      </p>
      <div className="container-fluid why_us_bottom pb-4">
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img style={{ width: "60px" }} src={Handshake} alt="" />
          </div>
          <p>Reliable Merchants</p>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img style={{ width: "60px" }} src={PaymentIcon} alt="" />
          </div>
          <p>Secure Payment</p>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img style={{ width: "60px" }} src={CustomerService} alt="" />
          </div>
          <p>Customer Service</p>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img style={{ width: "60px" }} src={Diamond} alt="" />
          </div>
          <p>Quality Products</p>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img style={{ width: "60px" }} src={Language} alt="" />
          </div>
          <p>Solving Language Barrier</p>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img style={{ width: "60px" }} src={Logistics} alt="" />
          </div>
          <p>Logistics</p>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img style={{ width: "60px" }} src={Localization} alt="" />
          </div>
          <p>Localization</p>
        </div>
      </div>
    </div>
  );
}
