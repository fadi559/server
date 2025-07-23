"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ExpanceController_1 = require("../controllers/ExpanceController");
const router = (0, express_1.Router)();
router.get("/", ExpanceController_1.getExpensesByCategory);
exports.default = router;
