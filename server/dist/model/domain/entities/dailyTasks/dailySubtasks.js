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
exports.DailySubtask = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const dailyTasks_1 = require("./dailyTasks");
const dailySubtaskNotifications_1 = require("./dailySubtaskNotifications");
let DailySubtask = class DailySubtask extends sequelize_typescript_1.Model {
};
exports.DailySubtask = DailySubtask;
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], DailySubtask.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], DailySubtask.prototype, "notification", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(0),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], DailySubtask.prototype, "complicity", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(0),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], DailySubtask.prototype, "weight", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => dailyTasks_1.DailyTask),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], DailySubtask.prototype, "dailyTaskId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => dailyTasks_1.DailyTask, { onDelete: "cascade" }),
    __metadata("design:type", dailyTasks_1.DailyTask)
], DailySubtask.prototype, "dailyTask", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => dailySubtaskNotifications_1.DailySubtaskNotification),
    __metadata("design:type", dailySubtaskNotifications_1.DailySubtaskNotification)
], DailySubtask.prototype, "dailySubtaskNotification", void 0);
exports.DailySubtask = DailySubtask = __decorate([
    sequelize_typescript_1.Table
], DailySubtask);
