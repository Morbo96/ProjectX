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
const AccessTokenVerify_1 = require("../middleware/AccessTokenVerify");
const FindUserByToken_1 = require("../middleware/FindUserByToken");
const TaskCheck_1 = require("../middleware/TaskCheck");
const crudController = new CRUDController_1.CRUDController(TaskService_1.taskService);
const taskController = new TaskController_1.TaskController();
const TaskRoute = (0, express_2.Router)();
TaskRoute.use(express_1.default.json());
TaskRoute.get("/tasks/:id/subtasks", AccessTokenVerify_1.accessTokenVerify, FindUserByToken_1.findUserByToken, TaskCheck_1.taskCheck, (req, res, next) => {
    taskController.getSubtasks(req, res, next);
});
TaskRoute.post("/tasks/:id/subtasks", AccessTokenVerify_1.accessTokenVerify, FindUserByToken_1.findUserByToken, TaskCheck_1.taskCheck, (req, res, next) => {
    taskController.createSubtask(req, res, next);
});
TaskRoute.get("/tasks/:id", AccessTokenVerify_1.accessTokenVerify, FindUserByToken_1.findUserByToken, TaskCheck_1.taskCheck, (req, res, next) => {
    crudController.getByID(req, res, next);
});
TaskRoute.get("/tasks", AccessTokenVerify_1.accessTokenVerify, FindUserByToken_1.findUserByToken, (req, res, next) => {
    taskController.getUsersTasks(req, res, next);
});
TaskRoute.patch("/tasks/:id", AccessTokenVerify_1.accessTokenVerify, FindUserByToken_1.findUserByToken, TaskCheck_1.taskCheck, (req, res, next) => {
    crudController.update(req, res, next);
});
TaskRoute.delete("/tasks/:id", AccessTokenVerify_1.accessTokenVerify, FindUserByToken_1.findUserByToken, TaskCheck_1.taskCheck, (req, res, next) => {
    crudController.delete(req, res, next);
});
exports.default = TaskRoute;
