import { Request, Response } from "express";
import { userService } from "../model/services/implementations/usersServices/UserService";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import bcrypt from "bcrypt";
import { getUserByToken } from "../utils/UserUtils";
import { User } from "../model/domain/entities/user/users";

export class AuthController {
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
          res.status(200).json({
            accessToken: await this.signAccessToken(user),
            refreshToken: user.refreshToken,
          });
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

      res.status(200).json({
        user: user,
        accessToken: await this.signAccessToken(user),
        refreshToken: user.refreshToken,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async signAccessToken(user: User) {
    const accessToken = await this.generateAccessToken(user);
    const refreshSecret: Secret = process.env.JWT_REFRESH_SECRET;
    const refreshToken = await jwt.sign(
      {
        login: user.login,
      },
      refreshSecret,
      { expiresIn: "730 days" }
    );

    user.refreshToken = refreshToken;
    const changedUser = await userService.update(user.toJSON());
    return accessToken;
  }
  async refreshAccessToken(req: Request, res: Response) {
    try {
      const refreshToken = req.body.refreshToken;
      if (refreshToken) {
        await jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
        const user = await User.findOne({
          where: { refreshToken: refreshToken },
        });
        if (user) {
          var accessToken = await this.generateAccessToken(user);
          res.status(200).json({ accessToken });
        } else {
          res.status(500).json("Old refresh token");
        }
      } else {
        res.status(500).json("No refresh token present");
      }
    } catch (error) {
      const err = error as Error;
      res.status(500).json(err.message);
    }
  }
  async generateAccessToken(user: User) {
    const accessSecret: Secret = process.env.JWT_ACCESS_SECRET;
    const accessToken = await jwt.sign(
      {
        login: user.login,
      },
      accessSecret,
      { expiresIn: "10min" }
    );
    return accessToken;
  }
}
