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
exports.goalCheck = void 0;
const goals_1 = require("../model/domain/entities/tasks/goals");
const folders_1 = require("../model/domain/entities/tasks/folders");
const goalCheck = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const goal = yield goals_1.Goal.findOne({
            where: { id: req.params.id },
            include: [
                { model: folders_1.Folder, where: { userId: req.body.userId }, required: true },
            ],
        });
        if (!goal) {
            return res.status(500).json({ message: "You don't have access" });
        }
        next();
    }
    catch (error) {
        const err = error;
        res.status(500).json(err.message);
    }
});
exports.goalCheck = goalCheck;
