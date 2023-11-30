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
exports.taskService = void 0;
const folders_1 = require("../../../domain/entities/tasks/folders");
const goals_1 = require("../../../domain/entities/tasks/goals");
const subtasks_1 = require("../../../domain/entities/tasks/subtasks");
const tasks_1 = require("../../../domain/entities/tasks/tasks");
class TaskService {
    getUsersTasks(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const tasks = yield tasks_1.Task.findAll({
                include: [
                    {
                        model: goals_1.Goal,
                        include: [
                            {
                                model: folders_1.Folder,
                                where: { userId: userId },
                                required: true,
                            },
                        ],
                        required: true,
                    },
                ],
            });
            return tasks;
        });
    }
    getSubtasks(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield subtasks_1.Subtask.findAll({ where: { taskId: taskId } });
            return result;
        });
    }
    itemExists(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield tasks_1.Task.findOne({ where: { id } });
            return result ? true : false;
        });
    }
    update(item) {
        return __awaiter(this, void 0, void 0, function* () {
            yield tasks_1.Task.update(item, { where: { id: item.id } });
            const result = yield tasks_1.Task.findByPk(item.id);
            return result;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield tasks_1.Task.findAll();
            return result;
        });
    }
    getItemById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield tasks_1.Task.findOne({ where: { id } });
            return result;
        });
    }
    create(task) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield tasks_1.Task.create(task);
            return result;
        });
    }
    deleteItem(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield tasks_1.Task.destroy({ where: { id } });
            return true;
        });
    }
}
exports.taskService = new TaskService();
