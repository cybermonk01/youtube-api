import { Schema } from "mongoose";

const videoSchema = new Schema(
  {
    id: String,
    videoFile: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: Number,
    views: Number,
    isPublished: Boolean,
  },
  { timestamps: true }
);

export const Video = mongoose.model("Video", videoSchema);
