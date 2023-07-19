const getAllTasks = (req, res) => {
  res.send("getAllTasks");
};
const getTaskById = (req, res) => {
  res.send("getTaskById");
};
const createTask = (req, res) => {
  res.send("createTask");
};
const updateTask = (req, res) => {
  res.send("updateTask");
};
const deleteTask = (req, res) => {
  res.send("deleteTask");
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
