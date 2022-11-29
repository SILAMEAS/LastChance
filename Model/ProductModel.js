import mongoose from "mongoose";
const ProductSchema = mongoose.Schema({
  pro_name: {
    type: String,
    required: true,
  },
  pro_img: {
    type: String,
    required: true,
  },
  pro_price: {
    type: Number,
    required: true,
    min: 1,
  },
  pro_income: {
    type: Date,
    default: Date.now(),
  },
});
export default mongoose.model("products", ProductSchema);
