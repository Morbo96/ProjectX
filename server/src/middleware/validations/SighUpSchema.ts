import { body } from "express-validator";

const schema = [
  body("email")
    .isEmail()
    .withMessage("email must contain a valid email address"),
  body("passwordEncrypted")
    .isLength({ min: 5 })
    .withMessage("password must be at least 5 characters long"),
  body("login")
    .isLength({ min: 5 })
    .withMessage("login must be at least 5 characters long"),
];

export { schema as signUpSchema };
