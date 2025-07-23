import { Router } from "express";
import { getExpensesByCategory } from "../controllers/ExpanceController";

const router = Router();

router.get("/", getExpensesByCategory);

export default router;