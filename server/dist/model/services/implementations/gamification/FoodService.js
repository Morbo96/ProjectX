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
exports.foodService = void 0;
const Food_1 = require("../../../domain/entities/gamification/Food");
class FoodService {
    itemExists(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Food_1.Food.findOne({ where: { id } });
            return result ? true : false;
        });
    }
    update(item) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Food_1.Food.update(item, { where: { id: item.id } });
            const result = yield Food_1.Food.findByPk(item.id);
            return result;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Food_1.Food.findAll();
            return result;
        });
    }
    getItemById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Food_1.Food.findOne({ where: { id } });
            return result;
        });
    }
    create(food) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Food_1.Food.create(food);
            return result;
        });
    }
    deleteItem(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Food_1.Food.destroy({ where: { id } });
            return true;
        });
    }
}
exports.foodService = new FoodService();
