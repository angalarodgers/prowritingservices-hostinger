import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const RegisterMain = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    password1: "",
    img: "",
    user: "client",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(inputs);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (inputs.password !== inputs.password1) {
      toast.error("Passwords do not match!");
    } else {
      try {
        const res = await axios.post(
          "http://localhost:8880/api/auth/register",
          inputs
        );
        console.log(res);
        if (res.status === 200) {
          toast.success("Registered Successfully!");
          await sleep(3000);
          navigate("/dashboard");
        }
      } catch (err) {
        toast.error(err.response.data);
      }
    }
  };
  return (
    <main className="main-content  mt-0" style={{ backgroundColor: "#F2F2F2" }}>
      <section className="min-vh-100 mb-8">
        <div
          className="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg"
          style={{ backgroundColor: "#5881A6" }}
        >
          <span className="mask bg-gradient-dark opacity-6" />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5 text-center mx-auto">
                <h1 className="font-weight-bolder text-info text-gradient mb-2 mt-5">
                  Welcome!
                </h1>
                {/* <p className="text-lead text-white">
                  Use these awesome forms to login or create new account in your
                  project for free.
                </p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-lg-n10 mt-md-n11 mt-n10">
            <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
              <div className="card z-index-0">
                <div className="card-header text-center pt-4">
                  <h5>Register with</h5>
                </div>
                <div className="row px-xl-5 px-sm-4 px-3"></div>
                <div className="card-body">
                  <form role="form text-left">
                    <div className="mb-3">
                      <input
                        type="text"
                        name="img"
                        className="form-control"
                        placeholder="Name"
                        aria-label="Name"
                        aria-describedby="email-addon"
                        onChange={handleChange}
                        value={inputs.img}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter your email"
                        onChange={handleChange}
                        value={inputs.email}
                        aria-label="Email"
                        aria-describedby="email-addon"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        aria-label="Password"
                        aria-describedby="password-addon"
                        onChange={handleChange}
                        value={inputs.password}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        name="password1"
                        className="form-control"
                        placeholder="Confirm Password"
                        aria-label="Password"
                        aria-describedby="password-addon"
                        onChange={handleChange}
                        value={inputs.password1}
                      />
                    </div>
                    <div className="form-check form-check-info text-left">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        I agree the{" "}
                        <a
                          href="javascript:;"
                          className="text-dark font-weight-bolder"
                        >
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                    <div className="text-center">
                      <button
                        type="button"
                        className="btn bg-gradient-info w-100 my-4 mb-2"
                        onClick={handleClick}
                      >
                        Sign up
                      </button>
                    </div>
                    <p className="text-sm mt-3 mb-0">
                      Already have an account?{" "}
                      <a href="/" className="text-dark font-weight-bolder">
                        Sign in
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Toaster />
    </main>
  );
};

export default RegisterMain;
