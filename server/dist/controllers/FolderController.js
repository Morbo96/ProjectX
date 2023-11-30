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
exports.FolderController = void 0;
const FolderService_1 = require("../model/services/implementations/tasksServices/FolderService");
const GoalService_1 = require("../model/services/implementations/tasksServices/GoalService");
class FolderController {
    getGoals(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const foldersGoals = yield FolderService_1.folderService.getGoals(Number(req.params.id));
                res.json(foldersGoals);
            }
            catch (error) {
                next(error);
            }
        });
    }
    createGoal(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                req.body.folderId = req.params.id;
                const newGoal = yield GoalService_1.goalService.create(req.body);
                res.status(200).json(newGoal);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.FolderController = FolderController;
