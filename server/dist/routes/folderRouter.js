"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const CRUDController_1 = require("../controllers/CRUDController");
const FolderService_1 = require("../model/services/implementations/tasksServices/FolderService");
const FolderController_1 = require("../controllers/FolderController");
const AccessTokenVerify_1 = require("../middleware/AccessTokenVerify");
const FindUserByToken_1 = require("../middleware/FindUserByToken");
const FolderCheck_1 = require("../middleware/FolderCheck");
const FolderRoute = (0, express_2.Router)();
const crudController = new CRUDController_1.CRUDController(FolderService_1.folderService);
const folderController = new FolderController_1.FolderController();
FolderRoute.use(express_1.default.json());
FolderRoute.get("/folders/:id/goals", AccessTokenVerify_1.accessTokenVerify, FindUserByToken_1.findUserByToken, FolderCheck_1.folderCheck, (req, res, next) => {
    folderController.getGoals(req, res, next);
});
FolderRoute.post("/folders/:id/goals", AccessTokenVerify_1.accessTokenVerify, FindUserByToken_1.findUserByToken, FolderCheck_1.folderCheck, (req, res, next) => {
    folderController.createGoal(req, res, next);
});
FolderRoute.get("/folders/:id", AccessTokenVerify_1.accessTokenVerify, FindUserByToken_1.findUserByToken, FolderCheck_1.folderCheck, (req, res, next) => {
    crudController.getByID(req, res, next);
});
FolderRoute.get("/folders", (req, res, next) => {
    crudController.getAll(req, res, next);
});
FolderRoute.post("/folders", AccessTokenVerify_1.accessTokenVerify, FindUserByToken_1.findUserByToken, (req, res, next) => {
    crudController.create(req, res, next);
});
FolderRoute.patch("/folders/:id", AccessTokenVerify_1.accessTokenVerify, FindUserByToken_1.findUserByToken, FolderCheck_1.folderCheck, (req, res, next) => {
    crudController.update(req, res, next);
});
FolderRoute.delete("/folders/:id", AccessTokenVerify_1.accessTokenVerify, FindUserByToken_1.findUserByToken, FolderCheck_1.folderCheck, (req, res, next) => {
    crudController.delete(req, res, next);
});
exports.default = FolderRoute;
