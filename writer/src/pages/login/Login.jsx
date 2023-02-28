import React, { useState, useContext } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(inputs);
  };
  const { login } = useContext(AuthContext);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response.data);
    }
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="ht-100v d-flex align-items-center justify-content-center">
            <div className="con">
              <h3 className="mg-b-5 tx-left sign-in-text">Sign In</h3>
              <p className="tx-gray-500 tx-15 mg-b-40 welcome-text">
                Welcome back! Please signin to continue.
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
              <a
                href="#"
                onClick={handleLogin}
                className="btn btn-brand btn-block "
              >
                Sign In
              </a>
              <div className="pd-y-10 tx-uppercase tx-gray-500">or</div>
              <div className="tx-13 mg-t-10 tx-center tx-gray-500">
                Don't have an account?{" "}
                <a href="register" className="tx-dark tx-semibold">
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
