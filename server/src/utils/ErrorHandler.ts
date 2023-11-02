import pino from "pino";
import { Response } from "express";

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

export function handleError(err: unknown, res?: Response) {
  const receivedError = err as Error;
  logger.error(err, "Hello world!");
  if (res != undefined) {
    res.status(500).json(receivedError.message);
  }
}
