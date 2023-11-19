"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserService_1 = require("../model/services/implementations/usersServices/UserService");
class UserController {
    getDailyTasks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usersDailyTasks = yield UserService_1.userService.getDailyTasks(req.body.userId);
                res.json(usersDailyTasks);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    getFolders(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usersFolders = yield UserService_1.userService.getFolders(req.body.userId);
                res.json(usersFolders);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    getUsersPet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usersPets = yield UserService_1.userService.getUsersPets(req.body.userId);
                res.json(usersPets);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    getByLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const oneItem = yield UserService_1.userService.getByLogin(req.params.login);
                res.json(oneItem);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
}
exports.UserController = UserController;
