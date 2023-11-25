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
AuthRouter.patch("/auth/signIn", SignInSchema_1.signInSchema, ValidateRequest_1.validateRequest, (req, res) => {
    authController.signIn(req, res);
});
AuthRouter.post("/auth/signUp", SighUpSchema_1.signUpSchema, ValidateRequest_1.validateRequest, (req, res) => {
    authController.signUp(req, res);
});
AuthRouter.patch("/auth/logout", AccessTokenVerify_1.accessTokenVerify, (req, res) => {
    authController.logout(req, res);
});
AuthRouter.get("/auth/refreshAccessToken", (req, res) => {
    authController.refreshAccessToken(req, res);
});
exports.default = AuthRouter;
