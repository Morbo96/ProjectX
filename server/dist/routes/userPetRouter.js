"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const UserPetService_1 = require("../model/services/implementations/usersServices/UserPetService");
const CRUDController_1 = require("../controllers/CRUDController");
const FindUserByToken_1 = require("../middleware/FindUserByToken");
const UserCheck_1 = require("../middleware/UserCheck");
const UserPetRoute = (0, express_2.Router)();
const crudController = new CRUDController_1.CRUDController(UserPetService_1.userPetService);
UserPetRoute.use(express_1.default.json());
UserPetRoute.get("/userPets/:id", (req, res) => {
    crudController.getByID(req, res);
});
UserPetRoute.get("/userPets", (req, res) => {
    crudController.getAll(req, res);
});
UserPetRoute.post("/userPets", UserCheck_1.userCheck, FindUserByToken_1.findUserByToken, (req, res) => {
    crudController.create(req, res);
});
UserPetRoute.patch("/userPets/:id", (req, res) => {
    crudController.update(req, res);
});
UserPetRoute.delete("/userPets", (req, res) => {
    crudController.delete(req, res);
});
exports.default = UserPetRoute;
