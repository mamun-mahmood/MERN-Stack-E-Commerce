import React from "react";
import "./PaymentPage.css";
import Visa from "../../Resources/visa.png";
import Paypal from "../../Resources/Paypal.jpg";
import Payoneer from "../../Resources/Payoneer.png";
import MasterCard from "../../Resources/master_card.png";
import Stripe from "../../Resources/stripe.png";
import ProcessPayment from "./StripePayment/ProcessPayment";
import Button from "@mui/material/Button";

export default function PaymentPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 mt-2">
          <div
            className="bg-white p-3 round"
            style={{ boxShadow: "0px 5px 8px -9px rgba(0, 0, 0, 0.75)" }}
          >
            <p style={{ color: "grey", fontSize: "18px" }}>
              Select Payment Method
            </p>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <img className="payment_options" src={Stripe} alt="image" />
              <img className="payment_options" src={Visa} alt="image" />
              <img className="payment_options" src={Payoneer} alt="image" />
              <img className="payment_options" src={MasterCard} alt="image" />
              <img className="payment_options" src={Paypal} alt="image" />
            </div>
          </div>
          <div
            className="bg-white mt-2 round p-3"
            style={{ boxShadow: "0px 5px 8px -9px rgba(0, 0, 0, 0.75)" }}
          >
            <ProcessPayment />
          </div>
        </div>
        <div className="col-md-4 bg-white round mt-2">
          <div className="d-flex delivery_address">
            <div>
              <img
                className="rounded p-1"
                style={{
                  border: "1px solid grey",
                  width: "70px",
                  height: "70px",
                }}
                src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlrZSUyMHNob2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                alt="image"
              />
            </div>
            <div className="ml-2">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Product Catagory</p>
            </div>
          </div>
          <div>
            <div style={{ borderBottom: "1px solid rgb(221, 220, 220)" }}>
              <p style={{ fontWeight: "550" }}>Order Summary</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>Subtotal</p>
                <p style={{ fontWeight: "600", color: "black" }}>$25</p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>Shipping Fee</p>
                <p style={{ fontWeight: "600", color: "black" }}>$5</p>
              </div>
            </div>
            <div
              className="pt-2"
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid rgb(221, 220, 220)",
              }}
            >
              <p>Total</p>
              <p style={{ fontWeight: "600", color: "black" }}>$30</p>
            </div>
            <Button
              className="mb-4"
              fullWidth
              style={{
                backgroundColor: "#346ccd",
                textTransform: "capitalize",
                color: "white",
              }}
            >
              Confirm & Pay
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
