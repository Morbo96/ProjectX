import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { userService } from "../model/services/implementations/usersServices/UserService";
import { generateAccessToken, getUSerByToken } from "../utils/UserUtils";

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
    const user = await getUSerByToken(accessToken);

    if (user.refreshToken) {
      await jwt.verify(user.refreshToken, process.env.JWT_REFRESH_SECRET);
      accessToken = await generateAccessToken(user);
    }

    await jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);
    next();
  } catch (error) {
    //res.status(400).json("Invalid Token");
    res.status(400).json(error);
  }
};
