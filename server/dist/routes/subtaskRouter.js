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
const AccessTokenVerify_1 = require("../middleware/AccessTokenVerify");
const FindUserByToken_1 = require("../middleware/FindUserByToken");
const SubtaskCheck_1 = require("../middleware/SubtaskCheck");
const SubtaskRoute = (0, express_2.Router)();
const crudController = new CRUDController_1.CRUDController(SubtaskService_1.subtaskService);
const subtaskController = new SubtaskController_1.SubtaskController();
SubtaskRoute.use(express_1.default.json());
SubtaskRoute.get("/subtasks/:id", AccessTokenVerify_1.accessTokenVerify, FindUserByToken_1.findUserByToken, SubtaskCheck_1.subtaskCheck, (req, res, next) => {
    subtaskController.getById(req, res, next);
});
SubtaskRoute.get("/subtasks", (req, res, next) => {
    crudController.getAll(req, res, next);
});
SubtaskRoute.patch("/subtasks/:id", AccessTokenVerify_1.accessTokenVerify, FindUserByToken_1.findUserByToken, SubtaskCheck_1.subtaskCheck, (req, res, next) => {
    subtaskController.update(req, res, next);
});
SubtaskRoute.delete("/subtasks/:id", AccessTokenVerify_1.accessTokenVerify, FindUserByToken_1.findUserByToken, SubtaskCheck_1.subtaskCheck, (req, res, next) => {
    crudController.delete(req, res, next);
});
exports.default = SubtaskRoute;
