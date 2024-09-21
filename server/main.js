import express from "express";
import router from "./routes/index.route.js";
import connectDB from "./lib/db.js";

const app = express();
const PORT = 8080;

app.use(express.json());

app.use("/", router);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running in http://localhost:${PORT}`);
});
