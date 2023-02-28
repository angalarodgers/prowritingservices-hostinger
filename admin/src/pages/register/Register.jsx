import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Register = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    img: "",
    user: "admin",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(inputs);
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8880/api/auth/register",
        inputs
      );
      console.log(res);
      toast.success("Registered Successfully!");
      await sleep(3000);
      console.log("Done");
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.response.data);
    }
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="ht-100v d-flex align-items-center justify-content-center">
            <div className="con">
              <h3 className="mg-b-5 tx-left sign-in-text">Create an Account</h3>
              <p className="tx-gray-500 tx-15 mg-b-40 welcome-text">
                Please create a new account to continue.
              </p>
              <div className="form-group tx-left">
                <label className="tx-gray-500 mg-b-5">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="email@domain.com"
                  name="email"
                  onChange={handleChange}
                  value={inputs.email}
                />
              </div>
              <div className="form-group">
                <div className="d-flex justify-content-between mg-b-5">
                  <label className="tx-gray-500 mg-b-0">Password</label>
                  <a href="#" className="tx-13 mg-b-0 tx-semibold">
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  name="password"
                  onChange={handleChange}
                  value={inputs.password}
                />
              </div>
              <p style={{ color: "darkred" }}>{error && error}</p>
              <a
                href="#"
                className="btn btn-brand btn-block "
                onClick={handleClick}
              >
                Sign In
              </a>
              <div className="pd-y-10 tx-uppercase tx-gray-500">or</div>
              <div className="tx-13 mg-t-10 tx-center tx-gray-500">
                Already Registered an account?{" "}
                <a href="login" className="tx-dark tx-semibold">
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Register;
