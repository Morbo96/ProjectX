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
exports.DailytaskController = void 0;
const DailyTaskService_1 = require("../model/services/implementations/dailyTasksServices/DailyTaskService");
const dailySubtasks_1 = require("../model/domain/entities/dailyTasks/dailySubtasks");
const DailySubtaskService_1 = require("../model/services/implementations/dailyTasksServices/DailySubtaskService");
const dailySubtaskNotifications_1 = require("../model/domain/entities/dailyTasks/dailySubtaskNotifications");
const dailySubtaskNotificationTime_1 = require("../model/domain/entities/dailyTasks/dailySubtaskNotificationTime");
class DailytaskController {
    getDailysubtasks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dailytasksDailysubtasks = yield DailyTaskService_1.dailyTaskService.getDailysubtasks(Number(req.params.id));
                res.json(dailytasksDailysubtasks);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    createDailySubtask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.body.dailySubtask) {
                    return res.status(500).json("No dailySubtask provided");
                }
                const newDailySubtask = yield DailySubtaskService_1.dailySubtaskService.create(req.body.dailySubtask);
                newDailySubtask.dailyTaskId = Number(req.params.id);
                yield DailySubtaskService_1.dailySubtaskService.update(newDailySubtask.toJSON());
                if (req.body.dailySubtaskNotification != null) {
                    req.body.dailySubtaskNotification.dailySubtaskId = newDailySubtask.id;
                    const newDailySubtaskNotification = yield newDailySubtask.$create("dailySubtaskNotification", req.body.dailySubtaskNotification);
                    if (req.body.dailySubtaskNotificationTime != null) {
                        yield newDailySubtaskNotification.$create("dailySubtaskNotificationTime", req.body.dailySubtaskNotificationTime);
                    }
                }
                const foundDailySubtask = yield dailySubtasks_1.DailySubtask.findOne({
                    where: { id: newDailySubtask.id },
                    include: [
                        {
                            model: dailySubtaskNotifications_1.DailySubtaskNotification,
                            include: [{ model: dailySubtaskNotificationTime_1.DailySubtaskNotificationTime, required: false }],
                            required: false,
                        },
                    ],
                });
                res.json(foundDailySubtask);
            }
            catch (error) {
                console.log(error);
                const newEr = error;
                res.status(500).json({ error: newEr.message });
            }
        });
    }
}
exports.DailytaskController = DailytaskController;
