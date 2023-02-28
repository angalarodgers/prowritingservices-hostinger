import express from "express";
import { getWriters } from "../controllers/writer.js";

const router = express.Router();

router.get("/getWriters", getWriters);

export default router;
