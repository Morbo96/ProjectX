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
exports.calculateCurrentHunger = void 0;
const UserPetService_1 = require("../model/services/implementations/usersServices/UserPetService");
const calculateCurrentHunger = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hungerMultiplierRate = Number(process.env.HUNGER_MULTIPLIER_RATE);
        const userPet = yield UserPetService_1.userPetService.getItemById(Number(req.params.id));
        const currentTime = new Date();
        const minutesPassed = (currentTime.getTime() - userPet.lastFed.getTime()) / (60 * 1000);
        userPet.hunger = Math.min(Math.round(userPet.hunger + minutesPassed * hungerMultiplierRate), 100);
        yield UserPetService_1.userPetService.update(userPet.toJSON());
        next();
    }
    catch (error) {
        next(error);
    }
});
exports.calculateCurrentHunger = calculateCurrentHunger;
