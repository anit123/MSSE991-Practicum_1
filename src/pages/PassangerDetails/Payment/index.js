import React from "react";
import BookingFlightInfo from "../components/BookFlightInFo";
import { loadStripe } from "@stripe/stripe-js";
import { baseURl } from "../../../constants/apiContact";
import axios from "axios";
import { useRouteMatch } from "react-router-dom";
const stripePromise = loadStripe(
  "pk_test_51IOYXIKSR3bcjWceHMMtPDTSNRu1Jd6R10WobxIhWV8MrWvJS5iC1uQmIMPb1hsqv57j035xPsR9JRCOqVQ7yXGI00RlAhlglo"
);

const Payment = () => {
  let match = useRouteMatch("/bookingDetails/:bookingId/payment");
  const handlePayment = async () => {
    const session = await axios.get(
      `${baseURl}api/v1/booking/checkout-session/${match.params.bookingId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      }
    );
    console.log(await stripePromise);
    (await stripePromise).redirectToCheckout({
      sessionId: session.data.session.id,
    });
  };
  return (
    <>
      <BookingFlightInfo />
      <div className="container">
        <div className="mt-5">
          <h5>Confirm Payment with card.</h5>
          <button
            onClick={handlePayment}
            className="btn btn-primary mt-5 my-auto"
          >
            Make Payment
          </button>
        </div>
      </div>
    </>
  );
};

export default Payment;
