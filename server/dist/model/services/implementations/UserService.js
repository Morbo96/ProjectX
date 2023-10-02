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
exports.userService = void 0;
const users_1 = require("../../domain/entities/users");
class UserService {
    itemExists(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield users_1.User.findOne({ where: { id } });
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
                yield users_1.User.update(item, { where: { id: item.id } });
                const result = yield users_1.User.findByPk(item.id);
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
                const result = yield users_1.User.findAll();
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
                const result = yield users_1.User.findOne({ where: { id } });
                return result;
            }
            catch (error) {
                return null;
            }
        });
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield users_1.User.create(user);
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
                yield users_1.User.destroy({ where: { id } });
                return true;
            }
            catch (error) {
                return false;
            }
        });
    }
    getByLogin(login) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield users_1.User.findOne({ where: { login: login } });
                return result;
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.userService = new UserService();
