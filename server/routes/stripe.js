const router = require("express").Router();
const stripe = require("stripe")("sk_test_51NICeVB2COcHibL7Lw1sl0h6iVDHEQGEYnMM2BiOmbb5XYfC1qtk59xZlWW7SBTuq2taoEnUZaqa1WQgFJcV6o6i009bzHW583");

router.post("/payment", async (req, res) => {
        stripe.charges.create(
          {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "usd",
          },
          (stripeErr, stripeRes) => {
            console.log(stripeErr)
            if (stripeErr) {
              res.status(500).json(stripeErr);
            } else {
              res.status(200).json(stripeRes);
            }
          }
        );
      });

module.exports = router;
