"use strict";

const express = require("express");
const router = express.Router(); 

const ctrl = require("./home.ctrl");

router.get("/", ctrl.RIndex);
router.get("/login", ctrl.RLogin);

module.exports = router;