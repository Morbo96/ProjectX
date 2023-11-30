import jwt, { JsonWebTokenError } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const accessTokenVerify = async (
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
    next();
  } catch (error) {
    next(error);
  }
};
