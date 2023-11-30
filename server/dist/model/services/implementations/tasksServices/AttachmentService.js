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
exports.attachmentService = void 0;
const attachments_1 = require("../../../domain/entities/tasks/attachments");
class AttachmentService {
    itemExists(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield attachments_1.Attachment.findOne({ where: { id } });
            return result ? true : false;
        });
    }
    update(item) {
        return __awaiter(this, void 0, void 0, function* () {
            yield attachments_1.Attachment.update(item, { where: { id: item.id } });
            const result = yield attachments_1.Attachment.findByPk(item.id);
            return result;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield attachments_1.Attachment.findAll();
            return result;
        });
    }
    getItemById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield attachments_1.Attachment.findOne({ where: { id } });
            return result;
        });
    }
    create(attachment) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield attachments_1.Attachment.create(attachment);
            return result;
        });
    }
    deleteItem(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield attachments_1.Attachment.destroy({ where: { id } });
            return true;
        });
    }
}
exports.attachmentService = new AttachmentService();
