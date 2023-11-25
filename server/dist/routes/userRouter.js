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
const AccessTokenVerify_1 = require("../middleware/AccessTokenVerify");
const FindUserByToken_1 = require("../middleware/FindUserByToken");
const UserCheck_1 = require("../middleware/UserCheck");
const UserRoute = (0, express_2.Router)();
const crudController = new CRUDController_1.CRUDController(UserService_1.userService);
const userController = new UserController_1.UserController();
UserRoute.use(express_1.default.json());
UserRoute.get("/users/dailyTasks", AccessTokenVerify_1.accessTokenVerify, FindUserByToken_1.findUserByToken, (req, res) => {
    userController.getDailyTasks(req, res);
});
UserRoute.get("/users/folders", AccessTokenVerify_1.accessTokenVerify, FindUserByToken_1.findUserByToken, (req, res) => {
    userController.getFolders(req, res);
});
UserRoute.get("/users/usersPet", AccessTokenVerify_1.accessTokenVerify, FindUserByToken_1.findUserByToken, (req, res) => {
    userController.getUsersPet(req, res);
});
UserRoute.get("/users/:id", AccessTokenVerify_1.accessTokenVerify, FindUserByToken_1.findUserByToken, UserCheck_1.userCheck, (req, res) => {
    crudController.getByID(req, res);
});
UserRoute.get("/users", (req, res) => {
    crudController.getAll(req, res);
});
UserRoute.patch("/users/:id", AccessTokenVerify_1.accessTokenVerify, FindUserByToken_1.findUserByToken, UserCheck_1.userCheck, (req, res) => {
    crudController.update(req, res);
});
UserRoute.delete("/users/:id", AccessTokenVerify_1.accessTokenVerify, FindUserByToken_1.findUserByToken, UserCheck_1.userCheck, (req, res) => {
    crudController.delete(req, res);
});
exports.default = UserRoute;
