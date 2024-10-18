import express from "express";
import {
  ChangeUserRoleAsAdmin,
  GetAllUsersData,
  LoginController,
  SignUpController,
  UpdateUserData,
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

router.put("/update-user-role/:id", ChangeUserRoleAsAdmin);

router.put("/update-user/:id", userAuth, UpdateUserData);

export default router;
