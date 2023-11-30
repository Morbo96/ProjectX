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
const AccessTokenVerify_1 = require("../middleware/AccessTokenVerify");
const FindUserByToken_1 = require("../middleware/FindUserByToken");
const GoalCheck_1 = require("../middleware/GoalCheck");
const GoalRoute = (0, express_2.Router)();
const crudController = new CRUDController_1.CRUDController(GoalService_1.goalService);
const goalController = new GoalController_1.GoalController();
GoalRoute.use(express_1.default.json());
GoalRoute.get("/goals/:id/tasks", AccessTokenVerify_1.accessTokenVerify, FindUserByToken_1.findUserByToken, GoalCheck_1.goalCheck, (req, res, next) => {
    goalController.getTasks(req, res, next);
});
GoalRoute.post("/goals/:id/tasks", AccessTokenVerify_1.accessTokenVerify, FindUserByToken_1.findUserByToken, GoalCheck_1.goalCheck, (req, res, next) => {
    goalController.createTask(req, res, next);
});
GoalRoute.get("/goals/:id", AccessTokenVerify_1.accessTokenVerify, FindUserByToken_1.findUserByToken, GoalCheck_1.goalCheck, (req, res, next) => {
    crudController.getByID(req, res, next);
});
GoalRoute.get("/goals", (req, res, next) => {
    crudController.getAll(req, res, next);
});
GoalRoute.patch("/goals/:id", AccessTokenVerify_1.accessTokenVerify, FindUserByToken_1.findUserByToken, GoalCheck_1.goalCheck, (req, res, next) => {
    crudController.update(req, res, next);
});
GoalRoute.delete("/goals/:id", AccessTokenVerify_1.accessTokenVerify, FindUserByToken_1.findUserByToken, GoalCheck_1.goalCheck, (req, res, next) => {
    crudController.delete(req, res, next);
});
exports.default = GoalRoute;
