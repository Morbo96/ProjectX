import { Request, Response } from "express";
import { userService } from "../model/services/implementations/usersServices/UserService";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import bcrypt from "bcrypt";
import { generateAccessToken, getUserByToken } from "../utils/UserUtils";

export class UserController {
  async getDailyTasks(req: Request, res: Response) {
    try {
      const usersDailyTasks = await userService.getDailyTasks(req.body.id);
      res.json(usersDailyTasks);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getFolders(req: Request, res: Response) {
    try {
      const usersFolders = await userService.getFolders(req.body.id);
      res.json(usersFolders);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getUsersPet(req: Request, res: Response) {
    try {
      const usersPets = await userService.getUsersPets(req.body.id);
      res.json(usersPets);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getByLogin(req: Request, res: Response) {
    try {
      const oneItem = await userService.getByLogin(req.params.login);
      res.json(oneItem);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async logout(req: Request, res: Response) {
    try {
      const accessToken = req.header("Bearer");
      const user = await getUserByToken(accessToken);
      user.refreshToken = null;
      await userService.update(user.toJSON());
      res.status(200).json("Successfull logout");
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async signIn(req: Request, res: Response) {
    try {
      const user = await userService.getByLogin(req.body.login);
      if (user == null) {
        res.status(500).json("Login or password incorrect");
        return;
      } else {
        const userPassword = user.passwordEncrypted;

        let isMatch = await bcrypt.compare(
          req.body.passwordEncrypted,
          userPassword
        );

        if (isMatch) {
          const accessToken = await generateAccessToken(user);
          const refreshSecret: Secret = process.env.JWT_REFRESH_SECRET;
          const refreshToken = await jwt.sign(
            {
              login: user.login,
              password: user.passwordEncrypted,
              name: user.name,
            },
            refreshSecret
          );

          user.refreshToken = refreshToken;
          const changedUser = await userService.update(user.toJSON());
          //console.log(changedUser);

          res
            .status(200)
            .json({ accessToken: accessToken, refreshToken: refreshToken });
        } else {
          res.status(500).json("Login or password incorrect");
          return;
        }
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async signUp(req: Request, res: Response) {
    try {
      req.body.passwordEncrypted = bcrypt.hashSync(
        req.body.passwordEncrypted,
        10
      );

      const user = await userService.create(req.body);

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
