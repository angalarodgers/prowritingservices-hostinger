import jwt from "jsonwebtoken";
import { db } from "../connect.js";
import moment from "moment/moment.js";

export const addOrder = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not Logged In");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");
    const q =
      "INSERT INTO orders (	`client_id`,	`topic`,	`paper_type`,	`discipline`,	`academic_level`,	`paper_instructions`,	`pages`,	`words`,	`spacing`,	`service`,	`style`, `price`, `deadline`) VALUES (?)";
    const values = [
      userInfo.id,
      req.body.topic,
      req.body.paper_type,
      req.body.discipline,
      req.body.academic_level,
      req.body.paper_instructions,
      req.body.pages,
      req.body.words,
      req.body.spacing,
      req.body.services,
      req.body.style,
      req.body.price,
      req.body.deadline,
    ];
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data.insertId);
    });
  });
};
export const getFiles = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not Logged In");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");
    const q = "SELECT * FROM order_files WHERE order_id = ?";
    // const q =
    // "SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId";
    db.query(q, [req.params.order_id], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json(data);
    });
  });
};

export const uploadFile = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not Logged In");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");
    const q =
      "INSERT INTO order_files (`order_id`,`file`,`createdAt`,`client_id`) VALUES (?)";
    const values = [
      req.body.order_id,
      req.body.file,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      userInfo.id,
    ];
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("File Has Been Uploaded!");
    });
  });
};

export const getThisOrder = (req, res) => {
  const token = req.cookies.accessToken;
  const order_id = parseInt(req.params.order_id);
  if (!token) return res.status(401).json("Not Logged In");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");
    const q = "SELECT * FROM orders WHERE id = ? AND client_id = ?";
    // const q =
    // "SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId";
    db.query(q, [order_id, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json(data[0]);
    });
  });
};

export const getClientActiveOrders = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not Logged In");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");
    const q =
      "SELECT * FROM orders WHERE price > 0 AND status= 'bidding' AND client_id = ?";
    // const q =
    // "SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId";
    db.query(q, [userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json(data);
    });
  });
};

export const getClientNewOrders = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not Logged In");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");
    const q =
      "SELECT * FROM orders WHERE price > 0 AND status = 'creating' AND client_id = ?";
    // const q =
    // "SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId";
    db.query(q, [userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json(data);
    });
  });
};

export const assignAccount = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not Logged In");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");
    const query = "SELECT balance FROM client WHERE client_id = ? ";

    const val = [userInfo.id];
    db.query(query, [val], (er, dt) => {
      if (er) return res.status(200).json(er);

      if (dt[0].balance >= req.body.price) {
        const q =
          "UPDATE orders SET `status` = ? WHERE client_id = ? AND id = ?";

        db.query(
          q,
          ["bidding", userInfo.id, req.body.order_id],
          (err, data) => {
            if (err) return res.status(500).json(err);
            const updateBal = dt[0].balance - req.body.price;

            const updateQuery =
              "UPDATE client SET `balance` = ? WHERE client_id = ?";

            const updateValues = [updateBal];
            db.query(updateQuery, [updateValues, userInfo.id], (e, d) => {
              if (e) return res.status(500).json(e);
              return res.status(200).json(data);
            });
          }
        );
      } else {
        return res
          .status(300)
          .json("You Have Insufficient Funds in your account!");
      }
    });
  });
};

export const getOrderFiles = (req, res) => {
  const token = req.cookies.accessToken;
  const order_id = parseInt(req.params.order_id);
  if (!token) return res.status(401).json("Not Logged In");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");
    const q = "SELECT * FROM order_files WHERE order_id = ? AND client_id = 0 ";
    // const q =
    // "SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId";
    db.query(q, [order_id], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json(data);
    });
  });
};

export const getOrderWriterFiles = (req, res) => {
  const token = req.cookies.accessToken;
  const order_id = parseInt(req.params.order_id);
  if (!token) return res.status(401).json("Not Logged In");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");
    const q = "SELECT * FROM order_files WHERE order_id = ? AND client_id = ? ";
    // const q =
    // "SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId";
    db.query(q, [order_id, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json(data);
    });
  });
};

export const getClientActiveOrdersAssigned = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not Logged In");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");
    const q =
      "SELECT * FROM orders WHERE price > 0 AND status= 'inprogress' AND assigned_writer = ? AND writer_action != ? ";
    // const q =
    // "SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId";
    db.query(q, [userInfo.id, "Declined"], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json(data);
    });
  });
};

export const getAdminActiveOrders = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not Logged In");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");
    const q = "SELECT * FROM orders WHERE price > 0 AND status= 'inprogress'";
    // const q =
    // "SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId";
    db.query(q, (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json(data);
    });
  });
};

export const assignWriter = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not Logged In");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");
    const q =
      "UPDATE orders SET status='inprogress', assigned_writer = ? WHERE id = ? ";
    // const q =
    // "SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId";
    db.query(q, [req.body.writer.id, req.body.orderId], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Writer Assigned Successfully");
    });
  });
};

