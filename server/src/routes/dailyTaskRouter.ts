import express,{Request,Response} from "express";
import { Router } from "express";
import { dailyTaskService } from "../model/services/implementations/DailyTaskService";
import { CRUDController } from "../controllers/CRUDController";

const DailyTaskRoute = Router();
const dailyTaskController = new CRUDController(dailyTaskService)

DailyTaskRoute.use(express.json());

DailyTaskRoute.get("/dailytasks/id", getDailyTaskById);
DailyTaskRoute.get("/dailytasks", getAllDailyTasks);
DailyTaskRoute.post("/dailytasks",createDailyTask);
DailyTaskRoute.patch("/dailytasks",updateDailyTask)
DailyTaskRoute.delete("/dailytasks",deleteDailyTask);

export default DailyTaskRoute;


function getAllDailyTasks(req:Request, res:Response){
    dailyTaskController.getAll(req, res)
}

function createDailyTask(req:Request, res:Response){
    dailyTaskController.create(req, res)
}

function getDailyTaskById(req:Request, res:Response){
    dailyTaskController.getByID(req, res)
}

function deleteDailyTask(req:Request, res:Response){
    dailyTaskController.delete(req, res)
}

function updateDailyTask(req:Request, res:Response){
    dailyTaskController.update(req, res)
}
