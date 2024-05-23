import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import pino from "pino";

const formatter = {
  level(label: string) {
    return { level: label.toUpperCase() };
  },
};
const fileTransport = pino.transport({
  target: "pino/file",
  options: { destination: `logs/app.log` },
});
export const logger = pino(
  {
    timestamp: pino.stdTimeFunctions.isoTime,
    formatters: formatter,
  },

  fileTransport
);

export function handleError(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  logger.error(err, "Hello world!");
  res.status(500).json(err || err.message);
  console.log(err);
}
