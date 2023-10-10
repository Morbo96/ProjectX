import express,{Request,Response} from "express";
import { Router } from "express";
import { CRUDController } from "../controllers/CRUDController";
import { subtaskService } from "../model/services/implementations/tasksServices/SubtaskService";

const SubtaskRoute = Router();
const crudController = new CRUDController(subtaskService)

SubtaskRoute.use(express.json());

SubtaskRoute.get("/subtasks/:id", (req:Request, res:Response)=>{
    crudController.getByID(req,res)
});
SubtaskRoute.get("/subtasks", (req:Request, res:Response)=>{
    crudController.getAll(req,res)
});
SubtaskRoute.post("/subtasks",(req:Request, res:Response)=>{
    crudController.create(req,res)
});
SubtaskRoute.patch("/subtasks/:id",(req:Request, res:Response)=>{
    crudController.update(req,res)
})
SubtaskRoute.delete("/subtasks",(req:Request, res:Response)=>{
    crudController.delete(req,res)
});

export default SubtaskRoute;