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
exports.insertFoodInDB = void 0;
const Food_1 = require("../model/domain/entities/gamification/Food");
function insertFoodInDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield Food_1.Food.findOrCreate({
                where: { name: "sandwich" },
                defaults: { nourishmentValue: 10, cost: 2 },
            });
            yield Food_1.Food.findOrCreate({
                where: { name: "donut" },
                defaults: { nourishmentValue: 5, cost: 1 },
            });
            yield Food_1.Food.findOrCreate({
                where: { name: "cake" },
                defaults: { nourishmentValue: 30, cost: 6 },
            });
            yield Food_1.Food.findOrCreate({
                where: { name: "sweet madame" },
                defaults: { nourishmentValue: 100, cost: 20 },
            });
            yield Food_1.Food.findOrCreate({
                where: { name: "omelette rice" },
                defaults: { nourishmentValue: 50, cost: 10 },
            });
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.insertFoodInDB = insertFoodInDB;
