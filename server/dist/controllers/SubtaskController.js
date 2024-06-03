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
exports.SubtaskController = void 0;
const SubtaskService_1 = require("../model/services/implementations/tasksServices/SubtaskService");
const subtaskInfos_1 = require("../model/domain/entities/tasks/subtaskInfos");
const subtasks_1 = require("../model/domain/entities/tasks/subtasks");
const usersBanks_1 = require("../model/domain/entities/user/usersBanks");
const SubtaskInfoService_1 = require("../model/services/implementations/tasksServices/SubtaskInfoService");
const UserBankService_1 = require("../model/services/implementations/usersServices/UserBankService");
class SubtaskController {
    getById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const subtask = yield subtasks_1.Subtask.findOne({
                    where: { id: req.params.id },
                    include: { model: subtaskInfos_1.SubtaskInfo },
                });
                res.json(subtask);
            }
            catch (error) {
                next(error);
            }
        });
    }
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                req.body.id = req.params.id;
                var updatedSubtask = yield SubtaskService_1.subtaskService.update(req.body);
                if (req.body.subtaskInfo) {
                    if (req.body.subtaskInfo.completed == "true") {
                        delete req.body.subtaskInfo.completed;
                    }
                    const subtaskInfo = yield updatedSubtask.$get("subtaskInfo"); //FUTURE change from models method to service
                    yield subtaskInfos_1.SubtaskInfo.update(req.body.subtaskInfo, {
                        where: { id: subtaskInfo.id },
                    });
                }
                updatedSubtask = yield subtasks_1.Subtask.findOne({
                    where: { id: req.params.id },
                    include: { model: subtaskInfos_1.SubtaskInfo },
                });
                res.json(updatedSubtask);
            }
            catch (error) {
                next(error);
            }
        });
    }
    complete(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const subtaskInfo = yield subtaskInfos_1.SubtaskInfo.findOne({
                    where: { subtaskId: Number(req.params.id) },
                });
                if (subtaskInfo.completed == true) {
                    return res.status(500).json("already completed");
                }
                subtaskInfo.completed = true;
                yield SubtaskInfoService_1.subtaskInfoService.update(subtaskInfo.toJSON());
                const userBank = yield usersBanks_1.UserBank.findOne({
                    where: { userId: Number(req.body.userId) },
                });
                if (subtaskInfo.difficulty == "EASY") {
                    userBank.money += Number(process.env.EASY_REWARD);
                }
                else if (subtaskInfo.difficulty == "MEDIUM") {
                    userBank.money += Number(process.env.MEDIUM_REWARD);
                }
                else if (subtaskInfo.difficulty == "HARD") {
                    userBank.money += Number(process.env.HARD_REWARD);
                }
                yield UserBankService_1.userBankService.update(userBank.toJSON());
                res.json("Current balance:" +
                    userBank.money +
                    "   Subtask status:" +
                    subtaskInfo.completed); //TODO какой ответ будет
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.SubtaskController = SubtaskController;
