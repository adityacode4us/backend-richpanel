import Subscriptions from "../../models/subscription";
import Joi from "joi";
const addSubscriptions = {
  async addSubscription(req, res, next) {
    //validation
    const addSchema = Joi.object({
      activeTab: Joi.string().required(),
      activePlan: Joi.number().required(),
    });
    // console.log(req.body)
    const { error } = addSchema.validate(req.body);
    if (error) {
      return next(error);
    }

    try {
      const { activePlan, activeTab } = req.body;
      const exist = await Subscriptions.exists({ user: req.user._id });
      if (exist) {
        const document = await Subscriptions.findOneAndUpdate(
          { user: req.user._id },
          {
            isSubscribed: true,
            activeTab,
            activePlan,
          }
        );
        return res.json(document);
      } else {
        const subscription = new Subscriptions({
          activeTab,
          activePlan,
          user: req.user._id,
          isSubscribed: true,
        });
        const result = await subscription.save();
        return res.json(result);
      }
    } catch (err) {
      return next(err);
    }
  },
};

export default addSubscriptions;
