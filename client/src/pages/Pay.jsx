import React, { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios'

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null);
   

    const onToken = (token) => {
        setStripeToken(token);
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post('http://localhost:4000/api/checkout/payment', {
                    tokenId: stripeToken?.id,
                    amount:'2000'
                })
                console.log(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        makeRequest();
    }, [stripeToken]);
  return (
    <StripeCheckout
      name="clothing Store"
      image="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
      token={onToken}
      shippingAddress
      billingAddress
      description="your total is $20"
      stripeKey={process.env.STRIPE_KEY}
      amount={2000}
    >
      <button
        style={{
          border: "none",
          backgroundColor: 'black',
          width: "120px",
          padding: "20px",
          color: "white",
          cursor: "pointer",
        }}
      >PAY</button>
    </StripeCheckout>
  );
};

export default Pay;
