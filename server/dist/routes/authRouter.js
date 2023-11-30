"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const AccessTokenVerify_1 = require("../middleware/AccessTokenVerify");
const SighUpSchema_1 = require("../middleware/validations/SighUpSchema");
const ValidateRequest_1 = require("../middleware/ValidateRequest");
const SignInSchema_1 = require("../middleware/validations/SignInSchema");
const AuthController_1 = require("../controllers/AuthController");
const AuthRouter = (0, express_2.Router)();
const authController = new AuthController_1.AuthController();
AuthRouter.use(express_1.default.json());
AuthRouter.patch("/auth/signIn", SignInSchema_1.signInSchema, ValidateRequest_1.validateRequest, (req, res, next) => {
    authController.signIn(req, res, next);
});
AuthRouter.post("/auth/signUp", SighUpSchema_1.signUpSchema, ValidateRequest_1.validateRequest, (req, res, next) => {
    authController.signUp(req, res, next);
});
AuthRouter.patch("/auth/logout", AccessTokenVerify_1.accessTokenVerify, (req, res, next) => {
    authController.logout(req, res, next);
});
AuthRouter.get("/auth/refreshAccessToken", (req, res, next) => {
    authController.refreshAccessToken(req, res, next);
});
exports.default = AuthRouter;
