import Subscriptions from "../../models/subscription";
const isUserSubscribed = {
  async isUserSubscribe(req, res, next) {
    //validation

    try {
      const user_id = req.user._id;
      const result = await Subscriptions.findOne({ user: user_id });
      if (result === null) {
        return res.json({ subscribed: false, activePlan: -1, activeTab: "" });
      }
      let subscribed = false;
      if (result.isSubscribed) {
        subscribed = true;
      }

      return res.json({
        subscribed,
        activeTab: result.activeTab,
        activePlan: result.activePlan,
      });
    } catch (err) {
      return next(err);
    }
  },
};

export default isUserSubscribed;
