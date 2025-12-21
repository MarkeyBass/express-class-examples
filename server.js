import express from "express";
import fs from "fs/promises";

const app = express();
const PORT = process.env.PORT || 8000;
const TODOS_PATH = process.env.TODOS_PATH || "./data/todos.json";

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get("/", async (req, res) => {
  res.json({
    message: "Welcome to Todo List API",
    version: "1.0.0",
  });
});

app.get("/todos", async (req, res) => {
  try {
    const todos = await fs.readFile(TODOS_PATH, "utf8");
    const todosObj = JSON.parse(todos);
    res.status(200).json({ msg: "success", data: todosObj });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "error" + err.message, data: null });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
