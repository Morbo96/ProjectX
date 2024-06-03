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
exports.SubtaskInfo = exports.Difficulty = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const subtasks_1 = require("./subtasks");
var Difficulty;
(function (Difficulty) {
    Difficulty["EASY"] = "EASY";
    Difficulty["MEDIUM"] = "MEDIUM";
    Difficulty["HARD"] = "HARD";
})(Difficulty || (exports.Difficulty = Difficulty = {}));
let SubtaskInfo = class SubtaskInfo extends sequelize_typescript_1.Model {
};
exports.SubtaskInfo = SubtaskInfo;
__decorate([
    (0, sequelize_typescript_1.Column)({
        defaultValue: Difficulty.EASY,
        type: sequelize_typescript_1.DataType.ENUM(...Object.values(Difficulty)),
    }),
    __metadata("design:type", String)
], SubtaskInfo.prototype, "difficulty", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], SubtaskInfo.prototype, "dateStart", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], SubtaskInfo.prototype, "dateEnd", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(0),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], SubtaskInfo.prototype, "orderNumber", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], SubtaskInfo.prototype, "completed", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => subtasks_1.Subtask),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], SubtaskInfo.prototype, "subtaskId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => subtasks_1.Subtask, { onDelete: "cascade" }),
    __metadata("design:type", subtasks_1.Subtask)
], SubtaskInfo.prototype, "subtask", void 0);
exports.SubtaskInfo = SubtaskInfo = __decorate([
    sequelize_typescript_1.Table
], SubtaskInfo);
