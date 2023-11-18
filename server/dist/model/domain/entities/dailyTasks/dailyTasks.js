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
exports.DailyTask = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const users_1 = require("../user/users");
const dailySubtasks_1 = require("./dailySubtasks");
let DailyTask = class DailyTask extends sequelize_typescript_1.Model {
};
exports.DailyTask = DailyTask;
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], DailyTask.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], DailyTask.prototype, "icon", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => users_1.User),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], DailyTask.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => users_1.User, { onDelete: 'cascade' }),
    __metadata("design:type", users_1.User)
], DailyTask.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => dailySubtasks_1.DailySubtask),
    __metadata("design:type", Array)
], DailyTask.prototype, "dailySubtasks", void 0);
exports.DailyTask = DailyTask = __decorate([
    sequelize_typescript_1.Table
], DailyTask);
