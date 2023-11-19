"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const DailyTaskService_1 = require("../model/services/implementations/dailyTasksServices/DailyTaskService");
const CRUDController_1 = require("../controllers/CRUDController");
const DailytaskController_1 = require("../controllers/DailytaskController");
const UserCheck_1 = require("../middleware/UserCheck");
const FindUserByToken_1 = require("../middleware/FindUserByToken");
const DailyTaskRoute = (0, express_2.Router)();
const crudController = new CRUDController_1.CRUDController(DailyTaskService_1.dailyTaskService);
const dailytaskController = new DailytaskController_1.DailytaskController();
DailyTaskRoute.use(express_1.default.json());
DailyTaskRoute.get("/dailytasks/dailySubtasks", (req, res) => {
    dailytaskController.getDailysubtasks(req, res);
});
DailyTaskRoute.get("/dailytasks/:id", (req, res) => {
    crudController.getByID(req, res);
});
DailyTaskRoute.get("/dailytasks", (req, res) => {
    crudController.getAll(req, res);
});
DailyTaskRoute.post("/dailytasks", UserCheck_1.userCheck, FindUserByToken_1.findUserByToken, (req, res) => {
    crudController.create(req, res);
});
DailyTaskRoute.patch("/dailytasks/:id", (req, res) => {
    crudController.update(req, res);
});
DailyTaskRoute.delete("/dailytasks", (req, res) => {
    crudController.delete(req, res);
});
exports.default = DailyTaskRoute;
