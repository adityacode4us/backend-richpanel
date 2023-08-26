import CustomErrorHandler from "../../services/CustomErrorHandler";

import { STRIPE_PUBLISHABLE_KEY } from "../../config";
import Stripe from "stripe";

const getPublishKey = {
  async publishKey(req, res) {
    try {
      return res.json({
        publishableKey: STRIPE_PUBLISHABLE_KEY,
      });
    } catch (error) {
      return res.json({
        error: {
          message: error.message,
        },
      });
    }
  },
};

export default getPublishKey;
