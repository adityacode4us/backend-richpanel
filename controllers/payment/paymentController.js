import CustomErrorHandler from "../../services/CustomErrorHandler";

import { STRIPE_SECRET_KEY } from "../../config";
import Stripe from "stripe";

const stripe = new Stripe(STRIPE_SECRET_KEY);

const calculateOrderAmount = (items) => {
  return 1400;
};

const paymentController = {
  async payment(req, res) {
    try {
      console.log("for payment come");
      const { items } = req.body;

      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: "inr",
        automatic_payment_methods: {
          enabled: true,
        },
      });

      return res.send({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (error) {
      return res.status(400).send({
        error: {
          message: error.message,
        },
      });
    }
  },
};

export default paymentController;
