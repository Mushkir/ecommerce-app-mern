import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cloudinary from "../utils/cloudinary.config.js";

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

    if (
      !(
        (isUserExist && bcrypt.compareSync(password, isUserExist.password)) // No need for `await` as `compareSync` is synchronous
      )
    ) {
      return res
        .status(401)
        .json({ message: "Invalid credentials!", error: true });
    }

    // Getting user data without password
    const { password: userPassword, ...userDataWithoutPassword } =
      isUserExist.toObject();

    // Generate JWT token
    const jwtToken = jwt.sign(
      { id: isUserExist._id },
      process.env.JWT_TOKEN_KEY,
      {
        expiresIn: 60 * 60 * 8, // 8 hours
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
        resp: userDataWithoutPassword,
      });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// GET Method
// User detail
export const UserDetailController = async (req, res) => {
  // console.log(req.userId);
  const userId = req?.userId;

  try {
    if (!userId) {
      return res.status(404).json({ message: "User not found!", error: true });
    }
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found!", error: true });
    }
    const { password: userPassword, ...userDataWithoutPassword } =
      user.toObject();
    res.json({ message: "User details", resp: userDataWithoutPassword });
  } catch (error) {
    res.status(500).json({ message: error.message, error: true });
  }
};

// GET Method
// User Logout
export const UserLogoutController = async (req, res) => {
  try {
    res.status(202).clearCookie("token").json({
      message: "user logged-out successfully",
      error: false,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, error: true });
  }
};

// GET Method
// Get all users data
export const GetAllUsersData = async (req, res) => {
  try {
    const allUsers = await User.find().sort({ name: "asc" });
    res.status(200).json({ error: false, totalUsers: allUsers });
  } catch (error) {
    res.status(500).json({ message: error.message, error: true });
  }
};

// PUT Method
// Change user role as Admin
export const ChangeUserRoleAsAdmin = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById({ _id: userId });

    if (user?.role === "admin") {
      const filter = { _id: userId };
      const update = { role: "general" };

      await User.findOneAndUpdate(filter, update);
      res.status(200).json({
        message: "User role updated as General",
        error: false,
      });
    } else {
      const filter = { _id: userId };
      const update = { role: "admin" };

      await User.findOneAndUpdate(filter, update);
      res.status(200).json({
        message: "User role updated as Admin",
        error: false,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message, error: true });
  }
};

// PUT Method
// Update user data
export const UpdateUserData = async (req, res) => {
  const userId = req.params.id;
  const { name, email } = req.body;

  try {
    const filter = { _id: userId };
    const update = { name, email };

    await User.findOneAndUpdate(filter, update);
    res.status(200).json({ message: "User data updated", error: false });
  } catch (error) {
    res.status(500).json({ message: error.message, error: true });
  }
};
