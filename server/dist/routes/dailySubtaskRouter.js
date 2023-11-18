"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const CRUDController_1 = require("../controllers/CRUDController");
const DailySubtaskService_1 = require("../model/services/implementations/dailyTasksServices/DailySubtaskService");
const DailySubtaskController_1 = require("../controllers/DailySubtaskController");
const DailySubtaskRoute = (0, express_2.Router)();
const crudController = new CRUDController_1.CRUDController(DailySubtaskService_1.dailySubtaskService);
const dailySubtaskController = new DailySubtaskController_1.DailySubtaskController();
DailySubtaskRoute.use(express_1.default.json());
DailySubtaskRoute.get("/dailySubtasks/:id", (req, res) => {
    crudController.getByID(req, res);
});
DailySubtaskRoute.get("/dailySubtasks", (req, res) => {
    crudController.getAll(req, res);
});
DailySubtaskRoute.post("/dailySubtasks", (req, res) => {
    dailySubtaskController.createDailySubtask(req, res);
});
DailySubtaskRoute.patch("/dailySubtasks/:id", (req, res) => {
    crudController.update(req, res);
});
DailySubtaskRoute.delete("/dailySubtasks", (req, res) => {
    crudController.delete(req, res);
});
exports.default = DailySubtaskRoute;
