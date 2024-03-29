import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";
import * as dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 8880;
const app = express();

import authRoutes from "./routes/auth.js";
import orderRoutes from "./routes/orders.js";
import payRoutes from "./routes/pays.js";
import writerRoutes from "./routes/writers.js";
import messageRoutes from "./routes/messages.js";

//middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

console.log(process.env.CUSTOMER_URL);
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:5175",
      process.env.CUSTOMER_URL,
      process.env.CLIENT_URL,
      process.env.ADMIN_URL,
    ],
  })
);
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../customer/public/order_files");
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    // cb(null, file.fieldname + "-" + uniqueSuffix);
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  return res.status(200).json(file.filename);
});

app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/pay", payRoutes);
app.use("/api/writers", writerRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => {
  console.log("API PWS RUNNING", PORT);
});
