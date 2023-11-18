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
exports.DailySubtaskNotification = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const dailySubtasks_1 = require("./dailySubtasks");
const dailySubtaskNotificationTime_1 = require("./dailySubtaskNotificationTime");
let DailySubtaskNotification = class DailySubtaskNotification extends sequelize_typescript_1.Model {
};
exports.DailySubtaskNotification = DailySubtaskNotification;
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], DailySubtaskNotification.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], DailySubtaskNotification.prototype, "hasCertainTime", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], DailySubtaskNotification.prototype, "periodDate", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => dailySubtasks_1.DailySubtask),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], DailySubtaskNotification.prototype, "dailySubtaskId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => dailySubtasks_1.DailySubtask, { onDelete: "cascade" }),
    __metadata("design:type", dailySubtasks_1.DailySubtask)
], DailySubtaskNotification.prototype, "dailySubtask", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => dailySubtaskNotificationTime_1.DailySubtaskNotificationTime),
    __metadata("design:type", Array)
], DailySubtaskNotification.prototype, "dailySubtaskNotificationTimes", void 0);
exports.DailySubtaskNotification = DailySubtaskNotification = __decorate([
    sequelize_typescript_1.Table
], DailySubtaskNotification);
