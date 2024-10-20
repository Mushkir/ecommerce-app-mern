import express from "express";
import userAuth from "../middlewares/userAuth.middeware.js";
import {
  CreateProduct,
  readProducts,
} from "../controllers/product.controller.js";

const productRouter = express.Router();

productRouter.post("/add-product", userAuth, CreateProduct);

productRouter.get("/get-all-products", readProducts);

export default productRouter;
