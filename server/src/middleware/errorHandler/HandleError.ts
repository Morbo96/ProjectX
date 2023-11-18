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
const logger = pino(
  {
    timestamp: pino.stdTimeFunctions.isoTime,
    formatters: formatter,
  },

  fileTransport
);

export function handleError(
  err: unknown,
  req?: Request,
  res?: Response,
  next?: NextFunction
) {
  const receivedError = err as Error;
  logger.error(err, "Hello world!");
  if (res != undefined) {
    res.status(500).json(receivedError.message);
    next();
  }
}
