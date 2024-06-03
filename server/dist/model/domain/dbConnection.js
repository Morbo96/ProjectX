"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const sequelize_typescript_1 = require("sequelize-typescript");
const users_1 = require("./entities/user/users");
const dailyTasks_1 = require("./entities/dailyTasks/dailyTasks");
const dailySubtasks_1 = require("./entities/dailyTasks/dailySubtasks");
const dailySubtaskNotifications_1 = require("./entities/dailyTasks/dailySubtaskNotifications");
const dailySubtaskNotificationTime_1 = require("./entities/dailyTasks/dailySubtaskNotificationTime");
const usersBanks_1 = require("./entities/user/usersBanks");
const usersPets_1 = require("./entities/user/usersPets");
const dailyTaskHelper_1 = require("./entities/dailyTasks/dailyTaskHelper");
const attachments_1 = require("./entities/tasks/attachments");
const folders_1 = require("./entities/tasks/folders");
const goals_1 = require("./entities/tasks/goals");
const subtaskInfos_1 = require("./entities/tasks/subtaskInfos");
const subtasks_1 = require("./entities/tasks/subtasks");
const taskHelper_1 = require("./entities/tasks/taskHelper");
const tasks_1 = require("./entities/tasks/tasks");
const folderParent_1 = require("./entities/tasks/folderParent");
const folderChild_1 = require("./entities/tasks/folderChild");
const Food_1 = require("./entities/gamification/Food");
const UserFood_1 = require("./entities/gamification/UserFood");
dotenv_1.default.config();
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    models: [
        users_1.User,
        dailyTasks_1.DailyTask,
        dailySubtasks_1.DailySubtask,
        dailyTaskHelper_1.DailyTaskHelper,
        dailySubtaskNotifications_1.DailySubtaskNotification,
        dailySubtaskNotificationTime_1.DailySubtaskNotificationTime,
        usersBanks_1.UserBank,
        usersPets_1.UserPet,
        UserFood_1.UserFood,
        attachments_1.Attachment,
        folderParent_1.FolderParent,
        folderChild_1.FolderChild,
        folders_1.Folder,
        Food_1.Food,
        goals_1.Goal,
        subtaskInfos_1.SubtaskInfo,
        subtasks_1.Subtask,
        taskHelper_1.TaskHelper,
        tasks_1.Task,
    ],
    logging: false,
});
exports.default = sequelize;
