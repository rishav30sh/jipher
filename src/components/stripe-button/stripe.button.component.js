import React from "react";
import StripeCheckOut from "react-stripe-checkout";

const StripeCheckOutButton = ({ total }) => {
  const priceForStripe = total * 100;
  const publishableKey = "pk_test_0m2bD0WNzEmroe0sV2djbCMu005V8Wp91X";

  const onToken = token => {
    console.log(token);
    alert("payment successful");
  };
  return (
    <StripeCheckOut
      label="Pay Now"
      name="jipher"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${total}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckOutButton;
