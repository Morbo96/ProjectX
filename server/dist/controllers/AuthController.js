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
exports.AuthController = void 0;
const UserService_1 = require("../model/services/implementations/usersServices/UserService");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const UserUtils_1 = require("../utils/UserUtils");
const users_1 = require("../model/domain/entities/user/users");
class AuthController {
    logout(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const accessToken = req.header("Bearer");
                const user = yield (0, UserUtils_1.getUserByToken)(accessToken);
                user.refreshToken = null;
                yield UserService_1.userService.update(user.toJSON());
                res.status(200).json("Successfull logout");
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    signIn(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield UserService_1.userService.getByLogin(req.body.login);
                if (user == null) {
                    res.status(500).json("Login or password incorrect");
                    return;
                }
                else {
                    const userPassword = user.passwordEncrypted;
                    let isMatch = yield bcrypt_1.default.compare(req.body.passwordEncrypted, userPassword);
                    if (isMatch) {
                        res.status(200).json({
                            accessToken: yield this.signAccessToken(user),
                            refreshToken: user.refreshToken,
                        });
                    }
                    else {
                        res.status(500).json("Login or password incorrect");
                        return;
                    }
                }
            }
            catch (error) {
                console.log(error);
                res.status(500).json(error);
            }
        });
    }
    signUp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                req.body.passwordEncrypted = bcrypt_1.default.hashSync(req.body.passwordEncrypted, 10);
                const user = yield UserService_1.userService.create(req.body);
                res.status(200).json({
                    user: user,
                    accessToken: yield this.signAccessToken(user),
                    refreshToken: user.refreshToken,
                });
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    signAccessToken(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const accessToken = yield this.generateAccessToken(user);
            const refreshSecret = process.env.JWT_REFRESH_SECRET;
            const refreshToken = yield jsonwebtoken_1.default.sign({
                login: user.login,
            }, refreshSecret, { expiresIn: "730 days" });
            user.refreshToken = refreshToken;
            const changedUser = yield UserService_1.userService.update(user.toJSON());
            return accessToken;
        });
    }
    refreshAccessToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const refreshToken = req.body.refreshToken;
                if (refreshToken) {
                    yield jsonwebtoken_1.default.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
                    const user = yield users_1.User.findOne({
                        where: { refreshToken: refreshToken },
                    });
                    if (user) {
                        var accessToken = yield this.generateAccessToken(user);
                        res.status(200).json({ accessToken });
                    }
                    else {
                        res.status(500).json("Old refresh token");
                    }
                }
                else {
                    res.status(500).json("No refresh token present");
                }
            }
            catch (error) {
                const err = error;
                res.status(500).json(err.message);
            }
        });
    }
    generateAccessToken(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const accessSecret = process.env.JWT_ACCESS_SECRET;
            const accessToken = yield jsonwebtoken_1.default.sign({
                login: user.login,
            }, accessSecret, { expiresIn: "10min" });
            return accessToken;
        });
    }
}
exports.AuthController = AuthController;
