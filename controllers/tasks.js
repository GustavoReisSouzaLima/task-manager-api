const listTasks = require("../public/tasks.json");

const getAllTasks = (req, res) => {
  const tasks = listTasks.tasks;
  res.status(200).json(tasks);
};

const getTaskById = (req, res) => {
  const { id } = req.params;
  const tasks = listTasks.tasks;

  const result = tasks.find((task) => task.id === Number(id));

  if (!result) {
    return res.status(404).json({ success: false, msg: "Not Found ID!" });
  }

  res.status(200).json(result);
};

const createTask = (req, res) => {
  const { title, description, completed } = req.body;
  const tasks = listTasks.tasks;
  const id = tasks.length + 1;

  if (title && description && completed) {
    const newTask = {
      id,
      title,
      description,
      completed,
    };

    tasks.push(newTask);

    return res.status(201).json(tasks);
  }
  res.status(400).json({ success: false, msg: "Does not have all properties" });
};

const updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  const tasks = listTasks.tasks;

  const result = tasks.find((task) => task.id === Number(id));

  console.log(req.body);

  if (!result) {
    return res.status(404).json({ success: false, msg: "Not Found ID!" });
  }

  if (result) {
    result.title = title || result.title;
    result.description = description || result.description;
    result.completed = completed || result.completed;
  }

  return res.status(200).json(tasks);
};

const deleteTask = (req, res) => {
  const { id } = req.params;

  const tasks = listTasks.tasks;

  const result = tasks.filter((task) => task.id !== Number(id));

  return res.status(200).json(result);
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
