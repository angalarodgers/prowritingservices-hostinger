import express from "express";
import {
  writerMessage,
  getOrderMessages,
  getMessages,
  clientMessage,
  getAdminMessages,
  writerMessageToSupport,
  getMessagesToSupport,
} from "../controllers/message.js";

const router = express.Router();
router.post("/writerMessage", writerMessage);
router.get("/getOrderMessages/:order_id", getOrderMessages);
router.get("/getMessages/:order_id", getMessages);
router.post("/clientMessage", clientMessage);
router.get("/getAdminMessages", getAdminMessages);
router.post("/writerMessageToSupport", writerMessageToSupport);
router.get("/getMessagesToSupport", getMessagesToSupport);

export default router;
