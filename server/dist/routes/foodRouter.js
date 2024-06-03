"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const CRUDController_1 = require("../controllers/CRUDController");
const FindUserByToken_1 = require("../middleware/FindUserByToken");
const AccessTokenVerify_1 = require("../middleware/AccessTokenVerify");
const FoodService_1 = require("../model/services/implementations/gamification/FoodService");
const FoodController_1 = require("../controllers/FoodController");
const FoodRoute = (0, express_2.Router)();
const crudController = new CRUDController_1.CRUDController(FoodService_1.foodService);
const foodController = new FoodController_1.FoodController();
FoodRoute.use(express_1.default.json());
FoodRoute.get("/food/:id", AccessTokenVerify_1.accessTokenVerify, FindUserByToken_1.findUserByToken, (req, res, next) => {
    crudController.getByID(req, res, next);
});
FoodRoute.get("/food", (req, res, next) => {
    crudController.getAll(req, res, next);
});
FoodRoute.post("/food", (req, res, next) => {
    crudController.create(req, res, next);
}); //TODO не забудь убрать
FoodRoute.patch("/food/:id", AccessTokenVerify_1.accessTokenVerify, FindUserByToken_1.findUserByToken, (req, res, next) => {
    crudController.update(req, res, next);
});
FoodRoute.delete("/food/:id", AccessTokenVerify_1.accessTokenVerify, FindUserByToken_1.findUserByToken, (req, res, next) => {
    crudController.delete(req, res, next);
});
FoodRoute.patch("/food/:id/buy", AccessTokenVerify_1.accessTokenVerify, FindUserByToken_1.findUserByToken, (req, res, next) => {
    foodController.buy(req, res, next);
});
exports.default = FoodRoute;
