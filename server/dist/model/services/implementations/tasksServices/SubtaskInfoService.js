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
exports.subtaskInfoService = void 0;
const subtaskInfos_1 = require("../../../domain/entities/tasks/subtaskInfos");
class SubtaskInfoService {
    itemExists(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield subtaskInfos_1.SubtaskInfo.findOne({ where: { id } });
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
                yield subtaskInfos_1.SubtaskInfo.update(item, { where: { id: item.id } });
                const result = yield subtaskInfos_1.SubtaskInfo.findByPk(item.id);
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
                const result = yield subtaskInfos_1.SubtaskInfo.findAll();
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
                const result = yield subtaskInfos_1.SubtaskInfo.findOne({ where: { id } });
                return result;
            }
            catch (error) {
                return null;
            }
        });
    }
    create(subtaskInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield subtaskInfos_1.SubtaskInfo.create(subtaskInfo);
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
                yield subtaskInfos_1.SubtaskInfo.destroy({ where: { id } });
                return true;
            }
            catch (error) {
                return false;
            }
        });
    }
}
exports.subtaskInfoService = new SubtaskInfoService();
