import Cart from "../models/Cart.js";

// POST Method
// Add to cart
export const createCart = async (req, res) => {
  try {
    const userId = req?.userId;
    const { productId } = req?.body;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const isProductExist = await Cart.findOne({
      productId: productId,
      userId: userId,
    });

    if (isProductExist) {
      return res.status(400).json({ message: "Product already exist in cart" });
    }

    const cart = new Cart({ productId, userId });
    await cart.save();
    return res
      .status(201)
      .json({ message: "Product added to cart successfully" });

    // console.log(productId);
  } catch (error) {
    res.status(500).json({ message: error.message, error: true });
  }
};

// GET Method
// Count cart items
export const countCart = async (req, res) => {
  try {
    const userId = req?.userId;

    const query = { userId };
    const countCart = await Cart.countDocuments(query);
    return res.status(200).json({ data: countCart, error: false });
  } catch (error) {
    res.status(500).json({ message: error.message, error: true });
  }
};