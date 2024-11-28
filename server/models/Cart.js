import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema(
  {
    productId: {
      type: String,
      ref: "Product",
    },
    qty: {
      type: Number,
      default: 1,
    },
    userId: String,
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
