import express, { Request, Response } from "express";
import { Router } from "express";
import { userCheck } from "../middleware/UserCheck";
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
  (req: Request, res: Response) => {
    authController.signIn(req, res);
  }
);

AuthRouter.post(
  "/auth/signUp",
  signUpSchema,
  validateRequest,
  (req: Request, res: Response) => {
    authController.signUp(req, res);
  }
);

AuthRouter.patch("/auth/logout", userCheck, (req: Request, res: Response) => {
  authController.logout(req, res);
});

AuthRouter.get("/auth/refreshAccessToken", (req: Request, res: Response) => {
  authController.refreshAccessToken(req, res);
});

export default AuthRouter;
