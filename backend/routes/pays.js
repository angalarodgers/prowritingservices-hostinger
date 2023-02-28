import express from "express";
import { makePay, getPay, getBalance, getAllPay } from "../controllers/pay.js";

const router = express.Router();

router.post("/makepay", makePay);
router.get("/getpay", getPay);
router.get("/getbalance", getBalance);
router.get("/getAllpay", getAllPay);

export default router;
