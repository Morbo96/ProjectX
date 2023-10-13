"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const GoalService_1 = require("../model/services/implementations/tasksServices/GoalService");
const CRUDController_1 = require("../controllers/CRUDController");
const GoalController_1 = require("../controllers/GoalController");
const GoalRoute = (0, express_2.Router)();
const crudController = new CRUDController_1.CRUDController(GoalService_1.goalService);
const goalController = new GoalController_1.GoalController();
GoalRoute.use(express_1.default.json());
GoalRoute.get("/goals/tasks", (req, res) => {
    goalController.getTasks(req, res);
});
GoalRoute.get("/goals/:id", (req, res) => {
    crudController.getByID(req, res);
});
GoalRoute.get("/goals", (req, res) => {
    crudController.getAll(req, res);
});
GoalRoute.post("/goals", (req, res) => {
    crudController.create(req, res);
});
GoalRoute.patch("/goals/:id", (req, res) => {
    crudController.update(req, res);
});
GoalRoute.delete("/goals", (req, res) => {
    crudController.delete(req, res);
});
exports.default = GoalRoute;
