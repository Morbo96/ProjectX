import express from "express";
import { Router } from "express";
import { userCRUDControllerHelper} from "./helpers/UserCRUDControllerHelper";
import { userService } from "../model/services/implementations/UserService";
import { User } from "../model/domain/entities/users";
import { CRUDController } from "../controllers/CRUDController";

const UserRoute = Router();
//const userController = new CRUDController(userService)// если создавать контроллер здесь и потом использовать в методе, то все не работает


UserRoute.use(express.json())
//UserRoute.get("/users", userController.getAll);// так не работает
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