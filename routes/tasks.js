const express = require("express");
const Router = express.Router();
const {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

Router.get("/", getAllTasks); // Get all tasks
Router.get("/:id", getTaskById); // Get single task

Router.post("/", createTask); // Create a new task

Router.patch("/:id", updateTask); // Update task

Router.delete("/:id", deleteTask); // Delete task

module.exports = Router;
