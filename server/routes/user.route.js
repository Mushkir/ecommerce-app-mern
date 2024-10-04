import express from "express";
import { SignUpController } from "../controllers/user.controller.js";
import cloudinary from "../utils/cloudinary.config.js";
// import multer from "multer";
// import path from "path";

const router = express.Router();

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, path.join(__dirname, "../public/img"));
//   },

//   filename: (req, file, cb) => {
//     cb(
//       null,
//       file.filename + "_" + Date.now() + path.extname(file.originalname)
//     );
//   },
// });

// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// const maximumFileSize = 1024 * 1024 * 10;

// const upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: maximumFileSize,
//   },
//   fileFilter: fileFilter,
// });

router.post("/sign-up", SignUpController);

export default router;
