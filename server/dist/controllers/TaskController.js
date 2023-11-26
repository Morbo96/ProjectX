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
exports.TaskController = void 0;
const TaskService_1 = require("../model/services/implementations/tasksServices/TaskService");
const subtaskInfos_1 = require("../model/domain/entities/tasks/subtaskInfos");
const subtasks_1 = require("../model/domain/entities/tasks/subtasks");
const SubtaskService_1 = require("../model/services/implementations/tasksServices/SubtaskService");
class TaskController {
    getSubtasks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tasksSubtasks = yield TaskService_1.taskService.getSubtasks(Number(req.params.id));
                res.json(tasksSubtasks);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    createSubtask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                req.body.taskId = req.params.id;
                const subtask = yield SubtaskService_1.subtaskService.create(req.body);
                yield subtask.$create("subtaskInfo", req.body.subtaskInfo);
                const foundSubtask = yield subtasks_1.Subtask.findOne({
                    where: { id: subtask.id },
                    include: [{ model: subtaskInfos_1.SubtaskInfo }],
                });
                res.json(foundSubtask);
            }
            catch (error) {
                const err = error;
                res.status(500).json(err.message);
            }
        });
    }
}
exports.TaskController = TaskController;
