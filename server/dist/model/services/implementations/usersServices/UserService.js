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
exports.userService = void 0;
const dailyTasks_1 = require("../../../domain/entities/dailyTasks/dailyTasks");
const folders_1 = require("../../../domain/entities/tasks/folders");
const goals_1 = require("../../../domain/entities/tasks/goals");
const subtasks_1 = require("../../../domain/entities/tasks/subtasks");
const tasks_1 = require("../../../domain/entities/tasks/tasks");
const users_1 = require("../../../domain/entities/user/users");
const usersBanks_1 = require("../../../domain/entities/user/usersBanks");
const usersPets_1 = require("../../../domain/entities/user/usersPets");
const UserBankService_1 = require("./UserBankService");
class UserService {
    getByLogin(login) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield users_1.User.findOne({ where: { login: login } });
                return result;
            }
            catch (error) {
                return null;
            }
        });
    }
    getDailyTasks(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield dailyTasks_1.DailyTask.findAll({ where: { userId: userId } });
                return result;
            }
            catch (error) {
                return null;
            }
        });
    }
    getUsersPets(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield usersPets_1.UserPet.findAll({ where: { userId: userId } });
                return result;
            }
            catch (error) {
                return null;
            }
        });
    }
    getFolders(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield folders_1.Folder.findAll({
                    where: { userId: userId },
                    include: [
                        {
                            model: goals_1.Goal,
                            required: false,
                            include: [
                                {
                                    model: tasks_1.Task,
                                    required: false,
                                    include: [{ model: subtasks_1.Subtask, required: false }],
                                },
                            ],
                        },
                    ],
                });
                return result;
            }
            catch (error) {
                return null;
            }
        });
    }
    itemExists(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield users_1.User.findOne({ where: { id } });
                return result ? true : false;
            }
            catch (error) {
                return false;
            }
        });
    }
    update(item) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield users_1.User.update(item, { where: { id: item.id } });
                const result = yield users_1.User.findByPk(item.id);
                return result;
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield users_1.User.findAll();
                return result;
            }
            catch (error) {
                return null;
            }
        });
    }
    getItemById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield users_1.User.findOne({ where: { id } });
                return result;
            }
            catch (error) {
                return null;
            }
        });
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield users_1.User.create(user);
                const relatedUserBank = usersBanks_1.UserBank.build({
                    userId: result.id,
                });
                yield UserBankService_1.userBankService.create(relatedUserBank.toJSON());
                return result;
            }
            catch (error) {
                return null;
            }
        });
    }
    deleteItem(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield usersBanks_1.UserBank.destroy({ where: { userId: id } });
                yield users_1.User.destroy({ where: { id } });
                return true;
            }
            catch (error) {
                console.log(error);
                return false;
            }
        });
    }
}
exports.userService = new UserService();
