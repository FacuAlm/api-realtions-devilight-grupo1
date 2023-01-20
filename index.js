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
  console.log("La conexión a la base de datos se ha realizado con éxito.");
} catch (error) {
  console.error("No se ha podido conectar a la base de datos:", error);
}

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
