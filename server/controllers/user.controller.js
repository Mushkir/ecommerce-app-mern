import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const SignUpController = async (req, res) => {
  // console.log(req.body);
  try {
    const { name, email, password, profileImg } = req.body;

    const hashedPassword = await bcrypt.hashSync(password, 8);

    const userDoc = new User({
      name,
      email,
      password: hashedPassword,
      profilePic: profileImg,
    });

    await userDoc.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};
