import express from "express";
import userAuth from "../middlewares/userAuth.middeware.js";
import { createCart } from "../controllers/cart.controller.js";

const cartRouter = express.Router();

// POST Method
// Add to cart
cartRouter.post("/add-to-cart", userAuth, createCart);

export default cartRouter;
