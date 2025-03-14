import express from "express";
import { createDeal, getDeals } from "../controllers/dealsController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/deals", authMiddleware, getDeals);
router.post("/deals", authMiddleware, createDeal);

export default router;
