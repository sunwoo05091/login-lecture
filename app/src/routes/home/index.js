"use strict";

const express = require("express");
const router = express.Router();

const crtl = require("./home.ctrl");

router.get("/", crtl.view.home);
router.get("/login", crtl.view.login);
router.get("/register", crtl.view.register);

router.post("/login", crtl.process.login);
router.post("/register", crtl.process.register);

module.exports = router;