import mongoose from "mongoose";

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    itemName: String,
    obtained: Boolean,
    quantity: Number,
    activity: [mongoose.Types.ObjectId]
}, );

export default mongoose.model("Item", itemSchema, "itemData");