import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cloudinary from "../utils/cloudinary.config.js";
// import createSecretToken from "../utils/tokenGeneration.js";

dotenv.config();

// POST Method
// User signup
export const SignUpController = async (req, res) => {
  // console.log(req.body);
  try {
    const { name, email, password, profileImg } = req.body;

    const hashedPassword = await bcrypt.hashSync(password, 8);

    if (profileImg) {
      const result = await cloudinary.uploader.upload(profileImg, {
        upload_preset: "ecommerce",
      });

      if (result) {
        const userDoc = new User({
          name,
          email,
          password: hashedPassword,
          profilePic: result,
        });

        await userDoc.save();
        res.status(201).json({ message: "User created successfully" });
      }
    }
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

// POST Method
// User login
export const LoginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const isUserExist = await User.findOne({ email });
    // console.log(isUserExist);
    if (
      !(
        isUserExist &&
        (await bcrypt.compareSync(password, isUserExist.password))
      )
    ) {
      return res
        .status(401)
        .json({ message: "Invalid credintials!", error: true });
    }

    // const token = createSecretToken(isUserExist._id);
    const jwtToken = jwt.sign(
      { id: isUserExist._id },
      process.env.JWT_TOKEN_KEY,
      {
        expiresIn: 60 * 60 * 8,
      }
    );

    res
      .cookie("token", jwtToken, {
        httpOnly: true,
        secure: true,
      })
      .json({
        message: "Login successful",
        token: jwtToken,
      });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// GET Method
// User detail
export const UserDetailController = async (req, res) => {
  // console.log(req.userId);
  const userId = req.userId;

  try {
    if (!userId) {
      return res.status(404).json({ message: "User not found!", error: false });
    }
  } catch (error) {
    res.status(500).json({ message: error.message, error: true });
  }
};
