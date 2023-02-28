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
  return (
    <div className="row" style={{ backgroundColor: "#" }}>
      <div className="col-lg-4 py-lg-5 pb-5">
        <div className="media align-items-center">
          <div className="ui-icon border-0 text-large"> </div>
          <div className="media-body ml-2">
            <h5 className="m-0">Mobile</h5>
          </div>
        </div>
        <div className="media">
          <div className="ti-headphone-alt ui-icon border-0 " />
          <div className="media-body pt-2 ml-2">
            <div className="ui-company-text tx-gray-500">+0 (123) 456 7891</div>
            <div className="ui-company-text tx-gray-500">+9 (876) 543 2198</div>
          </div>
        </div>

        <div className="media align-items-center mt-3">
          <div className="ui-icon border-0"> </div>
          <div className="media-body ml-2">
            <h5 className="m-0">Email</h5>
          </div>
        </div>
        <div className="media align-items-center">
          <div className="ti-email ui-icon border-0" />
          <div className="media-body ml-2">
            <a
              href="mailto:support@example.com"
              className="ui-company-text tx-gray-500"
            >
              support@prowritingservice.com
            </a>
          </div>
        </div>
      </div>
      <hr className="d-lg-none w-100 my-5" />
      <form className="col-lg-8 py-5">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label className="form-label">Your name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Message</label>
          <textarea
            rows={6}
            className="form-control"
            defaultValue={""}
            name="message"
            onChange={handleChange}
          />
        </div>
        <span>
          {<p style={{ color: "red" }}>{err}</p> && (
            <p style={{ color: "red" }}>{err}</p>
          )}
        </span>
        <span>
          {<p style={{ color: "green" }}>{success}</p> && (
            <p style={{ color: "green" }}>{success}</p>
          )}
        </span>

        <button
          type="submit"
          className="btn btn-warning"
          style={{ color: "white", borderRadius: "10px" }}
          onClick={handleSubmit}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Footer;
