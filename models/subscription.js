import mongoose from "mongoose";
const { Schema } = mongoose;

const SubscriptionSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  activeTab: {
    type: String,
    required: true,
  },
  activePlan: {
    type: Number,
    required: true,
  },
  isSubscribed: {
    type: Boolean,
    default: false,
    required: true,
  },

  Date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model(
  "Subscriptions",
  SubscriptionSchema,
  "subscriptions"
);
