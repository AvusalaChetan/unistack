import {body, validationResult} from "express-validator";
import type {Request, Response, NextFunction} from "express";

export const instituteValidator = [
  body("instituteName")
    .notEmpty()
    .withMessage("Institute name is required")
    .isString()
    .withMessage("Institute name must be a string"),

  body("instituteType")
    .notEmpty()
    .withMessage("Institute type is required")
    .isString()
    .withMessage("Institute type must be a string")
    .isIn(["school", "college", "university", "institute"])
    .withMessage(
      "Institute type must be one of: school, college, university, institute",
    ),

  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isString()
    .withMessage("Name must be a string"),

  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email must be valid"),

  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({min: 6})
    .withMessage("Password must be at least 6 characters"),
];

export const signupValidator = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isString()
    .withMessage("Name must be a string"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email must be valid")
    .normalizeEmail(),

  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({min: 6})
    .withMessage("Password must be at least 6 characters"),

  body("instituteCode")
    .trim()
    .notEmpty()
    .withMessage("Institute code is required")
    .isString()
    .withMessage("Institute code must be a string"),

  body("role").optional().isString().withMessage("Role must be a string"),
];

// Middleware to check validation results for signup (no file required)
export const validateSignupRequest = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  }

  next();
};

// Middleware to check validation results and file
export const validateInstituteRequest = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  }

  if (!req.file) {
    return res.status(400).json({error: "Institute logo file is required"});
  }

  next();
};
