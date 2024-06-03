import express, { NextFunction, Request, Response } from "express";
import { Router } from "express";
import { userPetService } from "../model/services/implementations/usersServices/UserPetService";
import { CRUDController } from "../controllers/CRUDController";
import { findUserByToken } from "../middleware/FindUserByToken";
import { accessTokenVerify } from "../middleware/AccessTokenVerify";
import { userPetCheck } from "../middleware/UserPetCheck";
import { calculateCurrentHunger } from "../middleware/CalculateHunger";
import { UserPetController } from "../controllers/UserPetController";

const UserPetRoute = Router();
const crudController = new CRUDController(userPetService);
const userPetController = new UserPetController();

UserPetRoute.use(express.json());

UserPetRoute.patch(
  "/userPets/:id/feed",
  accessTokenVerify,
  findUserByToken,
  userPetCheck,
  calculateCurrentHunger,
  (req: Request, res: Response, next: NextFunction) => {
    userPetController.feed(req, res, next);
  }
);

UserPetRoute.get(
  "/userPets/:id",
  accessTokenVerify,
  findUserByToken,
  userPetCheck,
  calculateCurrentHunger,
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
