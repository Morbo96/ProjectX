import express from "express";
import { Router } from "express";
import { userCRUDControllerHelper} from "./helpers/UserCRUDControllerHelper";
import { userService } from "../model/services/implementations/UserService";
import { User } from "../model/domain/entities/users";
import { CRUDController } from "../controllers/CRUDController";

const UserRoute = Router();
//const userController = new CRUDController(userService)


UserRoute.use(express.json())
//UserRoute.post("/users", crudController(userService).createUser);
UserRoute.get("/users", userCRUDControllerHelper.getAllItems);

export default UserRoute;



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