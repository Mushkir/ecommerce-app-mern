import express from "express";
import cloudinary from "../utils/cloudinary.config.js";
import Product from "../models/Product.js";

const productRouter = express.Router();

productRouter.post("/add-product", async (req, res) => {
  const { name, brand, desc, price, image } = req.body;

  try {
    if (image) {
      const uploadRes = await cloudinary.uploader.upload(image, {
        upload_preset: "onlineShop",
      });

      if (uploadRes) {
        const product = new Product({
          name,
          brand,
          desc,
          price,
          image: uploadRes,
        });

        const savedProduct = await product.save();

        res.status(200).send(savedProduct);
      }
    }
  } catch (error) {
    // console.log(error);

    res.status(500).send(error);
  }
});

productRouter.get("/getProducts", async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).send(product);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

export default productRouter;
