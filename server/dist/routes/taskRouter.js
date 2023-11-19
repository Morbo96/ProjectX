"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const CRUDController_1 = require("../controllers/CRUDController");
const TaskService_1 = require("../model/services/implementations/tasksServices/TaskService");
const TaskController_1 = require("../controllers/TaskController");
const TaskRoute = (0, express_2.Router)();
const crudController = new CRUDController_1.CRUDController(TaskService_1.taskService);
const taskController = new TaskController_1.TaskController();
TaskRoute.use(express_1.default.json());
TaskRoute.get("/tasks/:id/subtasks", (req, res) => {
    taskController.getSubtasks(req, res);
});
TaskRoute.get("/tasks/:id", (req, res) => {
    crudController.getByID(req, res);
});
TaskRoute.get("/tasks", (req, res) => {
    crudController.getAll(req, res);
});
TaskRoute.post("/tasks", (req, res) => {
    crudController.create(req, res);
});
TaskRoute.patch("/tasks/:id", (req, res) => {
    crudController.update(req, res);
});
TaskRoute.delete("/tasks", (req, res) => {
    crudController.delete(req, res);
});
exports.default = TaskRoute;
