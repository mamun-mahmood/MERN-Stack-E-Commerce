import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const ELEMENTS_OPTIONS = {
    fonts: [
      {
        cssSrc: "https://fonts.googleapis.com/css?family=Roboto"
      }
    ]
  };
const stripePromise = loadStripe('pk_test_51IecYbGivzwJcUXjym5I6AOtTObrWlYNuEPdlOgxBGFXT1Pyrpx7cO8O7AmEC3om6K5nvlDZLOy1UnbQEsgGUSTM00AatCF8kt');
const ProcessPayment = (props) => {
    return (
        <div className="container  rounded mt-3 col-md-6 p-5">
            <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
                <CheckoutForm placeOrder={props.placeOrder}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default ProcessPayment;