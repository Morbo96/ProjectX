import dotenv from "dotenv";
import { Sequelize } from "sequelize-typescript";
import { User } from "./entities/user/users";
import { DailyTask } from "./entities/dailyTasks/dailyTasks";
import { DailySubtask } from "./entities/dailyTasks/dailySubtasks";
import { DailySubtaskNotification } from "./entities/dailyTasks/dailySubtaskNotifications";
import { DailySubtaskNotificationTime } from "./entities/dailyTasks/dailySubtaskNotificationTime";
import { UserBank } from "./entities/user/usersBanks";
import { UserPet } from "./entities/user/usersPets";
import { DailyTaskHelper } from "./entities/dailyTasks/dailyTaskHelper";
import { Attachment } from "./entities/tasks/attachments";
import { FolderInfo } from "./entities/tasks/folderInfos";
import { Folder } from "./entities/tasks/folders";
import { Goal } from "./entities/tasks/goals";
import { SubtaskInfo } from "./entities/tasks/subtaskInfos";
import { Subtask } from "./entities/tasks/subtasks";
import { TaskHelper } from "./entities/tasks/taskHelper";
import { Task } from "./entities/tasks/tasks";

dotenv.config();

const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  models: [User, DailyTask, DailySubtask,DailyTaskHelper,
          DailySubtaskNotification,DailySubtaskNotificationTime,
          UserBank,UserPet,Attachment,FolderInfo,Folder,Goal,
          SubtaskInfo,Subtask,TaskHelper,Task],
  logging: false,
});

export default sequelize;
