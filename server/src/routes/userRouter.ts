import express,{Request,Response} from "express";
import { Router } from "express";
import { userService } from "../model/services/implementations/UserService";
import { User } from "../model/domain/entities/users";
import { CRUDController } from "../controllers/CRUDController";

const UserRoute = Router();
const userController = new CRUDController(userService)

UserRoute.use(express.json())
// UserRoute.get("/users", userController.getAll);//вот так не работает
// UserRoute.get("/users", userController.getAll(req,res));//вот так тоже
UserRoute.get("/users", getAllItems);

export default UserRoute;


function getAllItems(req:Request, res:Response){
    userController.getAll(req,res)
}


// // saveUser(data):{
//     verify(data)
//     User.create
//      req.json
//      catch(error){
//      блять ошибка
//}
//
// }
// // saveTask(data):{
//     schedule(task)
//     feedPet(task)
//     Task.create
//      req.json
//      catch(error){
//      блять ошибка
//}
//
//
//
//