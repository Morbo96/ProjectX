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
const usersBanks_1 = require("../model/domain/entities/user/usersBanks");
class UserController {
    getDailyTasks(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usersDailyTasks = yield UserService_1.userService.getDailyTasks(req.body.userId);
                res.json(usersDailyTasks);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getUserBank(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userBank = yield usersBanks_1.UserBank.findOne({
                    where: { userId: req.body.userId },
                });
                res.json(userBank);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getFolders(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usersFolders = yield UserService_1.userService.getFolders(req.body.userId);
                res.json(usersFolders);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getUsersPet(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usersPets = yield UserService_1.userService.getUsersPets(req.body.userId);
                res.json(usersPets);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getByLogin(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const oneItem = yield UserService_1.userService.getByLogin(req.params.login);
                res.json(oneItem);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.UserController = UserController;
