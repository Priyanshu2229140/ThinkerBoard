import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import ratelimiter from "./middleware/rateLimitter.js";
import { connectDB } from "./config/db.js";
import notesRoutes from "./routes/notesRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );
}

app.use(express.json());
app.use(ratelimiter);

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/notes", notesRoutes);

// ✅ Corrected static file serving
app.use(express.static(path.join(__dirname, "../frontend/dist")));

if (process.env.NODE_ENV === "production") {
  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
  });
});
