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
exports.dailyTaskService = void 0;
const dailySubtasks_1 = require("../../../domain/entities/dailyTasks/dailySubtasks");
const dailyTasks_1 = require("../../../domain/entities/dailyTasks/dailyTasks");
class DailyTaskService {
    getDailysubtasks(dailyTaskId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield dailySubtasks_1.DailySubtask.findAll({
                where: { dailyTaskId: dailyTaskId },
            });
            return result;
        });
    }
    itemExists(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield dailyTasks_1.DailyTask.findOne({ where: { id } });
            return result ? true : false;
        });
    }
    update(item) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dailyTasks_1.DailyTask.update(item, { where: { id: item.id } });
            const result = yield dailyTasks_1.DailyTask.findByPk(item.id);
            return result;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield dailyTasks_1.DailyTask.findAll();
            return result;
        });
    }
    getItemById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield dailyTasks_1.DailyTask.findOne({ where: { id } });
            return result;
        });
    }
    create(dailyTask) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield dailyTasks_1.DailyTask.create(dailyTask);
            return result;
        });
    }
    deleteItem(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dailyTasks_1.DailyTask.destroy({ where: { id } });
            return true;
        });
    }
}
exports.dailyTaskService = new DailyTaskService();
