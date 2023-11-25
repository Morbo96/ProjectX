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
exports.dailySubtaskCheck = void 0;
const dailySubtasks_1 = require("../model/domain/entities/dailyTasks/dailySubtasks");
const dailyTasks_1 = require("../model/domain/entities/dailyTasks/dailyTasks");
const dailySubtaskCheck = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dailySubtask = yield dailySubtasks_1.DailySubtask.findOne({
            where: { id: req.params.id },
            include: [
                {
                    model: dailyTasks_1.DailyTask,
                    where: { userId: req.body.userId },
                    required: true,
                },
            ],
        });
        if (!dailySubtask) {
            return res.status(500).json({ message: "You don't have access" });
        }
        next();
    }
    catch (error) {
        const err = error;
        res.status(500).json(err.message);
    }
});
exports.dailySubtaskCheck = dailySubtaskCheck;
