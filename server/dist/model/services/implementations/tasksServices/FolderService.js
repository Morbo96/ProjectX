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
exports.folderService = void 0;
const folders_1 = require("../../../domain/entities/tasks/folders");
const goals_1 = require("../../../domain/entities/tasks/goals");
class FolderService {
    getGoals(folderId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield goals_1.Goal.findAll({ where: { folderId: folderId } });
                return result;
            }
            catch (error) {
                return null;
            }
        });
    }
    itemExists(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield folders_1.Folder.findOne({ where: { id } });
                return result ? true : false;
            }
            catch (error) {
                return false;
            }
        });
    }
    update(item) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield folders_1.Folder.update(item, { where: { id: item.id } });
                const result = yield folders_1.Folder.findByPk(item.id);
                return result;
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield folders_1.Folder.findAll();
                return result;
            }
            catch (error) {
                return null;
            }
        });
    }
    getItemById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield folders_1.Folder.findOne({ where: { id } });
                return result;
            }
            catch (error) {
                return null;
            }
        });
    }
    create(folder) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield folders_1.Folder.create(folder);
                return result;
            }
            catch (error) {
                return null;
            }
        });
    }
    deleteItem(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield folders_1.Folder.destroy({ where: { id } });
                return true;
            }
            catch (error) {
                return false;
            }
        });
    }
}
exports.folderService = new FolderService();
