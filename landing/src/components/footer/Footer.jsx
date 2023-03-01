import React, { useState } from "react";

const Footer = () => {
  const [inputs, setInputs] = useState({ name: "", email: "", message: "" });
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(inputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputs.email.length === 0) {
      console.log("error");
      setErr("Email Required!");
      setSuccess("");
    } else if (inputs.name.length === 0) {
      console.log("error");
      setErr("Name Required!");
      setSuccess("");
    } else if (inputs.message.length === 0) {
      console.log("error");
      setErr("Message Required!");
      setSuccess("");
    } else {
      const config = {
        SecureToken: "009040fb-f9d3-40b8-b6ed-d9c90b3f7505",
        To: "angalacash@gmail.com",
        From: inputs.email,
        Subject: `${inputs.name}`,
        Body: `${inputs.message}`,
      };

      if (window.Email) {
        window.Email.send(config).then(() => setSuccess("Message Sent."));
        setErr("");
      }
    }
  };
  return <></>;
};

export default Footer;
