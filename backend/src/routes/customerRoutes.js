import express from "express";
import {
  createCustomer,
  updateCustomer,
  deleteCustomer,
  getCustomers,
} from "../controllers/customerController.js";

const router = express.Router();

router.post("/", createCustomer);
router.get("/", getCustomers);
router.patch("/:id", updateCustomer);
router.delete("/:id", deleteCustomer);

export default router;
