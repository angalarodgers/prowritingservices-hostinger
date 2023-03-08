import { db } from "../connect.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import Mailgen from "mailgen";
import * as dotenv from "dotenv";
dotenv.config();

export const register = async (req, res) => {
  const userEmail = req.body.email;
  const username = req.body.img;
  let date_ob = new Date();

  let config = {
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  };

  let transporter = nodemailer.createTransport(config);

  let MailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Pro Writing Services",
      link: "https://mailgen.js/",
    },
  });

  let response = {
    body: {
      name: "User",
      intro: "Thank you for registering at Pro Writing Services!",
      table: {
        data: [
          {
            username: username,
            description: "Registration",
            date: date_ob,
          },
        ],
      },
      outro: "Looking forward to do more business",
    },
  };

  let mail = MailGenerator.generate(response);

  let message = {
    from: process.env.EMAIL,
    to: userEmail,
    subject: "Place Order",
    html: mail,
  };
  //CHECK USER IF EXISTS
  const q = "SELECT * FROM users WHERE email = ?";
  const values = [req.body.email];
  db.query(q, [values], async (error, data) => {
    if (error) return res.status(500).json(error);

    if (data.length) return res.status(409).json("user already exist!");
    // CREATE NEW USER
    //HASH PASSWORD

    const saltRounds = 10;

    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users (`email`,`password`,`img`, `type`) VALUES (?)";
    const insertValues = [req.body.email, hash, req.body.img, req.body.user];

    db.query(q, [insertValues], (err, data) => {
      if (err) return res.status(500).json(err);
      console.log(process.env.EMAIL);
      console.log(userEmail);
      console.log();

      transporter
        .sendMail(message)
        .then(() => {
          return res.status(200).json("you should receive an email");
        })
        .catch((error) => {
          return res.status(500).json({ error });
        });
    });
    //STORE USER
  });
};

export const login = async (req, res) => {
  //SELECT USER
  const q = "SELECT * FROM users  WHERE email = ?";
  const values = [req.body.email];
  db.query(q, [values], (error, data) => {
    if (error) return res.status(500).json(error);
    if (data.length === 0) return res.status(404).json("User Not Found!");
    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );
    if (!checkPassword)
      return res.status(400).json("Wrong username or password");
    const token = jwt.sign({ id: data[0].id }, "secretkey");
    const { password, ...others } = data[0];
    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });
};

export const logout = async (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("User has been logged out!");
};

export const placeInitOrder = (req, res) => {
  const q = "SELECT * FROM users WHERE `email` = ? ";
  db.query(q, [req.body.email], (errSelect, dataSelect) => {
    if (errSelect) return res.status(400).json(errSelect);
    if (dataSelect.length > 0) {
      const q =
        "INSERT INTO orders (	`client_id`,	`topic`,	`paper_type`,	`discipline`,	`academic_level`,	`paper_instructions`,	`pages`,	`words`,	`spacing`,	`service`,	`style`, `price`, `deadline`) VALUES (?)";
      const values = [
        dataSelect[0].id,
        req.body.paper_type,
        req.body.academic_level,
        req.body.pages,
        req.body.words,
        req.body.price,
        req.body.deadline,
      ];
      db.query(q, [values], (err, data) => {
        if (err) return res.status(400).json(err);
        return res.status(200).json(data.insertId);
      });
    } else {
      const q = "INSERT INTO users (`email`, `password`, `type`) VALUES (?)";
      const value = [req.body.email, "password", "client"];
      db.query(q, [value], (errInsert, dataInsert) => {
        if (errInsert) return res.status(401).json(errInsert);
        if (dataInsert) {
          const q =
            "INSERT INTO orders (	`client_id`,	`paper_type`,	`academic_level`,	`pages`,	`words`, `price`, `deadline`) VALUES (?)";
          const values = [
            dataInsert.insertId,
            req.body.paper_type,
            req.body.academic_level,
            req.body.pages,
            req.body.words,
            req.body.price,
            req.body.deadline,
          ];
          db.query(q, [values], (err, data) => {
            if (err) return res.status(400).json(err);
            return res.status(200).json(data.insertId);
          });
        }
      });
    }
  });
};
