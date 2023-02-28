import express from "express";
import {
  getFiles,
  addOrder,
  uploadFile,
  getThisOrder,
  getClientActiveOrders,
  assignAccount,
  getClientNewOrders,
  getOrderFiles,
  getClientActiveOrdersAssigned,
  getAdminActiveOrders,
  assignWriter,
  getWriterOrder,
  writerAcceptOrder,
  writerDeclineOrder,
  getWriterActiveOrders,
  getWriterCanceledOrders,
  getWriterCompletedOrders,
  uploadWriterFile,
  getOrderWriterFiles,
  markAsCompleted,
  initOrder,
  getClientCompletedOrders,
  getClientCanceledOrders,
  getAdminNewOrders,
  getAdminCompletedOrders,
  getAdminCanceledOrders,
} from "../controllers/order.js";

const router = express.Router();

router.post("/", addOrder);
router.post("/uploadFile", uploadFile);
router.post("/uploadWriterFile", uploadWriterFile);
router.get("/getFiles/:order_id", getFiles);
router.get("/getThisOrder/:order_id", getThisOrder);
router.get("/getClientActiveOrders", getClientActiveOrders);

router.post("/assignAccount", assignAccount);
router.get("/getClientNewOrders", getClientNewOrders);
router.get("/getOrderFiles/:order_id", getOrderFiles);
router.get("/getOrderWriterFiles/:order_id", getOrderWriterFiles);
router.get("/getClientActiveOrdersAssigned", getClientActiveOrdersAssigned);
router.get("/getAdminActiveOrders", getAdminActiveOrders);
router.post("/assignWriter", assignWriter);
router.get("/getWriterOrder/:order_id", getWriterOrder);
router.post("/writerAcceptOrder", writerAcceptOrder);
router.post("/writerDeclineOrder", writerDeclineOrder);
router.get("/getWriterActiveOrders", getWriterActiveOrders);
router.get("/getWriterCanceledOrders", getWriterCanceledOrders);
router.get("/getWriterCompletedOrders", getWriterCompletedOrders);
router.post("/markAsCompleted", markAsCompleted);
router.post("/init", initOrder);
router.get("/getClientCompletedOrders", getClientCompletedOrders);
router.get("/getClientCanceledOrders", getClientCanceledOrders);
router.get("/getAdminNewOrders", getAdminNewOrders);
router.get("/getAdminCompletedOrders", getAdminCompletedOrders);
router.get("/getAdminCanceledOrders", getAdminCanceledOrders);

export default router;
