"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInSchema = void 0;
const express_validator_1 = require("express-validator");
const schema = [
    (0, express_validator_1.body)("passwordEncrypted")
        .isLength({ min: 5 })
        .withMessage("password must be at least 5 characters long"),
    (0, express_validator_1.body)("login")
        .isLength({ min: 5 })
        .withMessage("login must be at least 5 characters long"),
];
exports.signInSchema = schema;
