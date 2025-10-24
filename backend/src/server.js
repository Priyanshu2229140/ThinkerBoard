import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import ratelimiter from "./middleware/rateLimitter.js";
import { connectDB } from "./config/db.js";
import notesRoutes from "./routes/notesRoutes.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(ratelimiter);
app.use(cors({ origin: "http://localhost:5173" }));
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
  });
});
