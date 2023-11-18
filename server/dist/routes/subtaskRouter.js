"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const CRUDController_1 = require("../controllers/CRUDController");
const SubtaskService_1 = require("../model/services/implementations/tasksServices/SubtaskService");
const SubtaskController_1 = require("../controllers/SubtaskController");
const SubtaskInfoService_1 = require("../model/services/implementations/tasksServices/SubtaskInfoService");
const SubtaskRoute = (0, express_2.Router)();
const crudController = new CRUDController_1.CRUDController(SubtaskService_1.subtaskService);
const crudInfoController = new CRUDController_1.CRUDController(SubtaskInfoService_1.subtaskInfoService);
const subtaskController = new SubtaskController_1.SubtaskController();
SubtaskRoute.use(express_1.default.json());
SubtaskRoute.get("/subtasks/subtasks", (req, res) => {
    crudInfoController.getAll(req, res);
});
SubtaskRoute.get("/subtasks/:id", (req, res) => {
    crudController.getByID(req, res);
});
SubtaskRoute.get("/subtasks", (req, res) => {
    crudController.getAll(req, res);
});
SubtaskRoute.post("/subtasks", (req, res) => {
    subtaskController.createSubtask(req, res);
});
SubtaskRoute.patch("/subtasks/:id", (req, res) => {
    crudController.update(req, res);
});
SubtaskRoute.delete("/subtasks", (req, res) => {
    crudController.delete(req, res);
});
exports.default = SubtaskRoute;
