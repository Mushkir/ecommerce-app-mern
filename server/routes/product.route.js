import express from "express";
import userAuth from "../middlewares/userAuth.middeware.js";
import {
  CreateProduct,
  getAllProductCategory,
  getCategoryWiseProducts,
  getProductById,
  modifyProduct,
  readProducts,
} from "../controllers/product.controller.js";

const productRouter = express.Router();

productRouter.post("/add-product", userAuth, CreateProduct);

productRouter.get("/get-all-products", readProducts);

productRouter.put("/edit-product/:id", modifyProduct);

productRouter.get("/categories", getAllProductCategory);

productRouter.get(
  "/get-category-wise-product/:category",
  getCategoryWiseProducts
);

// Get product detail by id
productRouter.get("/get-product-detail/:id", getProductById);

export default productRouter;
