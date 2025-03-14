import express from "express";
import {
  createCustomer,
  updateCustomer,
  deleteCustomer,
  getCustomers,
} from "../controllers/customerController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createCustomer);
router.get("/", authMiddleware, getCustomers);
router.patch("/:id", authMiddleware, updateCustomer);
router.delete("/:customerid", authMiddleware, deleteCustomer);

export default router;
