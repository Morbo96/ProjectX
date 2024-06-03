"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFood = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const users_1 = require("../user/users");
const Food_1 = require("./Food");
let UserFood = class UserFood extends sequelize_typescript_1.Model {
};
exports.UserFood = UserFood;
__decorate([
    (0, sequelize_typescript_1.Min)(0),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], UserFood.prototype, "quantity", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => users_1.User),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], UserFood.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Food_1.Food),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], UserFood.prototype, "foodId", void 0);
exports.UserFood = UserFood = __decorate([
    (0, sequelize_typescript_1.Table)({ underscored: true })
], UserFood);
