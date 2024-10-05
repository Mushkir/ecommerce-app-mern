import express from "express";
import {
  LoginController,
  SignUpController,
} from "../controllers/user.controller.js";
// import userAuth from "../middlewares/userAuth.middeware.js";

const router = express.Router();

router.post("/sign-up", SignUpController);

router.post("/login", LoginController);

export default router;
