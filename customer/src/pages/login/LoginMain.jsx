import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import toast, { Toaster } from "react-hot-toast";

const LoginMain = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(inputs);
  };
  const { login } = useContext(AuthContext);
  const handleLogin = async (e) => {
    e.preventDefault();
    if (inputs.email.length === 0) {
      toast.error("Email is required!");
    } else if (inputs.password.length === 0) {
      toast.error("Password is required!");
    } else {
      try {
        const res = await login(inputs);
        if (res.status === 200) {
          toast.success("Logged In Successfully!");
          navigate("/dashboard");
        } else if (res.status == 404) {
          toast.error(res.data);
        } else {
          toast.error(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <main className="main-content  mt-0">
      <section>
        <div className="page-header min-vh-75">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                <div className="card card-plain mt-8">
                  <div className="card-header pb-0 text-left bg-transparent">
                    <h3 className="font-weight-bolder text-info text-gradient">
                      Welcome back
                    </h3>
                    <p className="mb-0">
                      Enter your email and password to sign in
                    </p>
                  </div>
                  <div className="card-body">
                    <form role="form">
                      <label>Email</label>
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
                      <label>Password</label>
                      <div className="mb-3">
                        <input
                          type="email"
                          name="password"
                          className="form-control"
                          placeholder="Enter your password"
                          onChange={handleChange}
                          value={inputs.password}
                          aria-label="Password"
                          aria-describedby="password-addon"
                        />
                      </div>
                      <div className="form-check form-switch">
                        <label htmlFor="">
                          <a href="#" style={{ textDecoration: "underline" }}>
                            Forgot Password
                          </a>
                        </label>
                      </div>
                      <div className="text-center">
                        <button
                          type="button"
                          className="btn bg-gradient-info w-100 mt-4 mb-0"
                          onClick={handleLogin}
                        >
                          Sign in
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer text-center pt-0 px-lg-2 px-1">
                    <p className="mb-4 text-sm mx-auto">
                      Don't have an account?{" "}
                      <a
                        href="/register"
                        className="text-info text-gradient font-weight-bold"
                      >
                        Sign up
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                  <div
                    className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
                    style={{ backgroundColor: "#5881A6" }}
                  />
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

export default LoginMain;
