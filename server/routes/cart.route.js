import express from "express";
import userAuth from "../middlewares/userAuth.middeware.js";
import {
  countCart,
  createCart,
  deleteCartItem,
  getCartItemsByUser,
  updateCartQty,
} from "../controllers/cart.controller.js";

const cartRouter = express.Router();

cartRouter.post("/add-to-cart", userAuth, createCart);

cartRouter.get("/count-cart", userAuth, countCart);

cartRouter.get("/get-user-cart-items", userAuth, getCartItemsByUser);

cartRouter.post("/update-cart-quantity", userAuth, updateCartQty);

cartRouter.delete("/delete-cart-item/:id", userAuth, deleteCartItem);

export default cartRouter;
