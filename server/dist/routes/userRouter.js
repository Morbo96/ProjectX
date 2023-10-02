"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const UserService_1 = require("../model/services/implementations/UserService");
const CRUDController_1 = require("../controllers/CRUDController");
const UserController_1 = require("../controllers/UserController");
const UserRoute = (0, express_2.Router)();
const crudController = new CRUDController_1.CRUDController(UserService_1.userService); // переписать в стрелочные функции
const userController = new UserController_1.UserController;
UserRoute.use(express_1.default.json());
UserRoute.get("/users/:id", getUserById);
UserRoute.get("/users", (req, res) => {
    crudController.getAll(req, res);
});
UserRoute.post("/users", createUser);
UserRoute.patch("/users/:id", updateUser);
UserRoute.delete("/users", deleteUser);
UserRoute.get("/users/login", (req, res) => {
    console.log(req.body.login);
    userController.getByLogin(req, res);
});
exports.default = UserRoute;
function getAllUsers(req, res) {
    crudController.getAll(req, res);
}
function createUser(req, res) {
    crudController.create(req, res);
}
function getUserById(req, res) {
    crudController.getByID(req, res);
}
function deleteUser(req, res) {
    crudController.delete(req, res);
}
function updateUser(req, res) {
    crudController.update(req, res);
}
