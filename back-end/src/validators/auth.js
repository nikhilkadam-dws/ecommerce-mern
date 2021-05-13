const { check } = require("express-validator");

exports.validateSignupRequest = [
  check("firstName").notEmpty().withMessage("First Name is required"),
  check("lastName").notEmpty().withMessage("Last Name is required"),
  check("email").notEmpty().withMessage("Email is required"),
  check("email").isEmail().withMessage("Please enter valid email"),
  check("password").notEmpty().withMessage("Password is required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

exports.validateSigninRequest = [
  check("email").notEmpty().withMessage("Email is required"),
  check("email").isEmail().withMessage("Please enter valid email"),
  check("password").notEmpty().withMessage("Password is required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Please enter valid password"),
];
