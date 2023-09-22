import { Request, Response } from "express";
import { userService } from "../../model/services/implementations/UserService";
import { CRUDController } from "../../controllers/CRUDController";

class UserCRUDControllerHelper{
    getAllItems(req:Request, res:Response){
        const userController = new CRUDController(userService)
        userController.getAll(req,res)
    }
}
export const userCRUDControllerHelper = new UserCRUDControllerHelper()