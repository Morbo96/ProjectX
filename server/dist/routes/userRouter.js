"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const UserRoute = (0, express_1.Router)();
UserRoute.post("/users", userController_1.userController.create);
UserRoute.get("/users", userController_1.userController.getAll);
exports.default = UserRoute;
