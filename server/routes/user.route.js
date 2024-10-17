import express from "express";
import {
  LoginController,
  SignUpController,
  UserDetailController,
  UserLogoutController,
} from "../controllers/user.controller.js";
import userAuth from "../middlewares/userAuth.middeware.js";

const router = express.Router();

router.post("/sign-up", SignUpController);

router.post("/login", LoginController);

router.get("/user-profile", userAuth, UserDetailController);

router.get("/logout", userAuth, UserLogoutController);

export default router;
