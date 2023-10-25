import jwt, { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { userService } from "../model/services/implementations/usersServices/UserService";
import { generateAccessToken, getUserByToken } from "../utils/UserUtils";

export const userCheck = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let accessToken = req.header("Bearer");

  if (!accessToken) {
    res.status(500).json("No token found");
    return;
  }

  try {
    await jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);

    req.body.id = (await getUserByToken(accessToken)).id;
    next();
  } catch (error) {
    const err = error as JsonWebTokenError;
    if (err.message == "jwt expired") {
      const user = await getUserByToken(accessToken);
      if (user.refreshToken) {
        await jwt.verify(user.refreshToken, process.env.JWT_REFRESH_SECRET);
        accessToken = await generateAccessToken(user);
        req.body.id = user.id;
      }
      next();
    } else {
      res.status(400).json(err.message);
    }
  }
};