export const getWriterOrder = (req, res) => {
  const token = req.cookies.accessToken;
  const order_id = parseInt(req.params.order_id);
  if (!token) return res.status(401).json("Not Logged In");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");
    const q = "SELECT * FROM orders WHERE id = ? AND writer_action != ?";
    // const q =
    // "SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId";
    db.query(q, [order_id, "Declined"], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json(data[0]);
    });
  });
};

export const writerAcceptOrder = (req, res) => {
  const token = req.cookies.accessToken;

  if (!token) return res.status(401).json("Not Logged In");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");
    const q =
      "UPDATE orders SET writer_action= ? WHERE id = ? AND assigned_writer = ? ";

    db.query(q, ["Accepted", req.body.orderId, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Writer Accepted Successfully");
    });
  });
};

export const writerDeclineOrder = (req, res) => {
  const token = req.cookies.accessToken;

  if (!token) return res.status(401).json("Not Logged In");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");
    const q =
      "UPDATE orders SET writer_action= ? WHERE id = ? AND assigned_writer = ? ";

    db.query(q, ["Declined", req.body.orderId, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Writer Declined Successfully");
    });
  });
};

export const getWriterActiveOrders = (req, res) => {
  const token = req.cookies.accessToken;
  const order_id = parseInt(req.params.order_id);
  if (!token) return res.status(401).json("Not Logged In");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");
    const q =
      "SELECT * FROM orders WHERE assigned_writer = ? AND writer_action = ? AND status = ?";
    // const q =
    // "SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId";
    db.query(q, [userInfo.id, "Accepted", "inprogress"], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json(data);
    });
  });
};

export const getWriterCompletedOrders = (req, res) => {
  const token = req.cookies.accessToken;
  const order_id = parseInt(req.params.order_id);
  if (!token) return res.status(401).json("Not Logged In");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");
    const q =
      "SELECT * FROM orders WHERE assigned_writer = ? AND writer_action = ? AND status = ?";
    // const q =
    // "SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId";
    db.query(q, [userInfo.id, "Accepted", "Completed"], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json(data);
    });
  });
};

export const getWriterCanceledOrders = (req, res) => {
  const token = req.cookies.accessToken;
  const order_id = parseInt(req.params.order_id);
  if (!token) return res.status(401).json("Not Logged In");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");
    const q =
      "SELECT * FROM orders WHERE assigned_writer = ? AND writer_action = ? AND status = ?";
    // const q =
    // "SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId";
    db.query(q, [userInfo.id, "Accepted", "Canceled"], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json(data);
    });
  });
};

export const uploadWriterFile = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not Logged In");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");
    const q =
      "INSERT INTO order_files (`order_id`,`file`,`createdAt`,`writer_id`,`type`) VALUES (?)";
    const values = [
      req.body.order_id,
      req.body.file,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      userInfo.id,
      req.body.type,
    ];
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("File Has Been Uploaded!");
    });
  });
};

export const markAsCompleted = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not Logged In");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");
    const q =
      "INSERT INTO writer_orders (`writer_id`,`order_id`,`price`,`order_status`,`payment_status`) VALUES (?)";
    const values = [
      userInfo.id,
      req.body.orderId,
      req.body.price,
      "Completed",
      "Not Paid",
    ];
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      const qu = "UPDATE orders SET status = ? WHERE id = ?";
      db.query(qu, ["Completed", req.body.orderId], (er, dt) => {
        if (er) return res.status(404).json(er);
        return res.status(200).json("Order Completed Successfully!");
      });
    });
  });
};

export const initOrder = (req, res) => {
  const q =
    "INSERT INTO orders (`paper_type`,`academic_level`,`deadline`,`price`,`pages`,`words`) VALUES (?)";
  const values = [
    req.body.paper_type,
    req.body.academic_level,
    req.body.dt,
    req.body.price,
    req.body.pages,
    req.body.words,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Order Submited Successfully!");
  });
};

export const getClientCompletedOrders = (req, res) => {
  const token = req.cookies.accessToken;
  const order_id = parseInt(req.params.order_id);
  if (!token) return res.status(401).json("Not Logged In");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");
    const q =
      "SELECT * FROM orders WHERE client_id = ? AND writer_action = ? AND status = ?";

    db.query(q, [userInfo.id, "Accepted", "Completed"], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json(data);
    });
  });
};

export const getClientCanceledOrders = (req, res) => {
  const token = req.cookies.accessToken;
  const order_id = parseInt(req.params.order_id);
  if (!token) return res.status(401).json("Not Logged In");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");
    const q =
      "SELECT * FROM orders WHERE client_id = ? AND writer_action = ? AND status = ?";
    // const q =
    // "SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId";
    db.query(q, [userInfo.id, "Accepted", "Canceled"], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json(data);
    });
  });
};

export const getAdminNewOrders = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not Logged In");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");
    const q = "SELECT * FROM orders WHERE price > 0 AND status= 'bidding'";
    // const q =
    // "SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId";
    db.query(q, (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json(data);
    });
  });
};

export const getAdminCompletedOrders = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not Logged In");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");
    const q = "SELECT * FROM orders WHERE price > 0 AND status= 'Completed'";

    db.query(q, (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json(data);
    });
  });
};

export const getAdminCanceledOrders = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not Logged In");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");
    const q = "SELECT * FROM orders WHERE price > 0 AND status= 'Canceled'";

    db.query(q, (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json(data);
    });
  });
};
