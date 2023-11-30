import { Request, Response, NextFunction } from "express";
import { getUserByToken } from "../utils/UserUtils";

export const findUserByToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let accessToken = req.header("Bearer");

  try {
    req.body.userId = (await getUserByToken(accessToken)).id;
    next();
  } catch (error) {
    next(error);
  }
};
