import express, { Request, Response } from "express";
import { Router } from "express";
import { userPetService } from "../model/services/implementations/usersServices/UserPetService";
import { CRUDController } from "../controllers/CRUDController";
import { findUserByToken } from "../middleware/FindUserByToken";
import { userCheck } from "../middleware/UserCheck";

const UserPetRoute = Router();
const crudController = new CRUDController(userPetService);

UserPetRoute.use(express.json());

UserPetRoute.get("/userPets/:id", (req: Request, res: Response) => {
  crudController.getByID(req, res);
});

UserPetRoute.get("/userPets", (req: Request, res: Response) => {
  crudController.getAll(req, res);
});

UserPetRoute.post(
  "/userPets",
  userCheck,
  findUserByToken,
  (req: Request, res: Response) => {
    crudController.create(req, res);
  }
);

UserPetRoute.patch("/userPets/:id", (req: Request, res: Response) => {
  crudController.update(req, res);
});

UserPetRoute.delete("/userPets", (req: Request, res: Response) => {
  crudController.delete(req, res);
});

export default UserPetRoute;
