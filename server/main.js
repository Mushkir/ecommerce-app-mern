import express from "express";
import cors from "cors";
import router from "./routes/user.route.js";
import connectDB from "./lib/db.js";
import productRouter from "./routes/product.route.js";

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json({ limit: "50mb" })); // Increase the limit to handle large image files
app.use(express.urlencoded({ limit: "50mb", extended: true })); // Set limit for URL-encoded form data

app.use("/public", express.static("public"));

app.use("/", router);
app.use("/", productRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running in http://localhost:${PORT}`);
});
