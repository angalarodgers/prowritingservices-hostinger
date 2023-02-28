import jwt from "jsonwebtoken";
import { db } from "../connect.js";
import moment from "moment/moment.js";

export const writerMessage = (req, res) => {
  const token = req.cookies.accessToken;

  if (!token) return res.status(401).json("Not Logged In");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");
    const q =
      "INSERT INTO messages (`user_id`,`type`,`order_id`,`msg`) VALUES (?)";
    const values = [
      userInfo.id,
      req.body.user,
      req.body.order_id,
      req.body.msg,
    ];
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json(data);
    });
  });
};

export const getOrderMessages = (req, res) => {
  const token = req.cookies.accessToken;
  const order_id = parseInt(req.params.order_id);
  if (!token) return res.status(401).json("Not Logged In");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");
    const q = "SELECT * FROM messages WHERE order_id = ? ";

    db.query(q, [order_id], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json(data);
    });
  });
};

export const getMessages = (req, res) => {
  const token = req.cookies.accessToken;
  const order_id = parseInt(req.params.order_id);
  if (!token) return res.status(401).json("Not Logged In");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");
    const q = "SELECT * FROM messages WHERE order_id = ? ORDER BY _id DESC ";

    db.query(q, [order_id], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json(data);
    });
  });
};

export const clientMessage = (req, res) => {
  const token = req.cookies.accessToken;

  if (!token) return res.status(401).json("Not Logged In");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");
    const q =
      "INSERT INTO messages (`user_id`,`type`,`order_id`,`msg`) VALUES (?)";
    const values = [
      userInfo.id,
      req.body.user,
      req.body.order_id,
      req.body.msg,
    ];
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json(data);
    });
  });
};

export const getAdminMessages = (req, res) => {
  const token = req.cookies.accessToken;
  const order_id = parseInt(req.params.order_id);
  if (!token) return res.status(401).json("Not Logged In");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");
    const q = "SELECT * FROM messages WHERE type = ? ORDER BY _id DESC ";

    db.query(q, ["admin"], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json(data);
    });
  });
};

export const writerMessageToSupport = (req, res) => {
  const token = req.cookies.accessToken;

  if (!token) return res.status(401).json("Not Logged In");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");
    const q =
      "INSERT INTO msg_to_support (`subject`,`msg`,`senderId`) VALUES (?)";
    const values = [req.body.subject, req.body.msg, userInfo.id];
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json(data);
    });
  });
};

export const getMessagesToSupport = (req, res) => {
  const token = req.cookies.accessToken;
  const order_id = parseInt(req.params.order_id);
  if (!token) return res.status(401).json("Not Logged In");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");
    const q =
      "SELECT * FROM msg_to_support WHERE senderId = ? ORDER BY id DESC ";

    db.query(q, [userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json(data);
    });
  });
};
