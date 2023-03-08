import express from "express";
import {
  login,
  register,
  logout,
  placeInitOrder,
} from "../controllers/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/logout", logout);
router.post("/placeInitOrder", placeInitOrder);

export default router;
