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
exports.UserBank = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const users_1 = require("./users");
let UserBank = class UserBank extends sequelize_typescript_1.Model {
};
exports.UserBank = UserBank;
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], UserBank.prototype, "money", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], UserBank.prototype, "diamonds", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => users_1.User),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], UserBank.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => users_1.User),
    __metadata("design:type", users_1.User)
], UserBank.prototype, "user", void 0);
exports.UserBank = UserBank = __decorate([
    sequelize_typescript_1.Table
], UserBank);
