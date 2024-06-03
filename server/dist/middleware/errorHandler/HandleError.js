"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = exports.logger = void 0;
const pino_1 = __importDefault(require("pino"));
const formatter = {
    level(label) {
        return { level: label.toUpperCase() };
    },
};
const fileTransport = pino_1.default.transport({
    target: "pino/file",
    options: { destination: `logs/app.log` },
});
exports.logger = (0, pino_1.default)({
    timestamp: pino_1.default.stdTimeFunctions.isoTime,
    formatters: formatter,
}, fileTransport);
function handleError(err, req, res, next) {
    exports.logger.error(err, "Hello world!");
    res.status(500).json(err || err.message);
    console.log(err);
}
exports.handleError = handleError;
