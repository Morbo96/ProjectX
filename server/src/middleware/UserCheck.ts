import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const userCheck = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Bearer");
  if (!token) {
    res.status(500).json("No token found");
    return;
  }

  try {
    await jwt.verify(token, process.env.JWT_ACCSESS_SECRET);
    next();
  } catch (error) {
    res.status(400).json("Invalid Token");
  }
};
