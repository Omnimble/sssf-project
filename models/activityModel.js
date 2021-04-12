import mongoose from "mongoose";

const Schema = mongoose.Schema;

const activitySchema = new Schema({
  activityName: String,
  category: {
    type: mongoose.Types.ObjectId,
    ref: "Category",
  },
});

export default mongoose.model("Activity", activitySchema, "activityData");