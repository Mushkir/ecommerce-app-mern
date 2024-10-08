import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const userAuth = (req, res, next) => {
  try {
    const token = req.cookies?.token;
    // console.log(token);

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decodedFile = jwt.verify(token, process.env.JWT_TOKEN_KEY);
    req.userId = decodedFile.id;
    // console.log(req.userId);

    next();
  } catch (error) {
    res.status(400).json({
      message: error.message,
      error: true,
      success: false,
    });
  }
};

export default userAuth;
