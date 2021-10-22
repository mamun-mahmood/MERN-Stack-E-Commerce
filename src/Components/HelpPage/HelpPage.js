import React from "react";
import './HelpPage.css'
import ShippingIcon from "../../Resources/cart-logistics-delivery-pngrepo-com.png";
import Account from '../../Resources/account.svg'
import Order from '../../Resources/order.svg'
import Category from '../../Resources/cart.svg'
import Payment from '../../Resources/payment-method.svg'
import Return  from '../../Resources/return.svg'
import Refund  from '../../Resources/refund.svg'
import Promotion  from '../../Resources/marketing-seo-advertising-promotion.svg'
export default function HelpPage() {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <div>
        <p>Help Page</p>
      </div>
      <div className="round p-4" style={{ backgroundColor: "#1d5dc7" }}>
        <p className="text-white">Hi, how can we help you?</p>
        <form action="" style={{ marginLeft: "25%", marginRight: "25%" }}>
          <input
            className="form-control"
            type="text"
            placeholder="Search a question e.g. How to buy?"
          />
        </form>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <p className="p_style">Where is My order</p>
          <div
            className="bg-white round"
            style={{
              width: "150px",
              boxShadow: "0px 1px 3px 1px rgba(0,0,0,0.63)",
            }}
          >
            <img style={{ width: "100px" }} src={ShippingIcon} alt="image" />
            <p>
              My Oder <br />
              <small>Track Your order.</small>
            </p>
          </div>
        </div>
      </div>
      <div
        className="container mb-5"
        style={{
          textAlign: "start",
          boxShadow: "0px 1px 3px 1px rgba(0,0,0,0.63)",
        }}
      >
        <div className="row bg-white round p-2">
          <div className="col-md-4">
            <p className="p_style">Q. What is the delivery charge?</p>
          </div>
          <div className="col-md-4">
            <p className="p_style">Q. What is the delivery charge?</p>
          </div>
          <div className="col-md-4">
            <p className="p_style">Q. What is the delivery charge?</p>
          </div>
          <div className="col-md-4">
            <p className="p_style">
              Q. My order has been failed, what should I do?
            </p>
          </div>
          <div className="col-md-4">
            <p className="p_style">
              Q. My order has been failed, what should I do?
            </p>
          </div>
          <div className="col-md-4">
            <p className="p_style">
              Q. My order has been failed, what should I do?
            </p>
          </div>
          <div className="col-md-4">
            <p className="p_style">
              Q. My order has been failed, what should I do?
            </p>
          </div>
          <div className="col-md-4">
            <p className="p_style">
              Q. My order has been failed, what should I do?
            </p>
          </div>
          <div className="col-md-4">
            <p className="p_style">
              Q. My order has been failed, what should I do?
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
            <div
              className="bg-white round col-md-3 box_shadow"
            >
              <img className="help_page_icon" src={Account} alt="image" />
              <p className='p_style'>Account Management</p>
            </div>
            <div
              className="bg-white round col-md-3 box_shadow"
            >
              <img className="help_page_icon" src={Order} alt="image" />
              <p className='p_style'>Order</p>
            </div>
            <div
              className="bg-white round col-md-3 box_shadow"
            >
              <img className="help_page_icon" src={Category} alt="image" />
              <p className='p_style'>Category</p>
            </div>
            <div
              className="bg-white round col-md-3 box_shadow"
            >
              <img className="help_page_icon" src={Payment} alt="image" />
              <p className='p_style'>Payments</p>
            </div>
            <div
              className="bg-white round col-md-3 box_shadow"
            >
              <img className="help_page_icon" src={ShippingIcon} alt="image" />
              <p className='p_style'>Shipping & Delivery</p>
            </div>
            <div
              className="bg-white round col-md-3 box_shadow"
            >
              <img className="help_page_icon" src={Return} alt="image" />
              <p className='p_style'>Returns</p>
            </div>
            <div
              className="bg-white round col-md-3 box_shadow"
            >
              <img className="help_page_icon" src={Refund} alt="image" />
              <p className='p_style'>Refunds</p>
            </div>
            <div
              className="bg-white round col-md-3 box_shadow"
            >
              <img className="help_page_icon" src={Promotion} alt="image" />
              <p className='p_style'>Promotions</p>
            </div>
        </div>
      </div>
    </div>
  );
}
