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
exports.subtaskCheck = void 0;
const tasks_1 = require("../model/domain/entities/tasks/tasks");
const goals_1 = require("../model/domain/entities/tasks/goals");
const folders_1 = require("../model/domain/entities/tasks/folders");
const subtasks_1 = require("../model/domain/entities/tasks/subtasks");
const subtaskCheck = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const subtask = yield subtasks_1.Subtask.findOne({
            where: { id: req.params.id },
            include: [
                {
                    model: tasks_1.Task,
                    include: [
                        {
                            model: goals_1.Goal,
                            include: [
                                {
                                    model: folders_1.Folder,
                                    where: { userId: req.body.userId },
                                    required: true,
                                },
                            ],
                            required: true,
                        },
                    ],
                    required: true,
                },
            ],
        });
        if (!subtask) {
            return res.status(500).json({ message: "You don't have access" });
        }
        next();
    }
    catch (error) {
        next(error);
    }
});
exports.subtaskCheck = subtaskCheck;
