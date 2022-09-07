"use strict";

const express = require("express");
const router = express.Router();

const crtl = require("./home.ctrl");

router.get("/", crtl.view.home);
router.get("/login", crtl.view.login);
router.post("/login", crtl.process.login);
router.get("/register", crtl.view.register)

module.exports = router;