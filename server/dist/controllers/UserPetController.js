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
exports.UserPetController = void 0;
const UserPetService_1 = require("../model/services/implementations/usersServices/UserPetService");
const FoodService_1 = require("../model/services/implementations/gamification/FoodService");
const UserFood_1 = require("../model/domain/entities/gamification/UserFood");
class UserPetController {
    feed(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const food = yield FoodService_1.foodService.getItemById(Number(req.body.foodId));
                const userFood = yield UserFood_1.UserFood.findOne({
                    where: { userId: Number(req.body.userId), foodId: food.id },
                });
                if (!userFood) {
                    res.json("Don't have this food on user");
                    return;
                }
                if (userFood.quantity <= 0) {
                    res.json("Not enough food on user");
                    return;
                }
                const userPet = yield UserPetService_1.userPetService.getItemById(Number(req.params.id));
                userPet.hunger = Math.max(0, userPet.hunger - food.nourishmentValue);
                userPet.lastFed = new Date();
                yield UserPetService_1.userPetService.update(userPet.toJSON());
                yield UserFood_1.UserFood.decrement("quantity", {
                    where: { userId: Number(req.body.userId), foodId: food.id },
                });
                res.status(200).json({ userPet });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.UserPetController = UserPetController;
