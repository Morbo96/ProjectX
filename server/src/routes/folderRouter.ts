import express,{Request,Response} from "express";
import { Router } from "express";
import { CRUDController } from "../controllers/CRUDController";
import { folderService } from "../model/services/implementations/tasksServices/FolderService";


const FolderRoute = Router();
const crudController = new CRUDController(folderService)

FolderRoute.use(express.json());

FolderRoute.get("/folders/:id", (req:Request, res:Response)=>{
    crudController.getByID(req,res)
});

FolderRoute.get("/folders", (req:Request, res:Response)=>{
    crudController.getAll(req,res)
});

FolderRoute.post("/folders", (req:Request, res:Response)=>{
    crudController.create(req,res)
});

FolderRoute.patch("/folders/:id", (req:Request, res:Response)=>{
    crudController.update(req,res)
})

FolderRoute.delete("/folders", (req:Request, res:Response)=>{
    crudController.delete(req,res)
});




export default FolderRoute;


