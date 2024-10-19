import express from "express";
import userAuth from "../middlewares/userAuth.middeware.js";
import { CreateProduct } from "../controllers/product.controller.js";

const productRouter = express.Router();

productRouter.post("/add-product", userAuth, CreateProduct);

export default productRouter;
