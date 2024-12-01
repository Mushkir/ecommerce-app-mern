import express from "express";
import userAuth from "../middlewares/userAuth.middeware.js";
import {
  CreateProduct,
  filterProductByCategory,
  getAllProductCategory,
  getCategoryWiseProducts,
  getProductById,
  modifyProduct,
  readProducts,
  searchProduct,
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
productRouter.post("/get-product-detail", getProductById);

productRouter.get("/search-product", searchProduct);

productRouter.post("/filter-by-category", filterProductByCategory);

export default productRouter;
