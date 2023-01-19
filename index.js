import express from "express";
import db from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import { checkAuth } from "./middlewares/checkAuth.js";

const app = express();
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/comments", checkAuth, commentRoutes);

try {
  db.authenticate();
  db.sync();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
