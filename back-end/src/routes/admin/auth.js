const express = require("express");
const router = express.Router();
const { signup, signin } = require("../../controllers/admin/auth");
const {
  validateSignupRequest,
  validateSigninRequest,
} = require("../../validators/auth");
const { isRequestValidated } = require("../../common-middleware/index");

router.post("/admin/signup", validateSignupRequest, isRequestValidated, signup);
router.post("/admin/signin", validateSigninRequest, isRequestValidated, signin);

module.exports = router;
