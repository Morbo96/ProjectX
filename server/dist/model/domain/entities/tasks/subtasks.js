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
exports.Subtask = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const tasks_1 = require("./tasks");
const subtaskInfos_1 = require("./subtaskInfos");
const attachments_1 = require("./attachments");
let Subtask = class Subtask extends sequelize_typescript_1.Model {
};
exports.Subtask = Subtask;
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Subtask.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Subtask.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => tasks_1.Task),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Subtask.prototype, "taskId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => tasks_1.Task, { onDelete: 'cascade' }),
    __metadata("design:type", tasks_1.Task)
], Subtask.prototype, "task", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => subtaskInfos_1.SubtaskInfo),
    __metadata("design:type", subtaskInfos_1.SubtaskInfo)
], Subtask.prototype, "subtaskInfo", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => attachments_1.Attachment),
    __metadata("design:type", Array)
], Subtask.prototype, "attachemnts", void 0);
exports.Subtask = Subtask = __decorate([
    sequelize_typescript_1.Table
], Subtask);
