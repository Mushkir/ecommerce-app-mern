import express from "express";
import router from "./routes/index.route.js";

const app = express();
const PORT = 8080;

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
