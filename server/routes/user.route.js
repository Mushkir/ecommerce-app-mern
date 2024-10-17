import express from "express";
import {
  GetAllUsersData,
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

router.get("/get-all-users", userAuth, GetAllUsersData);

export default router;
