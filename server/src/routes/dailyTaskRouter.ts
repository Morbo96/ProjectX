import express from "express";
import { Router } from "express";
import { dailyTaskController } from "../controllers/dailyTaskController";

const DailyTaskRoute = Router();

DailyTaskRoute.use(express.json())
DailyTaskRoute.post("/dailyTasks", dailyTaskController.createDailyTask);
DailyTaskRoute.get("/dailyTasks", dailyTaskController.getAll);
DailyTaskRoute.get("/dailyTasks/id", dailyTaskController.getOneByID);

export default DailyTaskRoute;
