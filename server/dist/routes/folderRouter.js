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
const FolderRoute = (0, express_2.Router)();
const crudController = new CRUDController_1.CRUDController(FolderService_1.folderService);
const folderController = new FolderController_1.FolderController();
FolderRoute.use(express_1.default.json());
FolderRoute.patch("/folders/toChild", (req, res) => {
    folderController.createChildAssociation(req, res);
});
FolderRoute.get("/folders/goals", (req, res) => {
    folderController.getGoals(req, res);
});
FolderRoute.get("/folders/:id", (req, res) => {
    crudController.getByID(req, res);
});
FolderRoute.get("/folders", (req, res) => {
    crudController.getAll(req, res);
});
FolderRoute.post("/folders", (req, res) => {
    crudController.create(req, res);
});
FolderRoute.patch("/folders/:id", (req, res) => {
    crudController.update(req, res);
});
FolderRoute.delete("/folders", (req, res) => {
    crudController.delete(req, res);
});
exports.default = FolderRoute;
