import express, { Request, Response } from "express";
import { Router } from "express";
import { userPetService } from "../model/services/implementations/usersServices/UserPetService";
import { CRUDController } from "../controllers/CRUDController";
import { findUserByToken } from "../middleware/FindUserByToken";
import { accessTokenVerify } from "../middleware/AccessTokenVerify";
import { userPetCheck } from "../middleware/UserPetCheck";

const UserPetRoute = Router();
const crudController = new CRUDController(userPetService);

UserPetRoute.use(express.json());

UserPetRoute.get(
  "/userPets/:id",
  accessTokenVerify,
  findUserByToken,
  userPetCheck,
  (req: Request, res: Response) => {
    crudController.getByID(req, res);
  }
);

UserPetRoute.get("/userPets", (req: Request, res: Response) => {
  crudController.getAll(req, res);
});

UserPetRoute.post(
  "/userPets",
  accessTokenVerify,
  findUserByToken,
  (req: Request, res: Response) => {
    crudController.create(req, res);
  }
);

UserPetRoute.patch(
  "/userPets/:id",
  accessTokenVerify,
  findUserByToken,
  userPetCheck,
  (req: Request, res: Response) => {
    crudController.update(req, res);
  }
);

UserPetRoute.delete(
  "/userPets/:id",
  accessTokenVerify,
  findUserByToken,
  userPetCheck,
  (req: Request, res: Response) => {
    crudController.delete(req, res);
  }
);

export default UserPetRoute;
