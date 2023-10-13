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
exports.Folder = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const users_1 = require("../user/users");
const goals_1 = require("./goals");
const folderInfos_1 = require("./folderInfos");
let Folder = class Folder extends sequelize_typescript_1.Model {
};
exports.Folder = Folder;
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Folder.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], Folder.prototype, "isSystem", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => users_1.User),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Folder.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => users_1.User),
    __metadata("design:type", users_1.User)
], Folder.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => goals_1.Goal),
    __metadata("design:type", Array)
], Folder.prototype, "goals", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => folderInfos_1.FolderInfo),
    __metadata("design:type", folderInfos_1.FolderInfo)
], Folder.prototype, "folderInfo", void 0);
exports.Folder = Folder = __decorate([
    sequelize_typescript_1.Table
], Folder);
