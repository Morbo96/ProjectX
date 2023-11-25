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
class SubtaskController {
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const subtask = yield subtasks_1.Subtask.findOne({
                    where: { id: req.params.id },
                    include: { model: subtaskInfos_1.SubtaskInfo },
                });
                res.json(subtask);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                req.body.id = req.params.id;
                var updatedSubtask = yield SubtaskService_1.subtaskService.update(req.body);
                if (req.body.subtaskInfo) {
                    const subtaskInfo = yield updatedSubtask.$get("subtaskInfo");
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
                res.status(500).json(error);
            }
        });
    }
}
exports.SubtaskController = SubtaskController;
