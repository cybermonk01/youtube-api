import { Schema } from "mongoose";

const SubscriptionSchema = new Schema(
  {
    channel: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    subscriber: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timeStamps: true,
  }
);

export const Subscription = mongoose.model("Subscription", SubscriptionSchema);
