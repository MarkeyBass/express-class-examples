import express from "express";
import { getTodo, getTodos, updateTodo } from "../controllers/todos.js";

const router = express.Router();

router.route("/").get(getTodos);
router.route("/:id")
  .get(getTodo)
  .put(updateTodo);

export default router;
