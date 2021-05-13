const express = require("express");
const router = express.Router();
const { signup, signin } = require("../controllers/auth");
const {
  validateSignupRequest,
  validateSigninRequest,
} = require("../validators/auth");
const { isRequestValidated } = require("../common-middleware/index");

router.post("/signup", validateSignupRequest, isRequestValidated, signup);
router.post("/signin", validateSigninRequest, isRequestValidated, signin);

/* router.post("/profile", requireSignin, (req, res) => {
  res.status(200).json({ user: "profile" });
}); */

module.exports = router;
