"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const DailyTaskService_1 = require("../model/services/implementations/DailyTaskService");
const CRUDController_1 = require("../controllers/CRUDController");
const DailyTaskRoute = (0, express_2.Router)();
const dailyTaskController = new CRUDController_1.CRUDController(DailyTaskService_1.dailyTaskService);
DailyTaskRoute.use(express_1.default.json());
DailyTaskRoute.get("/dailytasks/id", getDailyTaskById);
DailyTaskRoute.get("/dailytasks", getAllDailyTasks);
DailyTaskRoute.post("/dailytasks", createDailyTask);
DailyTaskRoute.patch("/dailytasks", updateDailyTask);
DailyTaskRoute.delete("/dailytasks", deleteDailyTask);
exports.default = DailyTaskRoute;
function getAllDailyTasks(req, res) {
    dailyTaskController.getAll(req, res);
}
function createDailyTask(req, res) {
    dailyTaskController.create(req, res);
}
function getDailyTaskById(req, res) {
    dailyTaskController.getByID(req, res);
}
function deleteDailyTask(req, res) {
    dailyTaskController.delete(req, res);
}
function updateDailyTask(req, res) {
    dailyTaskController.update(req, res);
}
