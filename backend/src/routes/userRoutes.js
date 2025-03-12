import express from "express";
import {
  registerUser,
  signinUser,
  signoutUser,
  userAuthorizationStat,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/user-stat", userAuthorizationStat);
router.post("/register", registerUser);
router.post("/signin", signinUser);
router.post("/signout", signoutUser);

export default router;
