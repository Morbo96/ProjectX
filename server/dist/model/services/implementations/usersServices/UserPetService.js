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
exports.userPetService = void 0;
const usersPets_1 = require("../../../domain/entities/user/usersPets");
class UserPetService {
    itemExists(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield usersPets_1.UserPet.findOne({ where: { id } });
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
                yield usersPets_1.UserPet.update(item, { where: { id: item.id } });
                const result = yield usersPets_1.UserPet.findByPk(item.id);
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
                const result = yield usersPets_1.UserPet.findAll();
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
                const result = yield usersPets_1.UserPet.findOne({ where: { id } });
                return result;
            }
            catch (error) {
                return null;
            }
        });
    }
    create(userPet) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield usersPets_1.UserPet.create(userPet);
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
                yield usersPets_1.UserPet.destroy({ where: { id } });
                return true;
            }
            catch (error) {
                return false;
            }
        });
    }
}
exports.userPetService = new UserPetService();
