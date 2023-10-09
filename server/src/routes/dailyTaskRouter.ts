import express,{Request,Response} from "express";
import { Router } from "express";
import { dailyTaskService } from "../model/services/implementations/dailyTasksServices/DailyTaskService";
import { CRUDController } from "../controllers/CRUDController";

const DailyTaskRoute = Router();
const crudController = new CRUDController(dailyTaskService)

DailyTaskRoute.use(express.json());

DailyTaskRoute.get("/dailytasks/id", (req:Request, res:Response)=>{
    crudController.getByID(req,res)
});
DailyTaskRoute.get("/dailytasks", (req:Request, res:Response)=>{
    crudController.getAll(req,res)
});
DailyTaskRoute.post("/dailytasks",(req:Request, res:Response)=>{
    crudController.create(req,res)
});
DailyTaskRoute.patch("/dailytasks",(req:Request, res:Response)=>{
    crudController.update(req,res)
})
DailyTaskRoute.delete("/dailytasks",(req:Request, res:Response)=>{
    crudController.delete(req,res)
});

export default DailyTaskRoute;