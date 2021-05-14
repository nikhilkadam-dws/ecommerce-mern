const express = require("express");
const { requireSignin, isAdmin } = require("../common-middleware");
const router = express.Router();
const { createCategory, getCategories } = require("../controllers/category");

router.post("/category/create", requireSignin, isAdmin, createCategory);
router.get("/category/getall", getCategories);

module.exports = router;
