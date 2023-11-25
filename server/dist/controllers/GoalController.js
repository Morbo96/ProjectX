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
exports.GoalController = void 0;
const GoalService_1 = require("../model/services/implementations/tasksServices/GoalService");
const TaskService_1 = require("../model/services/implementations/tasksServices/TaskService");
class GoalController {
    getTasks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const goalsTasks = yield GoalService_1.goalService.getTasks(Number(req.params.id));
                res.json(goalsTasks);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    createTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                req.body.goalId = req.params.id;
                const newTask = yield TaskService_1.taskService.create(req.body);
                res.status(200).json(newTask);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
}
exports.GoalController = GoalController;
