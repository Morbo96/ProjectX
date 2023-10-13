"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const UserService_1 = require("../model/services/implementations/usersServices/UserService");
const CRUDController_1 = require("../controllers/CRUDController");
const UserController_1 = require("../controllers/UserController");
const UserCheck_1 = require("../middleware/UserCheck");
const UserRoute = (0, express_2.Router)();
const crudController = new CRUDController_1.CRUDController(UserService_1.userService);
const userController = new UserController_1.UserController();
UserRoute.use(express_1.default.json());
UserRoute.get("/users/folders", (req, res) => {
    userController.getFolders(req, res);
});
UserRoute.get("/users/usersPet", (req, res) => {
    userController.getUsersPet(req, res);
});
UserRoute.get("/users/signIn", (req, res) => {
    userController.signIn(req, res);
});
UserRoute.post("/users/signUp", (req, res) => {
    userController.signUp(req, res);
});
UserRoute.get("/users/:id", (req, res) => {
    crudController.getByID(req, res);
});
UserRoute.get("/users", UserCheck_1.userCheck, (req, res) => {
    crudController.getAll(req, res);
});
UserRoute.post("/users", (req, res) => {
    crudController.create(req, res);
});
UserRoute.patch("/users/:id", (req, res) => {
    crudController.update(req, res);
});
UserRoute.delete("/users", (req, res) => {
    crudController.delete(req, res);
});
UserRoute.get("/users/login/:login", (req, res) => {
    userController.getByLogin(req, res);
});
exports.default = UserRoute;
