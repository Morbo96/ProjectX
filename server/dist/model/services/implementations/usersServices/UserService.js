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
const subtaskInfos_1 = require("../../../domain/entities/tasks/subtaskInfos");
const subtasks_1 = require("../../../domain/entities/tasks/subtasks");
const tasks_1 = require("../../../domain/entities/tasks/tasks");
const users_1 = require("../../../domain/entities/user/users");
const usersBanks_1 = require("../../../domain/entities/user/usersBanks");
const usersPets_1 = require("../../../domain/entities/user/usersPets");
const UserBankService_1 = require("./UserBankService");
class UserService {
    getByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield users_1.User.findOne({ where: { email: email } });
            return result;
        });
    }
    getByLogin(login) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield users_1.User.findOne({ where: { login: login } });
            return result;
        });
    }
    getDailyTasks(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield dailyTasks_1.DailyTask.findAll({ where: { userId: userId } });
            return result;
        });
    }
    getUsersPets(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield usersPets_1.UserPet.findAll({ where: { userId: userId } });
            return result;
        });
    }
    getFolders(userId) {
        return __awaiter(this, void 0, void 0, function* () {
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
                                include: [
                                    {
                                        model: subtasks_1.Subtask,
                                        required: false,
                                        include: [{ model: subtaskInfos_1.SubtaskInfo, required: false }],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
            return result;
        });
    }
    itemExists(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield users_1.User.findOne({ where: { id } });
            return result ? true : false;
        });
    }
    update(item) {
        return __awaiter(this, void 0, void 0, function* () {
            yield users_1.User.update(item, { where: { id: item.id } });
            const result = yield users_1.User.findByPk(item.id);
            return result;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield users_1.User.findAll();
            return result;
        });
    }
    getItemById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield users_1.User.findOne({ where: { id } });
            return result;
        });
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield users_1.User.create(user);
            const relatedUserBank = usersBanks_1.UserBank.build({
                userId: result.id,
            });
            yield UserBankService_1.userBankService.create(relatedUserBank.toJSON());
            return result;
        });
    }
    deleteItem(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield usersBanks_1.UserBank.destroy({ where: { userId: id } });
            yield users_1.User.destroy({ where: { id } });
            return true;
        });
    }
}
exports.userService = new UserService();
