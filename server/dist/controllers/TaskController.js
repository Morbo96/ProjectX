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
}
exports.TaskController = TaskController;
