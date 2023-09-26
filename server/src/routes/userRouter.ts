import express,{Request,Response} from "express";
import { Router } from "express";
import { userService } from "../model/services/implementations/UserService";
import { CRUDController } from "../controllers/CRUDController";

const UserRoute = Router();
const userController = new CRUDController(userService)// переписать в стрелочные функции

UserRoute.use(express.json());

UserRoute.get("/users/:id", getUserById);

UserRoute.get("/users", (req:Request, res:Response)=>{
    userController.getAll(req,res)
});

UserRoute.post("/users",createUser);
UserRoute.patch("/users/:id",updateUser)
UserRoute.delete("/users",deleteUser);

export default UserRoute;


function getAllUsers(req:Request, res:Response){
    userController.getAll(req,res)
}
function createUser(req:Request, res:Response){
    userController.create(req,res)
}
function getUserById(req:Request, res:Response){
    userController.getByID(req,res)
}
function deleteUser(req:Request, res:Response){
    userController.delete(req,res)
}
function updateUser(req:Request, res:Response){
    userController.update(req,res)
}
