import Subscriptions from "../../models/subscription";
import Joi from "joi";
const cancelSubscriptions = {
  async cancelSubscription(req, res, next) {
    //validation

    try {
      const document = await Subscriptions.findOneAndUpdate(
        { user: req.user._id },
        {
          isSubscribed: false,
          activeTab: "",
          activePlan: -1,
        }
      );
      return res.json("Subscription cancelled Successfully");
    } catch (err) {
      return next(err);
    }
  },
};

export default cancelSubscriptions;
