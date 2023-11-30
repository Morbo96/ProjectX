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
exports.User = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const dailyTasks_1 = require("../dailyTasks/dailyTasks");
const usersBanks_1 = require("./usersBanks");
const usersPets_1 = require("./usersPets");
const folders_1 = require("../tasks/folders");
let User = class User extends sequelize_typescript_1.Model {
};
exports.User = User;
__decorate([
    (0, sequelize_typescript_1.Unique)(true),
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.IsEmail,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Unique)(true),
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "login", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "passwordEncrypted", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "refreshToken", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => folders_1.Folder),
    __metadata("design:type", Array)
], User.prototype, "folders", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => dailyTasks_1.DailyTask),
    __metadata("design:type", Array)
], User.prototype, "dailyTasks", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => usersBanks_1.UserBank),
    __metadata("design:type", usersBanks_1.UserBank)
], User.prototype, "userBank", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => usersPets_1.UserPet),
    __metadata("design:type", Array)
], User.prototype, "userPets", void 0);
exports.User = User = __decorate([
    sequelize_typescript_1.Table
], User);
