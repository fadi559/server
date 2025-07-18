"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboredcontrollers_1 = require("../controllers/dashboredcontrollers");
const router = (0, express_1.Router)();
router.get("/", dashboredcontrollers_1.getDashboardMetrics);
exports.default = router;
