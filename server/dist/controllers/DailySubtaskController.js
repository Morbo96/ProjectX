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
exports.DailySubtaskController = void 0;
const DailySubtaskService_1 = require("../model/services/implementations/dailyTasksServices/DailySubtaskService");
const dailySubtasks_1 = require("../model/domain/entities/dailyTasks/dailySubtasks");
const dailySubtaskNotifications_1 = require("../model/domain/entities/dailyTasks/dailySubtaskNotifications");
const dailySubtaskNotificationTime_1 = require("../model/domain/entities/dailyTasks/dailySubtaskNotificationTime");
class DailySubtaskController {
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dailySubtask = yield dailySubtasks_1.DailySubtask.findOne({
                    where: { id: req.params.id },
                    include: [
                        {
                            model: dailySubtaskNotifications_1.DailySubtaskNotification,
                            include: [{ model: dailySubtaskNotificationTime_1.DailySubtaskNotificationTime, required: false }],
                            required: false,
                        },
                    ],
                });
                res.json(dailySubtask);
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
                var updatedDailySubtask = yield DailySubtaskService_1.dailySubtaskService.update(req.body);
                if (req.body.dailySubtaskNotification) {
                    const dailySubtaskNotification = yield updatedDailySubtask.$get("dailySubtaskNotification");
                    yield dailySubtaskNotifications_1.DailySubtaskNotification.update(req.body.dailySubtaskNotification, {
                        where: { id: dailySubtaskNotification.id },
                    });
                }
                updatedDailySubtask = yield dailySubtasks_1.DailySubtask.findOne({
                    where: { id: req.params.id },
                    include: [
                        {
                            model: dailySubtaskNotifications_1.DailySubtaskNotification,
                            include: [{ model: dailySubtaskNotificationTime_1.DailySubtaskNotificationTime, required: false }],
                            required: false,
                        },
                    ],
                });
                res.json(updatedDailySubtask);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
}
exports.DailySubtaskController = DailySubtaskController;
