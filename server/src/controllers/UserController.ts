import { Request, Response } from "express";
import { userService } from "../model/services/implementations/usersServices/UserService";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import bcrypt from "bcrypt";

export class UserController {
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
          const secret: Secret = process.env.JWT_ACCSESS_SECRET;

          const token = await jwt.sign(
            {
              login: user.login,
              password: user.passwordEncrypted,
              name: user.name,
            },
            secret,
            { expiresIn: "1 days" }
          );

          res.status(200).json(token);
        } else {
          res.status(500).json("Login or password incorrect");
          return;
        }
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async signUp(req: Request, res: Response) {
    try {
      if (validateEmail(req.body.email) == null) {
        res.status(500).json("input correct email");
        return;
      }
      if (validateLogin(req.body.login) == null) {
        res.status(500).json("input login");
        return;
      }
      if (
        req.body.passwordEncrypted == null ||
        req.body.passwordEncrypted == ""
      ) {
        res.status(500).json("input password");
        return;
      }

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

  async getIdByToken(token: string) {
    const payload = jwt.decode(token) as JwtPayload;
    const userLogin = payload.login;
    const foundUser = await userService.getByLogin(userLogin);
    return foundUser.id;
  }
}

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validateLogin = (login: string) => {
  return String(login)
    .toLowerCase()
    .match(/^(?=.*[A-Za-z0-9]$)[A-Za-z][A-Za-z\d.-]{3,19}$/);
};
