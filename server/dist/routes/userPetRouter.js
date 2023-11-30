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
const AccessTokenVerify_1 = require("../middleware/AccessTokenVerify");
const UserPetCheck_1 = require("../middleware/UserPetCheck");
const UserPetRoute = (0, express_2.Router)();
const crudController = new CRUDController_1.CRUDController(UserPetService_1.userPetService);
UserPetRoute.use(express_1.default.json());
UserPetRoute.get("/userPets/:id", AccessTokenVerify_1.accessTokenVerify, FindUserByToken_1.findUserByToken, UserPetCheck_1.userPetCheck, (req, res, next) => {
    crudController.getByID(req, res, next);
});
UserPetRoute.get("/userPets", (req, res, next) => {
    crudController.getAll(req, res, next);
});
UserPetRoute.post("/userPets", AccessTokenVerify_1.accessTokenVerify, FindUserByToken_1.findUserByToken, (req, res, next) => {
    crudController.create(req, res, next);
});
UserPetRoute.patch("/userPets/:id", AccessTokenVerify_1.accessTokenVerify, FindUserByToken_1.findUserByToken, UserPetCheck_1.userPetCheck, (req, res, next) => {
    crudController.update(req, res, next);
});
UserPetRoute.delete("/userPets/:id", AccessTokenVerify_1.accessTokenVerify, FindUserByToken_1.findUserByToken, UserPetCheck_1.userPetCheck, (req, res, next) => {
    crudController.delete(req, res, next);
});
exports.default = UserPetRoute;
