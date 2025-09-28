import express from "express";
const app = express();

app.get("/api/notes", (req, res) => {
  res.send("Hello, World!");
});

app.post("/api/notes", (req, res) => {
  res.status(201).json({ message: "Note created" });
});

app.put("/api/notes", (req, res) => {
  res.status(200).json({ message: "Note updated" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
