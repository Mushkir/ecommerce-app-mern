import express from "express";
import userAuth from "../middlewares/userAuth.middeware.js";
import {
  CreateProduct,
  modifyProduct,
  readProducts,
} from "../controllers/product.controller.js";

const productRouter = express.Router();

productRouter.post("/add-product", userAuth, CreateProduct);

productRouter.get("/get-all-products", readProducts);

productRouter.put("/edit-product/:id", modifyProduct);

export default productRouter;
