import express, { NextFunction, Request, Response } from "express";
import { Router } from "express";
import { accessTokenVerify } from "../middleware/AccessTokenVerify";
import { signUpSchema } from "../middleware/validations/SighUpSchema";
import { validateRequest } from "../middleware/ValidateRequest";
import { signInSchema } from "../middleware/validations/SignInSchema";
import { AuthController } from "../controllers/AuthController";

const AuthRouter = Router();
const authController = new AuthController();

AuthRouter.use(express.json());

AuthRouter.patch(
  "/auth/signIn",
  signInSchema,
  validateRequest,
  (req: Request, res: Response, next: NextFunction) => {
    authController.signIn(req, res, next);
  }
);

AuthRouter.post(
  "/auth/signUp",
  signUpSchema,
  validateRequest,
  (req: Request, res: Response, next: NextFunction) => {
    authController.signUp(req, res, next);
  }
);

AuthRouter.patch(
  "/auth/logout",
  accessTokenVerify,
  (req: Request, res: Response, next: NextFunction) => {
    authController.logout(req, res, next);
  }
);

AuthRouter.get(
  "/auth/refreshAccessToken",
  (req: Request, res: Response, next: NextFunction) => {
    authController.refreshAccessToken(req, res, next);
  }
);

export default AuthRouter;
