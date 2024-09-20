import express from "express";
import { HomePage } from "../controllers/index.controller.js";

const router = express.Router();

router.get("/", HomePage);

export default router;
