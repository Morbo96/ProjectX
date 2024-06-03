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
exports.Food = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const UserFood_1 = require("./UserFood");
const users_1 = require("../user/users");
let Food = class Food extends sequelize_typescript_1.Model {
};
exports.Food = Food;
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Food.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Min)(0),
    (0, sequelize_typescript_1.Max)(100),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Food.prototype, "nourishmentValue", void 0);
__decorate([
    (0, sequelize_typescript_1.Min)(0),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Food.prototype, "cost", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => users_1.User, () => UserFood_1.UserFood),
    __metadata("design:type", Array)
], Food.prototype, "users", void 0);
exports.Food = Food = __decorate([
    (0, sequelize_typescript_1.Table)({ underscored: true })
], Food);
