import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import ratelimiter from "./middleware/rateLimitter.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
connectDB();

app.use(express.json());
app.use(ratelimiter)
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
