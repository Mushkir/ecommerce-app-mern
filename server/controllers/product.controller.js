import Product from "../models/Product.js";

export const CreateProduct = async (req, res) => {
  const {
    productName,
    brandName,
    category,
    price,
    sellingPrice,
    description,
    productImgs,
  } = req.body;

  try {
    const productDoc = new Product({
      productName,
      brandName,
      category,
      price,
      sellingPrice,
      description,
      productImgs,
    });

    await productDoc.save();
    res
      .status(201)
      .json({ message: "Product created successfully", error: false });
  } catch (error) {
    res.status(500).json({ message: error.message, error: true });
  }
};
