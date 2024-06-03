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
exports.FoodController = void 0;
const UserService_1 = require("../model/services/implementations/usersServices/UserService");
const FoodService_1 = require("../model/services/implementations/gamification/FoodService");
const UserFood_1 = require("../model/domain/entities/gamification/UserFood");
const users_1 = require("../model/domain/entities/user/users");
const Food_1 = require("../model/domain/entities/gamification/Food");
const UserBankService_1 = require("../model/services/implementations/usersServices/UserBankService");
const usersBanks_1 = require("../model/domain/entities/user/usersBanks");
class FoodController {
    buy(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield UserService_1.userService.getItemById(req.body.userId);
                const userBank = yield usersBanks_1.UserBank.findOne({ where: { userId: user.id } });
                const food = yield FoodService_1.foodService.getItemById(Number(req.params.id));
                if (userBank.money < food.cost) {
                    res.status(500).json("Not enough money!");
                    return;
                }
                if (!(yield user.$has("foods", food))) {
                    yield user.$add("foods", food, { through: { quantity: 1 } });
                }
                else {
                    yield UserFood_1.UserFood.increment("quantity", {
                        where: { userId: user.id, foodId: food.id },
                    });
                }
                userBank.money -= food.cost;
                yield UserBankService_1.userBankService.update(userBank.toJSON());
                const userWithFood = yield users_1.User.findByPk(user.id, {
                    include: [{ model: Food_1.Food }],
                });
                res.status(200).json({ userWithFood });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.FoodController = FoodController;
