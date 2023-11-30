import express, { NextFunction, Request, Response } from "express";
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
  (req: Request, res: Response, next: NextFunction) => {
    crudController.getByID(req, res, next);
  }
);

UserPetRoute.get(
  "/userPets",
  (req: Request, res: Response, next: NextFunction) => {
    crudController.getAll(req, res, next);
  }
);

UserPetRoute.post(
  "/userPets",
  accessTokenVerify,
  findUserByToken,
  (req: Request, res: Response, next: NextFunction) => {
    crudController.create(req, res, next);
  }
);

UserPetRoute.patch(
  "/userPets/:id",
  accessTokenVerify,
  findUserByToken,
  userPetCheck,
  (req: Request, res: Response, next: NextFunction) => {
    crudController.update(req, res, next);
  }
);

UserPetRoute.delete(
  "/userPets/:id",
  accessTokenVerify,
  findUserByToken,
  userPetCheck,
  (req: Request, res: Response, next: NextFunction) => {
    crudController.delete(req, res, next);
  }
);

export default UserPetRoute;
