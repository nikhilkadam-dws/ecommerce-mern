const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

exports.requireSignin = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);

    req.user = user;
  } else {
    return res.status(400).json({ message: "Authorization required" });
  }
  next();
};

exports.isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.array().length > 0) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }
  next();
};

exports.isAdmin = (req, res, next) => {
  if (req.user.role !== "admin")
    return res.status(400).json({ message: "Access denied" });
  next();
};
