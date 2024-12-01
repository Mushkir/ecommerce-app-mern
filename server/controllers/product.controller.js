import Product from "../models/Product.js";

// POST Method
// Add new product by admin
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

// GET Method
// Get all products
export const readProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.status(200).json({ allProducts: allProducts, error: false });
  } catch (error) {
    res.status(500).json({ message: error.message, error: true });
  }
};

// GET Method
// Get product by id
export const modifyProduct = async (req, res) => {
  // console.log(req.params);
  const productId = req.params.id;
  // console.log(req.body);
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
    const filter = { _id: productId };
    const update = {
      productName,
      brandName,
      category,
      price,
      sellingPrice,
      description,
      productImgs,
    };

    await Product.findOneAndUpdate(filter, update);
    res
      .status(200)
      .json({ message: "Product has been updated successfully", error: false });
  } catch (error) {
    res.status(500).json({ message: error.message, error: true });
  }
};

// GET Method
// Get total product categories
export const getAllProductCategory = async (req, res) => {
  try {
    const fieldName = "category";
    const productCategoryData = await Product.distinct(fieldName);

    const productCategoryInfo = [];

    for (const category of productCategoryData) {
      const categoryData = await Product.findOne({ category });
      productCategoryInfo.push(categoryData);
    }

    res.status(200).json({ data: productCategoryInfo, error: false });
  } catch (error) {
    res.status(500).json({ message: error.message, error: true });
  }
};

export const getCategoryWiseProducts = async (req, res) => {
  const { category } = req.params;
  try {
    const products = await Product.find({ category });
    res.status(200).json({ data: products, error: false });
  } catch (error) {
    res.status(500).json({ message: error.message, error: true });
  }
};

// GET Method
// Get product by id
export const getProductById = async (req, res) => {
  const { id } = req?.body;
  try {
    const productDetail = await Product.find({ _id: id });
    res.status(200).json({ data: productDetail, error: false });
  } catch (error) {
    res.status(500).json({ message: error.message, error: true });
  }
};

// GET Method
// Search product
export const searchProduct = async (req, res) => {
  try {
    const { product } = req.query;

    const productWithoutCaseSensitive = new RegExp(product, "i", "g");

    const searchResults = await Product.find({
      $or: [
        {
          category: productWithoutCaseSensitive,
        },
        {
          productName: productWithoutCaseSensitive,
        },
      ],
    });
    res.status(200).json({ data: searchResults, error: false });
  } catch (error) {
    res.status(500).json({ message: error.message, error: true });
  }
};

// GET Method
// Filter by category
export const filterProductByCategory = async (req, res) => {
  try {
    const { data } = req?.body;

    const filteredResults = await Product.find({
      $and: [{ category: data }],
    });

    res.status(200).json({ data: filteredResults, error: false });
  } catch (error) {
    res.status(500).json({ message: error.message, error: true });
  }
};
