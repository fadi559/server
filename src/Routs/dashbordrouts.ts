import { Router } from "express";
import { getDashboardMetrics } from "../controllers/dashboredcontrollers";

const router = Router();

router.get("/", getDashboardMetrics);

export default router;