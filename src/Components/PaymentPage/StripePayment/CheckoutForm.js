import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from "react";
const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentErr] = useState(null)
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentErr(error.message)
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setPaymentErr('Payment successful!')
      props.placeOrder()
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement className="form-control" />
        {/* <Button type="submit" style={{ marginTop: '10px' }} disabled={!stripe}>
          Pay
        </Button> */}
      </form>
      {
        paymentError && <p>{paymentError}</p>
      }
    </>
  );
};
export default CheckoutForm;
