"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCheck = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const UserUtils_1 = require("../utils/UserUtils");
const userCheck = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let accessToken = req.header("Bearer");
    if (!accessToken) {
        res.status(500).json("No token found");
        return;
    }
    try {
        yield jsonwebtoken_1.default.verify(accessToken, process.env.JWT_ACCESS_SECRET);
        req.body.id = (yield (0, UserUtils_1.getUserByToken)(accessToken)).id;
        next();
    }
    catch (error) {
        const err = error;
        if (err.message == "jwt expired") {
            const user = yield (0, UserUtils_1.getUserByToken)(accessToken);
            if (user.refreshToken) {
                yield jsonwebtoken_1.default.verify(user.refreshToken, process.env.JWT_REFRESH_SECRET);
                accessToken = yield (0, UserUtils_1.generateAccessToken)(user);
                req.body.id = user.id;
            }
            next();
        }
        else {
            res.status(400).json(err.message);
        }
    }
});
exports.userCheck = userCheck;
