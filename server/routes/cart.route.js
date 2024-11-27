import express from "express";
import userAuth from "../middlewares/userAuth.middeware.js";
import { countCart, createCart } from "../controllers/cart.controller.js";

const cartRouter = express.Router();

cartRouter.post("/add-to-cart", userAuth, createCart);

cartRouter.get("/count-cart", userAuth, countCart);

export default cartRouter;
